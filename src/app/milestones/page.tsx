"use client";

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaRunning, FaBowlingBall, FaTrophy } from 'react-icons/fa';

export default function RecordsList() {
  const records = [
    {
      title: "Fastest to 10,000 Runs in ODIs",
      description: "The quickest player to reach 10,000 runs in ODI cricket.",
      player: {
        name: "Virat Kohli",
        team: "India",
        age: 33,
        image: "https://imgs.search.brave.com/UDaghDTSVcUkRLzrB2Jnn4jwG38wf-f20GjW62O9CF0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzliL1ZpcmF0X0tv/aGxpX2luX1BNT19O/ZXdfRGVsaGkuanBn",
        stats: { runs: 12000, centuries: 43, fastest10000Runs: "205 innings" },
      },
    },
    {
      title: "Most Centuries in International Cricket",
      description: "The highest number of centuries scored across all formats.",
      player: {
        name: "Sachin Tendulkar",
        team: "India",
        age: 47,
        image: "https://imgs.search.brave.com/hwSashhyf5cNblFR3H8DhZKQSf4g7Uye6vg8LEjgB5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I4L1NhY2hpbi1U/ZW5kdWxrYXJfKGNy/b3BwZWQpLmpwZw",
        stats: { runs: 34000, centuries: 100, awards: "Man of the Series: 15" },
      },
    },
    {
      title: "Most Wickets in Test Cricket",
      description: "Record for the most wickets taken in Test cricket history.",
      player: {
        name: "Muttiah Muralitharan",
        team: "Sri Lanka",
        age: 48,
        image: "https://imgs.search.brave.com/x5QycMR_KWDh4LG3EWBqFSzD933rzOGxVeBd9HknISY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuY3JpY2J1enou/Y29tL2EvaW1nL3Yx/LzE1MngxNTIvaTEv/YzE1NDk5MC9tdXR0/aWFoLW11cmFsaXRo/YXJhbi5qcGc",
        stats: { wickets: 800, bestBowling: "9/51" },
      },
    },
    {
      title: "Most Runs in International Cricket",
      description: "The highest aggregate runs scored in international matches.",
      player: {
        name: "Sachin Tendulkar",
        team: "India",
        age: 47,
        image: "https://imgs.search.brave.com/hwSashhyf5cNblFR3H8DhZKQSf4g7Uye6vg8LEjgB5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I4L1NhY2hpbi1U/ZW5kdWxrYXJfKGNy/b3BwZWQpLmpwZw",
        stats: { runs: 34357, matches: 664 },
      },
    },
    {
      title: "Most Sixes in ODIs",
      description: "Record for hitting the most sixes in One Day Internationals.",
      player: {
        name: "Shahid Afridi",
        team: "Pakistan",
        age: 44,
        image: "https://imgs.search.brave.com/p0Jnf5WnrHi4Kybj-Tem_CwDPHCsG3Ywnz4WUy6FLPU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E4L1NoYWhpZF9B/ZnJpZGlfaW5fMjAx/Ny5qcGc",
        stats: { sixes: 351, matches: 398 },
      },
    },
    {
      title: "Fastest 50 in T20 Internationals",
      description: "The quickest 50 in T20 cricket, scored off 12 balls.",
      player: {
        name: "Yuvraj Singh",
        team: "India",
        age: 40,
        image: "https://imgs.search.brave.com/APKK3TEmykUch1Q6-P4kX7Ji4U8fQ66kF1dJ6bbbF_s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QllqQTVPR05o/T1dFdE9UbGpNaTAw/WkRZMkxUaGlOemt0/TXpWaFkyUmhNek5s/WWpCalhrRXlYa0Zx/Y0djQC5qcGc",
        stats: { balls: 12, runs: 58 },
      },
    },
    {
      title: "Most Runs in a Calendar Year in ODIs",
      description: "The most runs scored by a player in a single calendar year in ODIs.",
      player: {
        name: "Sachin Tendulkar",
        team: "India",
        age: 47,
        image: "https://imgs.search.brave.com/hwSashhyf5cNblFR3H8DhZKQSf4g7Uye6vg8LEjgB5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I4L1NhY2hpbi1U/ZW5kdWxrYXJfKGNy/b3BwZWQpLmpwZw",
        stats: { runs: 1894, year: 1998 },
      },
    },
    {
      title: "Highest Individual Score in Test Cricket",
      description: "The highest individual score by a player in a Test innings.",
      player: {
        name: "Brian Lara",
        team: "West Indies",
        age: 52,
        image: "https://imgs.search.brave.com/jCkFzZJPZkrwRehb0zax4dWZhxtYrzdMXl0Ga4TVX0U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/ZXJzYmlvLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/OS9CcmFpbi1MYXJh/LmpwZw",
        stats: { runs: 400, notOut: true, balls: 582 },
      },
    },
    {
      title: "Most Catches in Test Cricket (Non-Wicketkeeper)",
      description: "The record for the most catches by a non-wicketkeeper in Test cricket.",
      player: {
        name: "Rahul Dravid",
        team: "India",
        age: 49,
        image: "https://imgs.search.brave.com/hbbdVSz7pP_1UCvNEPcUYBTg647pcLi3gsWp-ubT9Uk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcx/LmhzY2ljZG4uY29t/L2ltYWdlL3VwbG9h/ZC9mX2F1dG8sdF9k/c193XzEyMDAscV82/MC9sc2NpL2RiL1BJ/Q1RVUkVTL0NNUy8x/MzYyMDAvMTM2MjQ4/LmpwZw",
        stats: { catches: 210, matches: 164 },
      },
    },
    {
      title: "Most Matches Played in International Cricket",
      description: "The player with the most matches across all international formats.",
      player: {
        name: "Sachin Tendulkar",
        team: "India",
        age: 47,
        image: "https://imgs.search.brave.com/hwSashhyf5cNblFR3H8DhZKQSf4g7Uye6vg8LEjgB5c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I4L1NhY2hpbi1U/ZW5kdWxrYXJfKGNy/b3BwZWQpLmpwZw",
        stats: { matches: 664, careerSpan: "1989-2013" },
      },
    },
  ];

  return (
    <div className="bg-white dark:bg-gradient-to-b from-green-400 to-blue-500 text-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar />

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Iconic Cricket Records
        </h2>

        <div className="space-y-12">
          {records.map((record, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>

              {/* Flipping Card Design */}
              <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden transform transition-transform hover:rotate-3 hover:scale-105 relative z-10">
                <div className="w-full md:w-1/3 flex items-center justify-center mb-6 md:mb-0">
                  <img
                    src={record.player.image}
                    alt={record.player.name}
                    className="w-36 h-36 object-cover rounded-full border-4 border-green-500 shadow-lg"
                  />
                </div>

                <div className="w-full md:w-2/3 p-6 text-center md:text-left space-y-4">
                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {record.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{record.description}</p>

                  {/* Player Details */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <FaRunning className="text-green-500 mr-2" />
                      <div className="text-gray-800 dark:text-gray-200">
                        <strong>Runs:</strong> {record.player.stats.runs}
                      </div>
                    </div>

                    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                      <FaTrophy className="text-yellow-500 mr-2" />
                      <div className="text-gray-800 dark:text-gray-200">
                        <strong>Centuries:</strong> {record.player.stats.centuries || 'N/A'}
                      </div>
                    </div>

                    {record.player.stats.wickets && (
                      <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                        <FaBowlingBall className="text-blue-500 mr-2" />
                        <div className="text-gray-800 dark:text-gray-200">
                          <strong>Wickets:</strong> {record.player.stats.wickets}
                        </div>
                      </div>
                    )}
                    {record.player.stats.fastest1000Runs && (
                      <div className="bg-green-100 dark:bg-green-700 p-4 rounded-lg text-center text-gray-800 dark:text-gray-200">
                        <span className="font-semibold">Fastest 1000 Runs:</span> {record.player.stats.fastest1000Runs}
                      </div>
                    )}
                    {record.player.stats.awards && (
                      <div className="bg-yellow-100 dark:bg-yellow-700 p-4 rounded-lg text-center text-gray-800 dark:text-gray-200">
                        <span className="font-semibold">Awards:</span> {record.player.stats.awards}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}