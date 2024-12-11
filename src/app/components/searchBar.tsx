"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import debounce from 'lodash/debounce';

export default function SearchBar({ onPlayerSelect }: any) {
  const [searchResults, setSearchResults] = useState<any>([]);
  const [playerName, setPlayerName] = useState("");
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  const clear = () => {
    setPlayerName("");
    setSearchResults([]);

  };

  const afterSelection = (player:any) => {
    setPlayerName(player.name)
    setSearchResults([]);
    onPlayerSelect(player);
  }
  const debouncedFetchPlayers = useCallback(
    debounce(async (value: string) => {
      try {
        const playersData = await axios.get(`${API_BASE_URL}/players/search/${value}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setSearchResults(playersData.data);
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    }, 1000), // 500ms delay
    [] // Empty dependency array ensures the function is created only once
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlayerName(value); // Update input value immediately
    
    // Only trigger search if value is not empty
    if (value.trim()) {
      debouncedFetchPlayers(value);
    } else {
      setSearchResults([]); // Clear results if input is empty
    }
  };

  return (
    <div className="flex justify-center items-center py-6 bg-white-100 dark:bg-gray-800">
      <div className="relative w-full max-w-lg">
        
        {/* Input Field */}
        
        <input
          type="text"
          placeholder="Search players"
          className="w-full py-3 pl-12 pr-4 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-400 focus:outline-none shadow-md dark:shadow-lg transition-shadow duration-300"
          onChange={handleInputChange}
          value={playerName}
        />

        {/* Clear Button */}
        <button
          onClick={clear}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors"
        >
          X
        </button>

        {/* Display Search Results */}
        {searchResults.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 shadow-lg rounded-lg max-h-60 overflow-y-auto">
            <ul className="py-2">
              {searchResults.map((player: any) => (
                <li onClick={() => afterSelection(player)}
                  key={player.id}
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                >
                  {player.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
