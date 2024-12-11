import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Social media icons
import { useState } from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-gray-400 p-4 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-white">
            <FaFacebook className="inline-block text-2xl" />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter className="inline-block text-2xl" />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram className="inline-block text-2xl" />
          </a>
          <a href="#" className="hover:text-white">
            <FaYoutube className="inline-block text-2xl" />
          </a>
        </div>
        <p>&copy; 2024 Cricket Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;