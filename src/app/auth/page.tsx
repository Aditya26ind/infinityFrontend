"use client"; // Marks the component as a Client Component
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid'; // Import icons from Heroicons

export default function AuthPage() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from local storage on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode and save preference in local storage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Navbar with only Home (Cricket Hub) */}
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href='/' className="text-2xl font-bold text-gray-800 dark:text-white">Cricket Hub</Link>
        </div>
      </nav>

      {/* Dark Mode Toggle Button */}
      <div className="absolute top-3 right-5">
        <button
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-gray-300 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-500 dark:focus:ring-green-400">
          {darkMode ? (
            <SunIcon className="h-6 w-6" /> // Sun Icon for Dark Mode
          ) : (
            <MoonIcon className="h-6 w-6" /> // Moon Icon for Light Mode
          )}
        </button>
      </div>

      {/* Main Form Section */}
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg mt-12 rounded-lg flex justify-between p-10 space-x-8 mx-auto transition-transform transform hover:scale-105">
        
        {/* Login Form */}
        <div className="w-1/2 flex flex-col justify-center p-8 bg-gray-100 dark:bg-gray-900 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Login
          </h2>
          <form>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-green-500 dark:focus:ring-green-400 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-green-500 dark:focus:ring-green-400 transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 dark:focus:ring-green-300">
              Login
            </button>
          </form>
        </div>

        {/* Signup Form */}
        <div className="w-1/2 flex flex-col justify-center p-8 bg-gray-100 dark:bg-gray-900 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
            Sign Up
          </h2>
          <form>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-green-500 dark:focus:ring-green-400 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-green-500 dark:focus:ring-green-400 transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border dark:bg-gray-900 dark:text-gray-300 border-gray-300 dark:border-gray-600 focus:ring-4 focus:ring-green-500 dark:focus:ring-green-400 transition-all duration-300"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 dark:focus:ring-green-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-10">
        <div className="text-center text-gray-600 dark:text-gray-400">
          &copy; 2024 Cricket Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}