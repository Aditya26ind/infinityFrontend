"use client";

import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaUser, FaTrophy } from 'react-icons/fa';
import withAuth from '../components/protected';


function PlayerComparison() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [comparisonResult, setComparisonResult] = useState(null);
  const [dashboardData, setDashboardData] = useState([]);

  const handleCompare = () => {
    const result = {
      player1: { name: player1 || 'Player 1', runs: 5000, wickets: 150, avg: 45.2, strikeRate: 92.5 },
      player2: { name: player2 || 'Player 2', runs: 5200, wickets: 140, avg: 48.5, strikeRate: 95.1 }
    };
    setComparisonResult(result);
  };

  const handleAddToDashboard = () => {
    const currentData = JSON.parse(localStorage.getItem('dashboardData')) || [];
    const updatedData = [...currentData, comparisonResult];
    localStorage.setItem('dashboardData', JSON.stringify(updatedData));
    setDashboardData(updatedData); // Update local state
  };

  return (
    <div className="bg-white dark:bg-gradient-to-b from-green-400 to-blue-500 text-gray-900 dark:text-gray-200 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Comparison Form */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-12 text-gray-900 dark:text-white animate-bounce">
            Cricket Player Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Input for Player 1 */}
  <div className="relative">
    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-6 h-6" />
    <input
      type="text"
      placeholder="Enter Player 1 Name"
      className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 shadow-lg dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:shadow-xl hover:border-green-500 dark:hover:border-green-500"
      value={player1}
      onChange={(e) => setPlayer1(e.target.value)}
    />
  </div>

  {/* Input for Player 2 */}
  <div className="relative">
    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 w-6 h-6" />
    <input
      type="text"
      placeholder="Enter Player 2 Name"
      className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 shadow-lg dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:shadow-xl hover:border-green-500 dark:hover:border-green-500"
      value={player2}
      onChange={(e) => setPlayer2(e.target.value)}
    />
  </div>
</div>
          <button
            onClick={handleCompare}
            className="mt-8 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Compare Players
          </button>
        </div>
      </section>

      {/* Comparison Result Section */}
      {comparisonResult && (
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Player Comparison Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Player 1 Stats */}
              <div className="bg-white dark:bg-green-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                  {comparisonResult.player1.name}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-200">Runs</span>
                    <span className="font-semibold text-lg">{comparisonResult.player1.runs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-200">Wickets</span>
                    <span className="font-semibold text-lg">{comparisonResult.player1.wickets}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-200">Batting Average</span>
                    <span className="font-semibold text-lg">{comparisonResult.player1.avg}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-200">Strike Rate</span>
                    <span className="font-semibold text-lg">{comparisonResult.player1.strikeRate}</span>
                  </div>
                </div>
                <FaTrophy className="absolute right-4 top-4 text-green-500 w-10 h-10 opacity-30" />
              </div>

              {/* Player 2 Stats */}
              <div className="bg-white dark:bg-blue-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                  {comparisonResult.player2.name}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-200">Runs</span>
                    <span className="font-semibold text-lg">{comparisonResult.player2.runs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-200">Wickets</span>
                    <span className="font-semibold text-lg">{comparisonResult.player2.wickets}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-200">Batting Average</span>
                    <span className="font-semibold text-lg">{comparisonResult.player2.avg}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-200">Strike Rate</span>
                    <span className="font-semibold text-lg">{comparisonResult.player2.strikeRate}</span>
                  </div>
                </div>
                <FaTrophy className="absolute right-4 top-4 text-green-500 w-10 h-10 opacity-30" />
              </div>
            </div>

            {/* Add to Dashboard Button */}
            <div className="text-center mt-8">
              <button
                onClick={handleAddToDashboard}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center w-12 h-12 relative"
              >
                <span className="block w-5 h-0.5 bg-white absolute"></span>
                <span className="block h-5 w-0.5 bg-white absolute"></span>
              </button>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Add to Dashboard</p>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default withAuth(PlayerComparison)