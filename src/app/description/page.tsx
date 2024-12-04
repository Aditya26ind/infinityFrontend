"use client";

import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SearchBar from '../components/searchBar';
import withAuth from '../components/protected';


 function PlayerBio() {
  const [player] = useState({
    name: 'Virat Kohli',
    description: `Virat Kohli is one of the most talented and fierce cricket players from India, known for his consistency in the game. 
    His aggressive playing style and passion make him a formidable opponent on the field. 
    Kohli has earned numerous records in ODI and Test cricket. 
    As a leader and icon, he continues to inspire millions across the globe.`,
    bioPoints: [
      'Born: November 5, 1988, Delhi, India',
      'Right-handed batsman and former captain of the Indian cricket team',
      'Achieved over 12,000 runs in ODI cricket',
      'Ranked among the world’s top batsmen consistently for a decade',
      'Known for aggressive playing style and exceptional fitness',
      'Multiple-time ICC Player of the Year and Wisden Award winner'
    ],
    image: 'https://imgs.search.brave.com/AgPg6oHHKcapRgxtIhoE2hBXqs2-HE1O6mF9omz8JP0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q4LzIw/Lzk1L2Q4MjA5NTg4/OTI0Mzc3YTg1OTY1/ZTMwNTQwMWU5MjRk/LmpwZw',
  });

  return (
    <div className="bg-white dark:bg-gradient-to-b from-green-400 to-blue-500 text-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar />
      <SearchBar />
      {/* Player Bio Section */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Player Image */}
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
            <img
              src={player.image}
              alt={player.name}
              className="w-48 h-48 object-cover rounded-full border-4 border-green-500 shadow-lg"
            />
          </div>

          {/* Player Description */}
          <div className="w-full md:w-2/3 text-center md:text-left px-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{player.name}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {player.description}
            </p>
          </div>
        </div>

        {/* Player Bio Points */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Player Bio</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {player.bioPoints.map((point, index) => (
              <li key={index} className="text-lg">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default withAuth(PlayerBio);