import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, YoutubeIcon, TwitterIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
const Footer: React.FC = () => {
  return <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img src="/ideogram_hopes_academy_-_Copy.jpg" alt="HOPES ACADEMY" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Empowering students with quality education for JEE, NEET and 12th
              standard exams.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <YoutubeIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-500">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Courses
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/courses/jee" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  JEE Preparation
                </Link>
              </li>
              <li>
                <Link to="/courses/neet" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  NEET Preparation
                </Link>
              </li>
              <li>
                <Link to="/courses/12th" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  12th Standard
                </Link>
              </li>
              <li>
                <Link to="/mock-tests" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  Mock Tests
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  123 Education Street, Learning City, 110001
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  contact@hopesacademy.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © {new Date().getFullYear()} HOPES ACADEMY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;