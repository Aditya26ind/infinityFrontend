import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { useEffect, useState } from 'react'; // For managing navbar toggle

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating login state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the dropdown menu

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('accessToken')
    window.location.href = '/dashboard';
  };

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [token, setToken] = useState<string | null>(null); 
  useEffect(() => { 
     if (typeof window !== 'undefined') 
      { setToken(localStorage.getItem('accessToken')); 

      } }, []);

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <Link href="/">Cricket Hub</Link>
        </div>
        

        {/* Login/Logout/Signup and Dark Mode Toggle */}
        <div className="flex items-center space-x-6">
          {!token ? (
            <>
              
              <Link href="/auth" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
                Login
              </Link>
              <Link href="/auth" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-gray-700 dark:text-gray-300 hover:text-red-500"
            >
              Logout
            </button>
          )}

          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-white focus:outline-none ml-4"
            aria-label="Toggle menu"
          >
            {/* Icon (Hamburger Menu) */}
            <svg
              className="h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Menu */}
      <div
        className={`${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center mt-4 space-y-4">
          <Link href="/stats" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
            Stats
          </Link>
          <Link href="/comparison" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
            Comparison
          </Link>
          {/* <Link href="/analysis" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
            Analysis
          </Link> */}
          <Link href="/milestones" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
            Milestones
          </Link>
          <Link href="/live" className=" text-gray-700 dark:text-gray-300 hover:text-green-500">
            Matches(coming soon)
          </Link>
          <Link href="/info" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
            Information(AI)
          </Link>
          <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
            Dashboard
          </Link>
          <Link href="/description" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
            Description
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;