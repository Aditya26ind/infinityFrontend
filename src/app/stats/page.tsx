"use client";
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BattingPlayerAnalysis from './batting'; // Batting analysis page
import BowlingPlayerAnalysis from './bowling'; // Bowling analysis page

function PlayerStatisticsDashboard() {
  const [activeTab, setActiveTab] = useState<'batting' | 'bowling'>('batting');

  const tabClasses = (tab: 'batting' | 'bowling') =>
    `px-4 py-2 text-sm font-medium transition-colors duration-300 ${
      activeTab === tab
        ? 'bg-green-500 text-white'
        : 'bg-gray-200 text-gray-700 hover:bg-green-100'
    }`;

  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`${tabClasses('batting')} rounded-l-lg`}
              onClick={() => setActiveTab('batting')}
            >
              Batting Analysis
            </button>
            <button
              type="button"
              className={`${tabClasses('bowling')} rounded-r-lg`}
              onClick={() => setActiveTab('bowling')}
            >
              Bowling Analysis
            </button>
          </div>
        </div>
        {activeTab === 'batting' ? (
          <BattingPlayerAnalysis />
        ) : (
          <BowlingPlayerAnalysis />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default PlayerStatisticsDashboard;