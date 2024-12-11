"use client";

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaRunning, FaBowlingBall, FaTrophy, FaLaptopHouse } from 'react-icons/fa';
import withAuth from '../components/protected';
import { useEffect, useState } from 'react';
import axios from 'axios';

function RecordsList() {
  const [types, setTypes] = useState<any>([]);
  const [recordType, setRecordType] = useState(null);
  const [other,setOther]= useState(false);
  const [milestoneName, setMilestoneName] = useState(null);
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

  const recordData = async (recordType: any, milestoneName: any) => {
    const accessToken = localStorage.getItem('accessToken');
    setOther(true);
    
    const data = {
      recordType,
      milestoneName,
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/milestones/record`, data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      setRecord(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setOther(false);
    }
  };

  

  const fetchTypes = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const response = await axios.get(`${API_BASE_URL}/milestones/types`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data.recordTypes);
      setTypes([response.data.recordTypes]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div className="bg-white dark:bg-gradient-to-b from-green-400 to-blue-500 text-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar />

      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Iconic Cricket Records
        </h2>

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading data: {error.message}</div>
        ) : types.length > 0 ? (
          Object.keys(types[0]).map((recordType, typeIndex) => (
            <div key={typeIndex} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 capitalize text-gray-800 dark:text-white">
                {recordType} Records
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {types[0][recordType].map((record, recordIndex) => (
                  <button
                  onClick={() => recordData(recordType,record)}
                    key={recordIndex}
                    className="hover:shadow-md bg-gray-100 dark:bg-gray-700 p-3 rounded-md text-center"
                  >
                    <span  className="text-gray-600 dark:text-gray-300 text-sm capitalize">
                      {record.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No records found.</div>
        )}
      </section>

      <div>
      {other ? (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
  </div>
) : (
  record ? (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <div className="mb-20 w-dvw max-w-screen-sm">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
            <div className="bg-blue-500 dark:bg-blue-600 p-4 text-center">
              <h2 className="text-3xl font-bold text-white">
                Record Details
              </h2>
            </div>
            <div className="p-6">
              {Object.entries(record).map(([key, value]) => (
                <div 
                  key={key} 
                  className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 transform transition-all hover:scale-[1.02]"
                >
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })}
                  </p>
                  <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {value || 'N/A'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  ) : (
    <div className="flex flex-col items-center">
      <p className="text-gray-600 dark:text-gray-400">...</p>
    </div>
  )
)}
</div>

      <Footer />
    </div>
  );
}

export default withAuth(RecordsList);


