import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpenIcon, BookIcon, ClipboardCheckIcon, GraduationCapIcon, HeartPulseIcon, CalculatorIcon, BeakerIcon, AtomIcon, MessageSquareIcon, ChevronRightIcon, ChevronDownIcon } from 'lucide-react';
const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(['jee']);
  const toggleExpand = (item: string) => {
    setExpandedItems(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto h-[calc(100vh-4rem)]">
      <div className="p-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 px-3 py-2">
            Main Menu
          </p>
          {/* JEE Section */}
          <div>
            <button onClick={() => toggleExpand('jee')} className="w-full flex items-center justify-between px-3 py-2 text-gray-900 dark:text-white rounded-md hover:bg-orange-100 dark:hover:bg-gray-700">
              <div className="flex items-center">
                <GraduationCapIcon className="h-5 w-5 mr-2 text-orange-500" />
                <span>JEE</span>
              </div>
              {expandedItems.includes('jee') ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
            </button>
            {expandedItems.includes('jee') && <div className="ml-6 space-y-1 mt-1">
                <Link to="/subjects/jee-physics" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/jee-physics') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <AtomIcon className="h-4 w-4 mr-2" />
                  Physics
                </Link>
                <Link to="/subjects/jee-chemistry" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/jee-chemistry') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <BeakerIcon className="h-4 w-4 mr-2" />
                  Chemistry
                </Link>
                <Link to="/subjects/jee-maths" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/jee-maths') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <CalculatorIcon className="h-4 w-4 mr-2" />
                  Mathematics
                </Link>
              </div>}
          </div>
          {/* NEET Section */}
          <div>
            <button onClick={() => toggleExpand('neet')} className="w-full flex items-center justify-between px-3 py-2 text-gray-900 dark:text-white rounded-md hover:bg-orange-100 dark:hover:bg-gray-700">
              <div className="flex items-center">
                <HeartPulseIcon className="h-5 w-5 mr-2 text-orange-500" />
                <span>NEET</span>
              </div>
              {expandedItems.includes('neet') ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
            </button>
            {expandedItems.includes('neet') && <div className="ml-6 space-y-1 mt-1">
                <Link to="/subjects/neet-physics" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/neet-physics') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <AtomIcon className="h-4 w-4 mr-2" />
                  Physics
                </Link>
                <Link to="/subjects/neet-chemistry" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/neet-chemistry') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <BeakerIcon className="h-4 w-4 mr-2" />
                  Chemistry
                </Link>
                <Link to="/subjects/neet-biology" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/neet-biology') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <BookIcon className="h-4 w-4 mr-2" />
                  Biology
                </Link>
              </div>}
          </div>
          {/* 12th Standard Section */}
          <div>
            <button onClick={() => toggleExpand('12th')} className="w-full flex items-center justify-between px-3 py-2 text-gray-900 dark:text-white rounded-md hover:bg-orange-100 dark:hover:bg-gray-700">
              <div className="flex items-center">
                <BookOpenIcon className="h-5 w-5 mr-2 text-orange-500" />
                <span>12th Standard</span>
              </div>
              {expandedItems.includes('12th') ? <ChevronDownIcon className="h-4 w-4" /> : <ChevronRightIcon className="h-4 w-4" />}
            </button>
            {expandedItems.includes('12th') && <div className="ml-6 space-y-1 mt-1">
                <Link to="/subjects/12th-physics" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/12th-physics') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <AtomIcon className="h-4 w-4 mr-2" />
                  Physics
                </Link>
                <Link to="/subjects/12th-chemistry" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/12th-chemistry') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <BeakerIcon className="h-4 w-4 mr-2" />
                  Chemistry
                </Link>
                <Link to="/subjects/12th-maths" className={`flex items-center px-3 py-2 text-sm rounded-md ${isActive('/subjects/12th-maths') ? 'bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400' : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'}`}>
                  <CalculatorIcon className="h-4 w-4 mr-2" />
                  Mathematics
                </Link>
              </div>}
          </div>
          <Link to="/mock-tests" className={`flex items-center px-3 py-2 text-gray-900 dark:text-white rounded-md hover:bg-orange-100 dark:hover:bg-gray-700 ${isActive('/mock-tests') && 'bg-orange-100 dark:bg-gray-700'}`}>
            <ClipboardCheckIcon className="h-5 w-5 mr-2 text-orange-500" />
            Mock Tests
          </Link>
          <Link to="/notes" className={`flex items-center px-3 py-2 text-gray-900 dark:text-white rounded-md hover:bg-orange-100 dark:hover:bg-gray-700 ${isActive('/notes') && 'bg-orange-100 dark:bg-gray-700'}`}>
            <BookIcon className="h-5 w-5 mr-2 text-orange-500" />
            Notes
          </Link>
          <div className="pt-4">
            <div className="px-3 py-2">
              <div className="bg-orange-50 dark:bg-gray-700 rounded-lg p-3">
                <div className="flex items-center">
                  <MessageSquareIcon className="h-5 w-5 text-orange-500 mr-2" />
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Need Help?
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Chat with our assistant for quick answers
                </p>
                <button className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>;
};
export default Sidebar;