"use client";

import { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function AIInfo() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleGenerateOutput = () => {
    setOutputText(`You entered: ${inputText}. Here’s the generated response!`);
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        {/* Input Section */}
        <section className="max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">AI Info Generator</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Enter your query below and get AI-generated information instantly.
          </p>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your question or text here..."
              className="flex-grow px-5 py-3 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 shadow-sm"
            />
            <button
              onClick={handleGenerateOutput}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 focus:outline-none"
            >
              Generate
            </button>
          </div>
        </section>

        {/* Output Section */}
        {outputText && (
          <section className="max-w-3xl w-full p-6 mt-10 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Your AI Response</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {outputText}
            </p>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}