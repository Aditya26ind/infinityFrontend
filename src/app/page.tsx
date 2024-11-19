"use client";

import Navbar from './components/navbar'; // Import Navbar component
import Footer from './components/footer'; // Import Footer component
import { FaTrophy, FaBullseye,FaAddressCard, FaChartLine, FaChartBar, FaCrosshairs, FaMedal, FaInfoCircle } from 'react-icons/fa'; // Import cricket-related icons

export default function CricketLandingPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="h-screen bg-[url('https://imgs.search.brave.com/Muk7UhGI-JWzn5DYXKZn_vqI9Dpv7fMo5k_Y6x9XZCA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzY3LzEwLzE1/LzM2MF9GXzc2NzEw/MTU5MF94OFF2dWR4/M0kwUkw3MmhBT1VL/S0ZIWDVibHlzMzVC/RS5qcGc')] bg-cover bg-center relative">
        <div className="bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center text-center px-6 animate-fadeIn">
          <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight animate-bounce">
            Welcome to Cricket Hub
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Dive into the world of cricket with live scores, match analysis, player statistics, and the latest news from the world of cricket.
          </p>
          <button
            className="mb-8 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 animate-pulse"
          >
            Explore Now
          </button>
        </div>
      </section>

      {/* Why Cricket Hub Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">
            Why Choose Cricket Hub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaTrophy className="text-green-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Comprehensive Coverage</h3>
              <p>Get the most extensive coverage of matches, tournaments, and player news from around the globe.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaBullseye className="text-green-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Accurate Analysis</h3>
              <p>Enjoy in-depth analysis with accurate ball-by-ball commentary, predictive insights, and expert opinions.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <FaChartLine className="text-green-500 w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">Real-Time Updates</h3>
              <p>Stay updated with live scores, instant notifications, and real-time stats for every match.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaChartBar className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Player Stats</h3>
            <p>View detailed player statistics, including batting averages, bowling economy rates, strike rates, and more. Analyze individual performances with advanced metrics.</p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaCrosshairs className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Player Comparison</h3>
            <p>Compare player stats across different matches, teams, and tournaments. Find out who stands out and how they stack up against the competition.</p>
          </div>
        </div>
      </section>

      {/* Analysis Section */}

      {/* Milestones Section */}
      <section id="milestones" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaMedal className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Player Milestones</h3>
            <p>Track milestones like centuries, five-wicket hauls, highest scores, and other major achievements throughout a player's career.</p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaAddressCard className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Dashboard</h3>
            <p>Get access to a customizable dashboard that tracks your favorite teams, players, and matches with real-time updates and statistics.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section id="description" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaInfoCircle className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4">Description</h3>
            <p>Get Information related to your selected player</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}