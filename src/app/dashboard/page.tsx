"use client";

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaUser, FaTrophy } from 'react-icons/fa';
import withAuth from '../components/protected';

function PlayerComparison() {
  const dummyData = [
    {
      player1: { name: 'Virat Kohli', runs: 12000, wickets: 4, avg: 59.3, strikeRate: 93.25 },
      player2: { name: 'Steve Smith', runs: 11000, wickets: 7, avg: 61.1, strikeRate: 88.5 },
    },
    {
      player1: { name: 'Sachin Tendulkar', runs: 18000, wickets: 46, avg: 44.8, strikeRate: 85.7 },
      player2: { name: 'Ricky Ponting', runs: 13000, wickets: 3, avg: 42.0, strikeRate: 80.0 },
    },
  ];

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 min-h-screen">
      <Navbar />

      {/* Main Section */}
      <section className="py-16 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-indigo-300 dark:to-indigo-500">
          Legendary Showdown
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
          Compare the stats saved in your dashboard
        </p>
      </section>

      {/* Comparison Cards */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {dummyData.map((data, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-60 p-8 rounded-2xl shadow-2xl 
                         backdrop-blur-lg border border-gray-200 dark:border-gray-700 
                         transform hover:scale-105 transition-all duration-300"
            >
              {/* Player Comparison Header */}
              <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                {data.player1.name} <span className="text-blue-600 dark:text-indigo-400">vs</span> {data.player2.name}
              </h3>

              <div className="grid grid-cols-3 items-center">
                {/* Player 1 Stats */}
                <div className="text-center space-y-3">
                  <FaUser className="text-blue-500 w-8 h-8 mx-auto mb-2" />
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">{data.player1.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Runs: <span className="font-bold text-gray-900 dark:text-white">{data.player1.runs}</span></p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Wickets: <span className="font-bold text-gray-900 dark:text-white">{data.player1.wickets}</span></p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Avg: <span className="font-bold text-gray-900 dark:text-white">{data.player1.avg}</span></p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Strike Rate: <span className="font-bold text-gray-900 dark:text-white">{data.player1.strikeRate}%</span></p>
                </div>

                {/* Divider */}
                <div className="flex flex-col items-center text-center space-y-2">
                  <FaTrophy className="text-yellow-500 w-10 h-10 opacity-80" />
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Comparison</span>
                </div>

                {/* Player 2 Stats */}
                <div className="text-center space-y-3">
                  <FaUser className="text-red-500 w-8 h-8 mx-auto mb-2" />
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">{data.player2.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Runs: <span className="font-bold text-gray-900 dark:text-white">{data.player2.runs}</span></p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Wickets: <span className="font-bold text-gray-900 dark:text-white">{data.player2.wickets}</span></p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Avg: <span className="font-bold text-gray-900 dark:text-white">{data.player2.avg}</span></p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Strike Rate: <span className="font-bold text-gray-900 dark:text-white">{data.player2.strikeRate}%</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default withAuth(PlayerComparison)