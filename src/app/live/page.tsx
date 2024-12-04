"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaFireAlt, FaTrophy } from "react-icons/fa"; // Icons for fire and trophy
import withAuth from '../components/protected';


function LiveScorecard() {
  const [liveMatchData] = useState([
    {
      team1: { name: "India", logo: "/india-logo.png", score: "250/4 (20)" },
      team2: { name: "Australia", logo: "/australia-logo.png", score: "245/7 (20)" },
      highlights: { topScorer: "Virat Kohli - 75(45)", bestBowler: "Bumrah - 2/24" },
      status: "Live",
    },
    {
      team1: { name: "Pakistan", logo: "/pakistan-logo.png", score: "190/5 (18)" },
      team2: { name: "England", logo: "/england-logo.png", score: "187/8 (20)" },
      highlights: { topScorer: "Babar Azam - 90(52)", bestBowler: "Shaheen Afridi - 3/30" },
      status: "Live",
    },
    {
      team1: { name: "South Africa", logo: "/sa-logo.png", score: "220/6 (20)" },
      team2: { name: "Sri Lanka", logo: "/sri-lanka-logo.png", score: "218/9 (20)" },
      highlights: { topScorer: "Quinton de Kock - 80(39)", bestBowler: "Rabada - 2/28" },
      status: "Finished",
    },
    {
      team1: { name: "New Zealand", logo: "/nz-logo.png", score: "300/5 (50)" },
      team2: { name: "West Indies", logo: "/wi-logo.png", score: "299/9 (50)" },
      highlights: { topScorer: "Kane Williamson - 110(100)", bestBowler: "Trent Boult - 4/50" },
      status: "Live",
    },
    {
      team1: { name: "Bangladesh", logo: "/bd-logo.png", score: "180/3 (20)" },
      team2: { name: "Afghanistan", logo: "/afg-logo.png", score: "179/8 (20)" },
      highlights: { topScorer: "Shakib Al Hasan - Expected", bestBowler: "Rashid Khan - Expected" },
      status: "Starts in 2h",
    },
    {
      team1: { name: "India", logo: "/india-logo.png", score: "360/7 (50)" },
      team2: { name: "Pakistan", logo: "/pakistan-logo.png", score: "210/10 (47)" },
      highlights: { topScorer: "Rohit Sharma - 150(128)", bestBowler: "Bumrah - 3/40" },
      status: "Finished",
    },
  ]);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-200">
      {/* Navbar */}
      <Navbar />

      {/* Live Scorecards Section */}
      <section className="py-12 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Live Match Scorecards</h2>
        <h1 className="text-1xl text-center mb-12">Get Ready for a Blast!!!!</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveMatchData.map((match, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Pulsating Glow for Live Matches */}
              {match.status === "Live" && (
                <div className="absolute inset-0 rounded-lg bg-green-200 opacity-15 pointer-events-none animate-pulse"></div>
              )}

              {/* Team Logos and Names */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={match.team1.logo}
                    alt={match.team1.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-lg font-bold">{match.team1.name}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-bold">{match.team2.name}</span>
                  <img
                    src={match.team2.logo}
                    alt={match.team2.name}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>

              {/* Scores */}
              <div className="flex items-center justify-center space-x-4 text-2xl font-semibold">
                <span className="text-red-500">{match.team1.score}</span>
                <FaFireAlt className="text-red-500" />
                <span className="text-red-500">{match.team2.score}</span>
              </div>

              {/* Top Scorer, Best Bowler */}
              <div className="mt-4 text-center">
                <p className="text-sm">
                  <span className="font-semibold">Top Scorer:</span> {match.highlights.topScorer}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Best Bowler:</span> {match.highlights.bestBowler}
                </p>
              </div>

              {/* Match Status */}
              <div className="mt-6 text-center">
                <span
                  className={`px-4 py-2 rounded-lg text-sm font-bold ${
                    match.status === "Live"
                      ? "bg-green-500 text-white animate-pulse"
                      : match.status === "Finished"
                      ? "bg-gray-500 text-white"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  {match.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export default withAuth(LiveScorecard);