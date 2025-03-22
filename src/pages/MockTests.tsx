import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courseData';
const MockTests: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'jee' | 'neet' | '12th'>('all');
  // Filter mock tests based on active tab
  const getFilteredTests = () => {
    if (activeTab === 'all') {
      return mockTests;
    }
    return mockTests.filter(test => test.category === activeTab);
  };
  return <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Mock Tests
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Practice with our comprehensive mock tests designed to simulate actual
          exam conditions.
        </p>
      </div>
      <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
        <nav className="flex flex-wrap -mb-px">
          <button onClick={() => setActiveTab('all')} className={`inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'all' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}>
            All Tests
          </button>
          <button onClick={() => setActiveTab('jee')} className={`inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'jee' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}>
            JEE
          </button>
          <button onClick={() => setActiveTab('neet')} className={`inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'neet' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}>
            NEET
          </button>
          <button onClick={() => setActiveTab('12th')} className={`inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm ${activeTab === '12th' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}>
            12th Standard
          </button>
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredTests().map(test => <div key={test.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-2">
                {test.category === 'jee' && <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    JEE
                  </span>}
                {test.category === 'neet' && <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    NEET
                  </span>}
                {test.category === '12th' && <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                    12th
                  </span>}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {test.subject}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {test.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-help-circle mr-1">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <span>{test.questions} questions</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock ml-4 mr-1">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{test.duration} mins</span>
              </div>
              <div className="flex justify-between items-center">
                {test.id === 'chemistry-mock-1' ? <Link to="/mock-tests/chemistry-mock-1" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                    Start Test
                  </Link> : <button className="bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-2 px-4 rounded-md text-sm font-medium cursor-not-allowed">
                    Coming Soon
                  </button>}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {test.attempts > 0 ? <span>
                      Attempted {test.attempts} time
                      {test.attempts > 1 ? 's' : ''}
                    </span> : <span>Not attempted yet</span>}
                </div>
              </div>
            </div>
            {test.attempts > 0 && <div className="p-4 bg-gray-50 dark:bg-gray-700/50 flex justify-between items-center">
                <div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Last Score
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">
                    {test.lastScore}%
                  </div>
                </div>
                <Link to={`/mock-tests/${test.id}/analysis`} className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                  View Analysis
                </Link>
              </div>}
          </div>)}
      </div>
    </div>;
};
// Mock data for tests
const mockTests = [{
  id: 'chemistry-mock-1',
  title: 'Chemistry Mock Test 1',
  subject: 'Chemistry',
  category: 'jee',
  questions: 10,
  duration: 15,
  attempts: 0,
  lastScore: 0
}, {
  id: 'physics-mock-1',
  title: 'Physics Full Syllabus Test',
  subject: 'Physics',
  category: 'jee',
  questions: 30,
  duration: 45,
  attempts: 2,
  lastScore: 78
}, {
  id: 'maths-mock-1',
  title: 'Mathematics Chapter Test',
  subject: 'Mathematics',
  category: 'jee',
  questions: 25,
  duration: 30,
  attempts: 1,
  lastScore: 64
}, {
  id: 'neet-biology-1',
  title: 'Biology Practice Test',
  subject: 'Biology',
  category: 'neet',
  questions: 45,
  duration: 60,
  attempts: 3,
  lastScore: 82
}, {
  id: 'neet-chemistry-1',
  title: 'NEET Chemistry Mock',
  subject: 'Chemistry',
  category: 'neet',
  questions: 35,
  duration: 45,
  attempts: 0,
  lastScore: 0
}, {
  id: '12th-physics-1',
  title: '12th Physics Half-Yearly',
  subject: 'Physics',
  category: '12th',
  questions: 30,
  duration: 90,
  attempts: 1,
  lastScore: 92
}, {
  id: '12th-maths-1',
  title: '12th Maths Chapter Test',
  subject: 'Mathematics',
  category: '12th',
  questions: 25,
  duration: 60,
  attempts: 0,
  lastScore: 0
}, {
  id: 'jee-full-mock-1',
  title: 'JEE Full Syllabus Test',
  subject: 'Full Syllabus',
  category: 'jee',
  questions: 90,
  duration: 180,
  attempts: 1,
  lastScore: 71
}, {
  id: 'neet-full-mock-1',
  title: 'NEET Full Test',
  subject: 'Full Syllabus',
  category: 'neet',
  questions: 180,
  duration: 180,
  attempts: 0,
  lastScore: 0
}];
export default MockTests;