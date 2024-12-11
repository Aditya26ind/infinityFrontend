import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-gray-400 py-6 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="YouTube"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>
        <p className="text-sm text-center">&copy; 2024 Cricket Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;