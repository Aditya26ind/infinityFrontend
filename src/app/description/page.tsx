'use client';

import React, { useState, useEffect } from 'react';
import { SyncLoader } from 'react-spinners';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SearchBar from '../components/searchBar';
import withAuth from '../components/protected';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';

interface PlayerInfo {
  name: string;
  nickName: string;
  image: string;
  role: string;
  intlTeam: string;
  bio?: string;
  DoB: string;
  birthPlace: string;
  height: string;
  bat: string;
  bowl: string;
  teams: string;
  rankings?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

function PlayerBio() {
  const [info, setInfo] = useState<PlayerInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);

  const gatherInfo = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        throw new Error('No access token found');
      }

      const response = await axios.get<PlayerInfo>(
        `${API_BASE_URL}/players/information/${selectedPlayerId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setInfo(response.data);
    } catch (error) {
      console.error('Error fetching player info:', error);
      setError('Failed to fetch player information. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gradient-to-b from-green-400 to-blue-500 text-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center my-6">
  <div className="relative w-full max-w-lg">
    <SearchBar onPlayerSelect={(player: any) => setSelectedPlayerId(player.uniqueId)} />
    <button
      onClick={gatherInfo}
      disabled={isLoading}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
    >
      <FaSearch />
    </button>
  </div>
</div>

      
      <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
        {isLoading ? (
          <SyncLoader color="#3B82F6" loading={true} />
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : info ? (
          <section className="py-16 max-w-6xl mx-auto px-6 w-full">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden">
              {/* Header with Image and Basic Info */}
              <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-500 to-green-500 p-6">
                <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                  <img
                    src={info.image}
                    alt={`Profile of ${info.name}`}
                    className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    onError={(e) => {
                      const imgEl = e.target as HTMLImageElement;
                      imgEl.src = '/default-avatar.png';
                    }}
                  />
                </div>
                <div className="w-full md:w-2/3 text-white pl-4 flex flex-col items-start">
                  <h2 className="text-4xl font-bold mb-2">{info.name}</h2>
                  <p className="text-xl opacity-90 mb-4">{info.nickName}</p>
                  <div className="flex flex-wrap gap-4">
                    <div>
                      <p className="font-semibold">Role</p>
                      <p>{info.role}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Team</p>
                      <p>{info.intlTeam}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Personal Info */}
                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg shadow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Personal Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">Date of Birth:</span>
                      <span>{info.DoB}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Birthplace:</span>
                      <span>{info.birthPlace}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Height:</span>
                      <span>{info.height}</span>
                    </div>
                  </div>
                </div>

                {/* Playing Details */}
                <div className="bg-white dark:bg-gray-600 p-4 rounded-lg shadow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Playing Details
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">Batting Style:</span>
                      <span>{info.bat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Bowling Style:</span>
                      <span>{info.bowl}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Teams:</span>
                      <span>{info.teams}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rankings */}
              {info.rankings && (() => {
                try {
                  const rankings = JSON.parse(info.rankings);
                  return (
                    <div className="p-6 bg-gray-100 dark:bg-gray-900">
                      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                        Rankings
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {['Test', 'ODI', 'T20'].map((format) => {
                          const formatRankings = rankings?.bat?.[`${format.toLowerCase()}Rank`];
                          const formatBestRank = rankings?.bat?.[`${format.toLowerCase()}BestRank`];
                          
                          return formatRankings ? (
                            <div key={format} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                              <h4 className="font-semibold mb-2">{format} Rankings</h4>
                              <div className="flex justify-between">
                                <span>Rank:</span>
                                <span>{formatRankings}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Best Rank:</span>
                                <span>{formatBestRank || 'N/A'}</span>
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    </div>
                  );
                } catch (error) {
                  console.error('Error parsing rankings:', error);
                  return null;
                }
              })()}
            </div>
          </section>
        ) : null}
      </div>

      <Footer />
    </div>
  );
}

export default withAuth(PlayerBio);