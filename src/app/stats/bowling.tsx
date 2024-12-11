"use client";

import { useState, useCallback, useEffect } from 'react';
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
import { FaSearch } from 'react-icons/fa';
import withAuth from '../components/protected';
import axios from 'axios';
import { SyncLoader } from 'react-spinners';

Chart.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  ArcElement, 
  Title, 
  Tooltip, 
  Legend
);

interface PlayerStats {
  id: number;
  format: string[];
  matches: string[];
  innings: string[];
  balls: string[];
  runs: string[];
  maidens: string[];
  wickets: string[];
  average: string[];
  economy: string[];
  strikeRate: string[];
  fourWickets: string[];
  fiveWickets: string[];
  tenwickets: string[];
  playerId: number;
  player?: {
    id: number;
    uniqueId: number;
    name: string;
    country: string;
    faceImageId: string;
  };
}

function PlayerAnalysis() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Memoized function to fetch player stats
  const fetchPlayerStats = useCallback(async () => {
    // Reset states before fetching
    setPlayerStats(null);
    setError(null);

    if (!selectedPlayerId) {
      setError('Please select a player first');
      return;
    }

    setIsLoading(true);
    
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('No access token found');
      }

      const response = await axios.get(`${API_BASE_URL}/players/bowling/${selectedPlayerId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      // Ensure data is available before setting
      if (response.data) {
        setPlayerStats(response.data[0]);
        console.log('Fetched player stats:', response.data);
      } else {
        setError('No player stats found');
      }
    } catch (error) {
      console.error('Error fetching player stats:', error);
      setError('Failed to fetch player information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedPlayerId, API_BASE_URL]);

  // Trigger fetch when player is selected
  useEffect(() => {
    if (selectedPlayerId) {
      fetchPlayerStats();
    }
  }, [selectedPlayerId, fetchPlayerStats]);

  // Calculate player summary
  const calculatePlayerSummary = () => {
    if (!playerStats) return null;
  
    const matches = playerStats.matches.map(m => parseInt(m, 10));
    const totalMatches = matches.reduce((a, b) => a + b, 0);
    
    const wickets = playerStats.wickets.map(w => parseInt(w, 10));
    const totalWickets = wickets.reduce((a, b) => a + b, 0);
    
    const runs = playerStats.runs.map(r => parseInt(r, 10));
    const totalRuns = runs.reduce((a, b) => a + b, 0);
    
    const economies = playerStats.economy.map(e => parseFloat(e));
    const avgEconomy = economies.reduce((a, b) => a + b, 0) / economies.length;

    return {
      name: playerStats.player?.name || 'Unknown Player',
      team: playerStats.player?.country || 'Unknown Team',
      image: playerStats.player?.faceImageId || '',
      matches: totalMatches,
      wickets: totalWickets,
      runs: totalRuns,
      economy: avgEconomy.toFixed(2),
      formats: playerStats.format
    };
  };

  // Performance data for bar chart
  // Performance data for bar chart
const performanceData = playerStats && playerStats.format && playerStats.wickets ? {
  labels: playerStats.format,
  datasets: [
    {
      label: 'Wickets',
      data: playerStats.wickets.map(w => parseInt(w, 10) || 0),
      backgroundColor: '#FF6384',
    },
    {
      label: 'Runs Conceded',
      data: playerStats.runs.map(r => parseInt(r, 10) || 0),
      backgroundColor: '#36A2EB',
    },
    {
      label: 'Economy Rate',
      data: playerStats.economy.map(e => parseFloat(e) || 0),
      backgroundColor: '#FFCE56',
    },
  ],
} : null;

// Wickets distribution pie chart
const wicketsData = playerStats && playerStats.fourWickets && playerStats.fiveWickets ? {
  labels: ['Four Wickets', 'Five Wickets'],
  datasets: [
    {
      label: 'Performance Milestones',
      data: [
        playerStats.fourWickets.filter(fw => fw !== '-/-').length,
        playerStats.fiveWickets.filter(fw => fw !== '-/-').length
      ],
      backgroundColor: ['#FF6384', '#36A2EB'],
    },
  ],
} : null;

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: {
        display: true,
        text: 'Bowling Performance by Format',
      },
    },
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' as const },
      title: {
        display: true,
        text: 'Wickets Milestones',
      },
    },
  };

  const playerSummary = calculatePlayerSummary();

  return (
    <div className="bg-white dark:bg-gradient-to-b from-green-400 to-blue-500 text-gray-900 dark:text-gray-200 min-h-screen">
      
      <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="left-80  -top-16  relative w-full max-w-lg">
          <SearchBar onPlayerSelect={(player: any) => setSelectedPlayerId(player.uniqueId)} />
          <button 
            onClick={fetchPlayerStats} 
            disabled={isLoading || !selectedPlayerId} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
          >
            <FaSearch />
          </button>
        </div>

        {isLoading ? (
          <div className="flex justify-center mt-8">
            <SyncLoader color="#3B82F6" loading={true} />
          </div>
        ) : error ? (
          <div className="text-red-500 text-center mt-8">{error}</div>
        ) : playerSummary ? (
          <div>
            <div className="mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="flex justify-center md:justify-start">
                  <img
                    src={playerSummary.image}
                    alt={playerSummary.name}
                    className="w-48 h-48 object-cover rounded-full border-4 border-green-500 shadow-lg"
                  />
                </div>

                <div className="col-span-2 flex flex-col space-y-4 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {playerSummary.name}
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-green-600 dark:text-green-400">Team:</span> {playerSummary.team}
                      </p>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-green-600 dark:text-green-400">Total Matches:</span> {playerSummary.matches}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-green-600 dark:text-green-400">Total Wickets:</span> {playerSummary.wickets}
                      </p>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-green-600 dark:text-green-400">Economy Rate:</span> {playerSummary.economy}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {performanceData && wicketsData && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"><Bar data={performanceData} options={barOptions} /></div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"><Pie data={wicketsData} options={pieOptions} /></div>
              </div>
            )}
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default withAuth(PlayerAnalysis);