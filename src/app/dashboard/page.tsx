"use client";
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaUser, FaTrophy, FaHistory, FaClosedCaptioning, FaAddressCard, FaCross } from 'react-icons/fa';
import withAuth from '../components/protected';
import { MdDelete, MdOutlineChangeHistory } from "react-icons/md";
import { SyncLoader } from 'react-spinners';
import { BiCross } from 'react-icons/bi';
import { Cancel } from 'axios';

function PlayerComparison() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
  const [aiData, setAiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteData,setDeleteData] = useState(null);

  

  useEffect(() => {
    const fetchAiDataHistory = async () => {
      try {
        setIsLoading(true);
        const accessToken = localStorage.getItem('accessToken');
        
        const response = await fetch(`${API_BASE_URL}/openai/fetch`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch AI data');
        }

        const responseData = await response.json();
        console.log('Fetched Data:', responseData);
        
        // Ensure we're setting an array
        setAiData(Array.isArray(responseData.data) ? responseData.data : []);
        setIsLoading(false);
      } catch (err) {
        console.error('Fetch Error:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    // Use a flag to prevent double fetching in development
    let isMounted = true;
    if (isMounted) {
      fetchAiDataHistory();
    }

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array ensures this runs only once


  const handeldelete = async (id) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${API_BASE_URL}/openai/delete/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      console.log('Deleted Data:', id);
      alert('Deleted Data');
      window.location.href = '/dashboard';
      setDeleteData(id);
    } catch (err) {
      console.error('Delete Error:', err);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-6">
            <FaHistory className="mr-3 text-2xl text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-800">Your AI Dashboard</h1>
          </div>
          
          <p className="text-gray-600 mb-6 flex items-center">
            <MdOutlineChangeHistory className="mr-2" />
            Explore your AI search history and insights
          </p>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <SyncLoader color="#3B82F6" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error: </strong>
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {/* Data Grid */}
          {!isLoading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiData.length > 0 ? (
                aiData.map((data, index) => (
                  <div 
                    key={data.id || index} 
                    className="bg-blue-50 border border-blue-100 rounded-lg p-5 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                  >
                    <div className="flex items-center mb-4">
                      <FaUser className="mr-3 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-800">Search Record #{data.id}</h3>
                    </div>
                    
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Content:</span>
                        <span className="text-gray-800 truncate max-w-[200px]">{data.content}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Source:</span>
                        <span className="text-gray-800">{data.source}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-600">Meta Data:</span>
                        <span className="text-blue-600 font-bold">{data.metaData}%</span>
                      </div>
                    </div>

                    <div onClick={() => handeldelete(data.id)} className="mt-4 border-t border-blue-100 pt-3 text-center">
                      <MdDelete className="mx-auto text-yellow-500" />
                      <p className="text-xs text-gray-500 mt-1"></p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-gray-500">No AI search history found</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default withAuth(PlayerComparison);