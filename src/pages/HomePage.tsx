import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, ClipboardCheckIcon, BookIcon, GraduationCapIcon, HeartPulseIcon } from 'lucide-react';
import ChatbotInterface from '../components/chatbot/ChatbotInterface';
const HomePage: React.FC = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Unlock Your Potential with{' '}
                <span className="text-orange-500">HOPES ACADEMY</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                Expert-led courses for JEE, NEET, and 12th standard exams.
                Interactive learning, mock tests, and comprehensive study
                materials to help you succeed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/courses" className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                  Explore Courses
                </Link>
                <Link to="/mock-tests" className="px-6 py-3 border border-orange-500 text-orange-500 font-medium rounded-md hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors">
                  Take a Mock Test
                </Link>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Students learning" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Course Categories Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Prepare for Success with Our Courses
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive courses designed by top educators to help you excel
              in your exams
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* JEE Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="p-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-gray-700 rounded-lg mb-4">
                  <GraduationCapIcon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  JEE Preparation
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Comprehensive preparation for JEE Main & Advanced with focus
                  on Physics, Chemistry & Mathematics.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Video lectures by expert faculty
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Topic-wise mock tests
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Previous years' papers solved
                  </li>
                </ul>
                <Link to="/courses/jee" className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                  View Course
                </Link>
              </div>
            </div>
            {/* NEET Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="p-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-gray-700 rounded-lg mb-4">
                  <HeartPulseIcon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  NEET Preparation
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Complete preparation for NEET with in-depth coverage of
                  Physics, Chemistry & Biology.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Concept-based learning
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Regular practice tests
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    NCERT-focused approach
                  </li>
                </ul>
                <Link to="/courses/neet" className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                  View Course
                </Link>
              </div>
            </div>
            {/* 12th Standard Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="p-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-gray-700 rounded-lg mb-4">
                  <BookOpenIcon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  12th Standard
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Board exam preparation with CBSE curriculum for all subjects
                  to achieve top scores.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Chapter-wise lessons
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Important questions
                  </li>
                  <li className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <svg className="h-4 w-4 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Sample papers
                  </li>
                </ul>
                <Link to="/courses/12th" className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition-colors">
                  View Course
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose HOPES ACADEMY?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our unique approach combines technology with expert teaching to
              deliver results
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="bg-orange-100 dark:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Personalized Learning
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Adaptive learning paths that adjust to your strengths and areas
                for improvement.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="bg-orange-100 dark:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Expert Faculty
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Learn from experienced teachers who have helped thousands of
                students succeed.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="bg-orange-100 dark:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                24/7 Access
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Study anytime, anywhere with our online platform accessible on
                all devices.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="bg-orange-100 dark:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <ClipboardCheckIcon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Regular Assessment
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Track your progress with regular tests and detailed performance
                analytics.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="bg-orange-100 dark:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookIcon className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Comprehensive Notes
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Access well-structured notes and study materials for each
                subject and chapter.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="bg-orange-100 dark:bg-gray-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                Doubt Resolution
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Get your doubts cleared by our experts through chat or live
                sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              What Our Students Say
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hear from our students who achieved their goals with HOPES ACADEMY
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/150?img=11" alt="Student" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Rahul Sharma
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    JEE Advanced 2023
                  </p>
                </div>
              </div>
              <div className="flex text-orange-500 mb-2">
                {[...Array(5)].map((_, i) => <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "HOPES ACADEMY's structured approach to JEE preparation helped
                me understand complex concepts easily. The mock tests were
                particularly helpful in building my exam temperament."
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/150?img=5" alt="Student" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Priya Patel
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    NEET 2023
                  </p>
                </div>
              </div>
              <div className="flex text-orange-500 mb-2">
                {[...Array(5)].map((_, i) => <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The biology lectures were exceptional, with clear explanations
                and visual aids. The progress tracking feature kept me motivated
                throughout my NEET preparation journey."
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img className="h-12 w-12 rounded-full" src="https://i.pravatar.cc/150?img=8" alt="Student" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Arjun Mehta
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    12th CBSE 2023
                  </p>
                </div>
              </div>
              <div className="flex text-orange-500 mb-2">
                {[...Array(5)].map((_, i) => <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>)}
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "The comprehensive notes and chapter-wise tests were exactly
                what I needed to score well in my board exams. The 24/7 doubt
                resolution was incredibly helpful during late-night study
                sessions."
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 bg-orange-500 dark:bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="mt-4 text-lg text-orange-100 max-w-2xl mx-auto">
              Join thousands of students who have achieved their academic goals
              with HOPES ACADEMY
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/courses" className="px-6 py-3 bg-white text-orange-500 font-medium rounded-md hover:bg-orange-50 transition-colors">
                Browse Courses
              </Link>
              <button onClick={() => {}} // This would open the auth modal in a real implementation
            className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-orange-600 dark:hover:bg-orange-700 transition-colors">
                Sign Up for Free
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Chatbot */}
      <ChatbotInterface />
    </div>;
};
export default HomePage;