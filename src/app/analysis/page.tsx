"use client";

import { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SearchBar from '../components/searchBar';
import { FaTrophy, FaRunning, FaBowlingBall } from 'react-icons/fa';
import withAuth from '../components/protected';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

function PlayerAnalysis() {
  const [player] = useState({
    name: 'Virat Kohli',
    age: 33,
    team: 'India',
    image: 'https://imgs.search.brave.com/AgPg6oHHKcapRgxtIhoE2hBXqs2-HE1O6mF9omz8JP0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q4LzIw/Lzk1L2Q4MjA5NTg4/OTI0Mzc3YTg1OTY1/ZTMwNTQwMWU5MjRk/LmpwZw', // Replace with real image
  });

  const formatData = {
    labels: ['T20', 'ODI', 'Test'],
    datasets: [
      {
        label: 'Runs',
        data: [3000, 12000, 7000],
        backgroundColor: ['#4CAF50', '#FF9800', '#03A9F4'],
      },
      {
        label: 'Strike Rate',
        data: [140, 92, 55],
        backgroundColor: ['#2196F3', '#9C27B0', '#FFC107'],
      },
    ],
  };

  const formatOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Performance by Format',
      },
    },
  };

  const centuriesData = {
    labels: ['T20 Centuries', 'ODI Centuries', 'Test Centuries'],
    datasets: [
      {
        label: 'Centuries',
        data: [1, 45, 27],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
      },
    ],
  };

  return (
    // <div className="bg-white dark:bg-gradient-to-b from-green-400 to-blue-500 text-gray-900 dark:text-gray-200 min-h-screen">
    //   <Navbar />
    //   <SearchBar />
    //   <section className="py-16 max-w-7xl mx-auto px-6">
    //     <div className="flex flex-col md:flex-row justify-between items-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
    //       <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
    //         <img
    //           src={player.image}
    //           alt={player.name}
    //           className="w-48 h-48 object-cover rounded-full border-4 border-green-500 shadow-lg"
    //         />
    //       </div>

    //       <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
    //         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{player.name}</h2>
    //         <p className="text-lg mt-4">
    //           <span className="font-semibold">Team:</span> {player.team}
    //         </p>
    //         <p className="text-lg mt-2">
    //           <span className="font-semibold">Age:</span> {player.age}
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="py-12 bg-gray-50 dark:bg-gray-800">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Player Performance by Format</h3>
          
    //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    //         <div className="flex flex-col space-y-4 text-center md:text-left bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    //           <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Stats by Format</h4>
    //           <p className="text-lg text-gray-700 dark:text-gray-300">
    //             <FaRunning className="inline-block text-green-500 mr-2" /> <strong>Runs:</strong> 3000 (T20), 12000 (ODI), 7000 (Test)
    //           </p>
    //           <p className="text-lg text-gray-700 dark:text-gray-300">
    //             <FaBowlingBall className="inline-block text-blue-500 mr-2" /> <strong>Strike Rate:</strong> 140 (T20), 92 (ODI), 55 (Test)
    //           </p>
    //           <p className="text-lg text-gray-700 dark:text-gray-300">
    //             <FaTrophy className="inline-block text-yellow-500 mr-2" /> <strong>Centuries:</strong> 1 (T20), 45 (ODI), 27 (Test)
    //           </p>
    //         </div>

    //         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    //           <Bar data={formatData} options={formatOptions} />
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="py-12 bg-white dark:bg-gray-900">
    //     <div className="max-w-7xl mx-auto px-6">
    //       <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Centuries Distribution</h3>
    //       <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl max-w-md mx-auto">
    //         <Pie data={centuriesData} options={formatOptions} />
    //       </div>
    //     </div>
    //   </section>

    //   <Footer />
    // </div>
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      Removed
    </div>
  );
}
export default  withAuth(PlayerAnalysis)