"use client";

import { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SearchBar from '../components/searchBar';
import { FaSearch } from 'react-icons/fa';
import withAuth from '../components/protected';


Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

function PlayerAnalysis() {
  const [player] = useState({
    name: 'Virat Kohli',
    age: 33,
    team: 'India',
    image: 'https://imgs.search.brave.com/AgPg6oHHKcapRgxtIhoE2hBXqs2-HE1O6mF9omz8JP0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q4LzIw/Lzk1L2Q4MjA5NTg4/OTI0Mzc3YTg1OTY1/ZTMwNTQwMWU5MjRk/LmpwZw', // Replace with real image
    runs: 12000,
    wickets: 4,
    average: 59.3,
    strikeRate: 93.25,
    centuries: 45,
  });

  const performanceData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Runs',
        data: [900, 1100, 800, 950],
        backgroundColor: '#4CAF50',
      },
      {
        label: 'Strike Rate',
        data: [85, 88, 90, 93],
        backgroundColor: '#2196F3',
      },
    ],
  };

  const centuriesData = {
    labels: ['Matches with Centuries', 'Other Matches'],
    datasets: [
      {
        label: 'Centuries',
        data: [45, 55],
        backgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  };

  const consistencyData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Batting Average',
        data: [55, 58, 60, 59],
        borderColor: '#f39c12',
        backgroundColor: 'rgba(243, 156, 18, 0.2)',
        fill: true,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Player Performance Analysis`,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Consistency (Batting Average Over the Years)',
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gradient-to-b from-green-400 to-blue-500 text-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar />
      
      <section className="py-16 max-w-7xl mx-auto px-6">
      <SearchBar />
        <div className="mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl">
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src={player.image}
                alt={player.name}
                className="w-48 h-48 object-cover rounded-full border-4 border-green-500 shadow-lg"
              />
            </div>

            <div className="col-span-2 flex flex-col space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{player.name}</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-green-600 dark:text-green-400">Team:</span> {player.team}
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-green-600 dark:text-green-400">Runs:</span> {player.runs}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-green-600 dark:text-green-400">Age:</span> {player.age}
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-green-600 dark:text-green-400">Wickets:</span> {player.wickets}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-green-600 dark:text-green-400">Batting Average:</span> {player.average}
                  </p>
                </div>
                <div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-green-600 dark:text-green-400">Strike Rate:</span> {player.strikeRate}%
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-green-600 dark:text-green-400">Centuries:</span> {player.centuries}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Bar data={performanceData} options={barOptions} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Centuries Distribution
            </h3>
            <Pie data={centuriesData} options={pieOptions} />
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl col-span-1 md:col-span-2">
            <Line data={consistencyData} options={lineOptions} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default withAuth(PlayerAnalysis);