import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Social media icons
import { useState } from 'react';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 text-center">
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