"use client";

import { FaSearch } from "react-icons/fa"; // Import search icon

export default function SearchBar() {
  return (
    <div className="flex justify-center items-center py-6 bg-white-100 dark:bg-gray-800">
      <div className="relative w-full max-w-lg">
        {/* Search Icon */}
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search players, matches, teams..."
          className="w-full py-3 pl-12 pr-4 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-green-500 dark:focus:ring-blue-400 focus:outline-none shadow-md dark:shadow-lg transition-shadow duration-300"
        />

        {/* Clear Button */}
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors">
          X
        </button>
      </div>
    </div>
  );
}