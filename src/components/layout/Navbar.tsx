import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { MenuIcon, SunIcon, MoonIcon, SearchIcon, BellIcon, UserIcon, XIcon } from 'lucide-react';
const Navbar: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const {
    user,
    isAuthenticated,
    openAuthModal,
    logout
  } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  return <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img src="/ideogram_hopes_academy_-_Copy.jpg" alt="HOPES ACADEMY" className="h-10 w-auto" />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
                  Home
                </Link>
                <Link to="/courses" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
                  Courses
                </Link>
                <Link to="/mock-tests" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
                  Mock Tests
                </Link>
                <Link to="/notes" className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
                  Notes
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search courses..." className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <BellIcon className="h-5 w-5" />
            </button>
            {isAuthenticated ? <div className="relative">
                <button onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)} className="flex items-center space-x-2 focus:outline-none">
                  <img src={user?.avatar || 'https://i.pravatar.cc/150?img=11'} alt="Profile" className="h-8 w-8 rounded-full" />
                </button>
                {isProfileDropdownOpen && <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Profile
                    </Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Settings
                    </Link>
                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Sign out
                    </button>
                  </div>}
              </div> : <button onClick={openAuthModal} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none mr-2">
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
              Home
            </Link>
            <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
              Courses
            </Link>
            <Link to="/mock-tests" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
              Mock Tests
            </Link>
            <Link to="/notes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
              Notes
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            {isAuthenticated ? <>
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img src={user?.avatar || 'https://i.pravatar.cc/150?img=11'} alt="Profile" className="h-10 w-10 rounded-full" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800 dark:text-white">
                      {user?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  <Link to="/profile" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
                    Profile
                  </Link>
                  <Link to="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
                    Settings
                  </Link>
                  <button onClick={logout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-orange-100 dark:hover:bg-gray-700">
                    Sign out
                  </button>
                </div>
              </> : <div className="px-5">
                <button onClick={openAuthModal} className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-base font-medium">
                  Sign In
                </button>
              </div>}
          </div>
        </div>}
    </nav>;
};
export default Navbar;