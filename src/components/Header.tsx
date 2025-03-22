import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Menu, Home } from 'lucide-react';
interface HeaderProps {
  onMenuClick: () => void;
}
const Header: React.FC<HeaderProps> = ({
  onMenuClick
}) => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-6">
          <button onClick={onMenuClick} className="p-2 -ml-2 md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Menu size={24} />
          </button>
          <Link to="/" className="p-2 md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Home size={24} />
          </Link>
          <Link to="/" className="hidden md:flex items-center">
            <img src="https://i.ibb.co/ycB0zhXW/rounded-Hopes.png" alt="HOPES ACADEMY" className="h-12 w-auto" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
              Home
            </Link>
            <Link to="/courses" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
              Courses
            </Link>
            <Link to="/mock-tests" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
              Mock Tests
            </Link>
            <Link to="/notes" className="text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400">
              Notes
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input type="text" placeholder="Search courses..." className="py-1.5 px-4 pr-10 rounded-full text-sm border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 w-64" />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <button onClick={toggleTheme} className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
            {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>}
          </button>
          <button className="p-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          <Link to="/auth" className="bg-orange-500 hover:bg-orange-600 text-white py-1.5 px-4 rounded-md text-sm font-medium transition-colors">
            Sign In
          </Link>
        </div>
      </div>
    </header>;
};
export default Header;