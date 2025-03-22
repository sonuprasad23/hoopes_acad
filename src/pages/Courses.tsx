import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courseData';
import PaymentInterface from '../components/PaymentInterface';
const Courses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPayment, setShowPayment] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const filteredCourses = courses.filter(course => {
    const searchLower = searchQuery.toLowerCase();
    return course.title.toLowerCase().includes(searchLower) || course.subjects.some(subject => subject.title.toLowerCase().includes(searchLower) || subject.units.some(unit => unit.title.toLowerCase().includes(searchLower) || unit.topics.some(topic => topic.title.toLowerCase().includes(searchLower))));
  });
  const handlePurchase = (courseId: string) => {
    setSelectedCourse(courseId);
    setShowPayment(true);
  };
  return <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Explore Courses
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Discover our comprehensive courses designed to help you excel in your
          exams.
        </p>
      </div>
      <div className="mb-8">
        <div className="relative max-w-md">
          <input type="text" placeholder="Search courses..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full py-2.5 px-4 pr-10 rounded-md text-sm border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
      <div className="mb-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg overflow-hidden shadow-lg">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Welcome to HOPES ACADEMY
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Start your journey to academic excellence with our expert-led
              courses designed for JEE, NEET, and 12th standard success.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/courses/jee" className="bg-white text-orange-600 hover:bg-orange-50 py-2.5 px-5 rounded-md font-medium transition-colors">
                Explore JEE Courses
              </Link>
              <Link to="/mock-tests" className="bg-transparent border border-white text-white hover:bg-white/10 py-2.5 px-5 rounded-md font-medium transition-colors">
                Try Mock Tests
              </Link>
            </div>
          </div>
          <div className="md:w-1/3">
            <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Students studying" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Available Courses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCourses.map(course => <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
              {course.id === 'jee' && <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="JEE Preparation" className="w-full h-full object-cover" />}
              {course.id === 'neet' && <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="NEET Preparation" className="w-full h-full object-cover" />}
              {course.id === '12th' && <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="12th Standard Preparation" className="w-full h-full object-cover" />}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                {course.id === 'jee' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap text-orange-500 mr-2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>}
                {course.id === 'neet' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-pulse text-orange-500 mr-2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M3.22 12H9.5l.5-1 2 4 .5-2 2 2h5.27" />
                  </svg>}
                {course.id === '12th' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open text-orange-500 mr-2">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a2 2 0 0 0-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a2 2 0 0 1 3-3h7z" />
                  </svg>}
                <span className="text-sm text-orange-500 font-medium">
                  {course.id === 'jee' ? 'Entrance Exam' : course.id === 'neet' ? 'Medical' : 'Board Exam'}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {course.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-gray-500 dark:text-gray-400 text-sm">
                  {course.subjects.length} Subjects •{' '}
                  {course.subjects.reduce((acc, subject) => acc + subject.units.length, 0)}{' '}
                  Units
                </div>
                <span className="text-orange-500 font-medium">
                  View Details
                </span>
              </div>
            </div>
          </div>)}
      </div>
      <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose Our Courses?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-orange-500">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Expert Educators
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Learn from experienced teachers who are experts in their fields.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check text-orange-500">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Regular Assessments
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Track your progress with frequent quizzes and mock tests.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-orange-500">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" x2="8" y1="13" y2="13" />
                <line x1="16" x2="8" y1="17" y2="17" />
                <line x1="10" x2="8" y1="9" y2="9" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Comprehensive Notes
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Access detailed study materials designed for exam success.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle text-orange-500">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Doubt Solving
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get your questions answered through our support system.
            </p>
          </div>
        </div>
      </div>
      {showPayment && selectedCourse && <PaymentInterface courseId={selectedCourse} price={4999} onClose={() => {
      setShowPayment(false);
      setSelectedCourse(null);
    }} />}
    </div>;
};
export default Courses;