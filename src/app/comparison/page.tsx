"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaTrophy, FaSpinner } from "react-icons/fa";
import withAuth from "../components/protected";
import axios from "axios";
import SearchBar from "../components/searchBar";

interface Players {
  bowling: any;
  batting: any;
}

function PlayerComparison() {
  const [players, setPlayers] = useState<Players | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const [id1, setId1] = useState<number | null>(null);
  const [id2, setId2] = useState<number | null>(null);
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  const accessToken = localStorage.getItem("accessToken");

  const handleCompare = async () => {
    // Reset previous state
    setPlayers(undefined);
    setError(null);
    setLoading(true);

    try {
      // Parallel API calls for better performance
      const [player1Batting, player1Bowling, player2Batting, player2Bowling] = await Promise.all([
        axios.get(`${API_BASE_URL}/players/batting/${id1}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
        axios.get(`${API_BASE_URL}/players/bowling/${id1}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
        axios.get(`${API_BASE_URL}/players/batting/${id2}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
        axios.get(`${API_BASE_URL}/players/bowling/${id2}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
      ]);

      const player1BattingData = player1Batting.data[0];
      const player1BowlingData = player1Bowling.data[0];
      const player2BattingData = player2Batting.data[0];
      const player2BowlingData = player2Bowling.data[0];

      setPlayers({
        batting: { 
          first: player1BattingData, 
          second: player2BattingData 
        },
        bowling: { 
          first: player1BowlingData, 
          second: player2BowlingData 
        },
      });
    } catch (err) {
      setError("Failed to fetch player data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
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
              <SearchBar onPlayerSelect={(player: any) => setId1(player.uniqueId)} />
            </div>

            {/* Input for Player 2 */}
            <div className="relative">
              <SearchBar onPlayerSelect={(player: any) => setId2(player.uniqueId)} />
            </div>
          </div>
          <button
            onClick={handleCompare}
            disabled={!id1 || !id2 || loading}
            className={`mt-8 text-white py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 ${
              !id1 || !id2 || loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <FaSpinner className="animate -spin mr-2" />
                Comparing...
              </span>
            ) : (
              "Compare Players"
            )}
          </button>

          {/* Error Message */}
          {error && (
            <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}
        </div>
      </section>

      {/* Player Comparison Results */}
      {players && (
        <section className="py-20 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Player Comparison Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Player 1 Stats */}
              {players.batting.first ? (
                <div className="bg-white dark:bg-green-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative transform hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    {players.batting.first.player?.name || "N/A"}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-200">Runs</span>
                      <span className="font-semibold text-lg">
                        {players.batting.first.runs.reduce((acc, run) => acc + Number(run), 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-200">Wickets</span>
                      <span className="font-semibold text-lg">
                        {players.bowling.first.wickets}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-200">Batting Average</span>
                      <span className="font-semibold text-lg">{(players.batting.first.average.reduce((acc, run) => acc + Number(run), 0) / players.batting.first.average.length).toFixed(2)}</span>

                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-200">Strike Rate</span>
                      <span className="font-semibold text-lg">{(players.batting.first.strikeRate.reduce((acc, run) => acc + Number(run), 0) / players.batting.first.strikeRate.length).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-600">Player 1 data is not available.</p>
                </div>
              )}

              {/* Player 2 Stats */}
              {players.batting.second ? (
                <div className="bg-white dark:bg-blue-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 relative transform hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                    {players.batting.second.player?.name || "N/A : Refetch"}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-200">Runs</span>
                      <span className="font-semibold text-lg">
                        {players.batting.second.runs.reduce((acc, run) => acc + Number(run), 0)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-200">Wickets</span>
                      <span className="font-semibold text-lg">
                      <span className="font-semibold text-lg">
                        {players.bowling.first.wickets}
                      </span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-200">Batting Average</span>
                      <span className="font-semibold text-lg">
                      <span className="font-semibold text-lg">{(players.batting.first.average.reduce((acc, run) => acc + Number(run), 0) / players.batting.first.average.length).toFixed(2)}</span>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-200">Strike Rate</span>
                      <span className="font-semibold text-lg">
                      <span className="font-semibold text-lg">{(players.batting.first.strikeRate.reduce((acc, run) => acc + Number(run), 0) / players.batting.first.strikeRate.length).toFixed(2)}</span>
                      </span>
                    </div>
                  </div>
      
                </div>
              ) : (
                <div className="bg-red-100 p-4 rounded-lg">
                  <p className="text-red-600">Player 2 data is not available.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default withAuth(PlayerComparison);