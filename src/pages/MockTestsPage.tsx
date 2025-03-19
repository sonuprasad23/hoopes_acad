import React, { useState } from 'react';
import { FilterIcon } from 'lucide-react';
import MockTestCard from '../components/mockTests/MockTestCard';
import ChatbotInterface from '../components/chatbot/ChatbotInterface';
// Mock data for tests
const mockTests = [{
  id: 'jee-mock-1',
  title: 'JEE Physics Full Mock Test 1',
  questions: 30,
  duration: '1 hour',
  category: 'jee',
  subject: 'physics',
  isCompleted: true,
  score: 24,
  totalMarks: 30
}, {
  id: 'jee-mock-2',
  title: 'JEE Chemistry Full Mock Test 1',
  questions: 30,
  duration: '1 hour',
  category: 'jee',
  subject: 'chemistry',
  isCompleted: false
}, {
  id: 'jee-mock-3',
  title: 'JEE Mathematics Full Mock Test 1',
  questions: 30,
  duration: '1 hour',
  category: 'jee',
  subject: 'maths',
  isCompleted: false
}, {
  id: 'neet-mock-1',
  title: 'NEET Biology Mock Test 1',
  questions: 45,
  duration: '1 hour 30 mins',
  category: 'neet',
  subject: 'biology',
  isCompleted: true,
  score: 38,
  totalMarks: 45
}, {
  id: 'neet-mock-2',
  title: 'NEET Chemistry Mock Test 1',
  questions: 35,
  duration: '1 hour 10 mins',
  category: 'neet',
  subject: 'chemistry',
  isCompleted: false
}, {
  id: '12th-mock-1',
  title: '12th Physics Term 1 Mock Test',
  questions: 40,
  duration: '1 hour 20 mins',
  category: '12th',
  subject: 'physics',
  isCompleted: true,
  score: 35,
  totalMarks: 40
}, {
  id: '12th-mock-2',
  title: '12th Chemistry Term 1 Mock Test',
  questions: 40,
  duration: '1 hour 20 mins',
  category: '12th',
  subject: 'chemistry',
  isCompleted: false
}, {
  id: '12th-mock-3',
  title: '12th Mathematics Term 1 Mock Test',
  questions: 40,
  duration: '1 hour 20 mins',
  category: '12th',
  subject: 'maths',
  isCompleted: false
}];
const MockTestsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [filters, setFilters] = useState({
    category: 'all',
    subject: 'all',
    status: 'all'
  });
  const filteredTests = mockTests.filter(test => {
    if (filters.category !== 'all' && test.category !== filters.category) return false;
    if (filters.subject !== 'all' && test.subject !== filters.subject) return false;
    if (filters.status === 'completed' && !test.isCompleted) return false;
    if (filters.status === 'pending' && test.isCompleted) return false;
    return true;
  });
  return <div className="w-full">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Mock Tests
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Practice with our extensive collection of mock tests designed to
          simulate the actual exam environment.
        </p>
      </div>
      {/* Tabs and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 p-1 rounded-md">
            <button onClick={() => setActiveTab('all')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'all' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
              All Tests
            </button>
            <button onClick={() => setActiveTab('recommended')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'recommended' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
              Recommended
            </button>
            <button onClick={() => setActiveTab('attempted')} className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'attempted' ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
              Attempted
            </button>
          </div>
          {/* Filters */}
          <div className="flex space-x-4">
            <div className="relative">
              <select value={filters.category} onChange={e => setFilters({
              ...filters,
              category: e.target.value
            })} className="appearance-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="all">All Courses</option>
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
                <option value="12th">12th Standard</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select value={filters.subject} onChange={e => setFilters({
              ...filters,
              subject: e.target.value
            })} className="appearance-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="all">All Subjects</option>
                <option value="physics">Physics</option>
                <option value="chemistry">Chemistry</option>
                <option value="maths">Mathematics</option>
                <option value="biology">Biology</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="relative">
              <select value={filters.status} onChange={e => setFilters({
              ...filters,
              status: e.target.value
            })} className="appearance-none bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">
              Available Tests
            </h2>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {filteredTests.length} tests found
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map(test => <MockTestCard key={test.id} id={test.id} title={test.title} questions={test.questions} duration={test.duration} isCompleted={test.isCompleted} score={test.score} totalMarks={test.totalMarks} />)}
          </div>
        </div>
      </div>
      {/* Chatbot */}
      <ChatbotInterface />
    </div>;
};
export default MockTestsPage;