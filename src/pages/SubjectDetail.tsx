import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { courses } from '../data/courseData';
const SubjectDetail: React.FC = () => {
  const {
    courseId,
    subjectId
  } = useParams<{
    courseId: string;
    subjectId: string;
  }>();
  const course = courses.find(c => c.id === courseId);
  const subject = course?.subjects.find(s => s.id === subjectId);
  if (!course || !subject) {
    return <div className="p-8 text-center">Subject not found</div>;
  }
  const generateRandomProgress = () => {
    return Math.floor(Math.random() * 101); // 0 to 100
  };
  return <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center mb-2">
          <Link to={`/courses/${courseId}`} className="text-orange-500 hover:text-orange-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left mr-1">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to {course.title}
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {subject.title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Comprehensive coverage of all {subject.title.toLowerCase()} topics for{' '}
          {courseId.toUpperCase()} preparation
        </p>
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Your Progress
          </h2>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold">0</span> of{' '}
            {subject.units.reduce((acc, unit) => acc + unit.topics.length, 0)}{' '}
            topics completed
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
          <div className="bg-orange-500 h-4 rounded-full" style={{
          width: '0%'
        }}></div>
        </div>
      </div>
      <div className="space-y-8">
        {subject.units.map((unit, index) => <div key={unit.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Unit {unit.id}: {unit.title}
              </h3>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {unit.topics.map(topic => {
            const progress = generateRandomProgress();
            return <div key={topic.id} className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="mb-4 sm:mb-0">
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                          {topic.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play mr-1">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          <span>4 videos</span>
                          <span className="mx-2">•</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text mr-1">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" x2="8" y1="13" y2="13" />
                            <line x1="16" x2="8" y1="17" y2="17" />
                            <line x1="10" x2="8" y1="9" y2="9" />
                          </svg>
                          <span>1 note</span>
                          <span className="mx-2">•</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check mr-1">
                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                            <path d="m9 14 2 2 4-4" />
                          </svg>
                          <span>2 quizzes</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="relative w-16 h-16 mr-4">
                          <svg className="w-full h-full" viewBox="0 0 36 36">
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e7eb" strokeWidth="2" className="dark:stroke-gray-700"></circle>
                            <circle cx="18" cy="18" r="16" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray={`${progress} 100`} strokeLinecap="round" transform="rotate(-90 18 18)" className="transition-all duration-1000"></circle>
                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="#f97316" fontWeight="bold">
                              {progress}%
                            </text>
                          </svg>
                        </div>
                        <Link to={`/courses/${courseId}/${subjectId}/unit/${unit.id}/topic/${topic.id}`} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                          Start Learning
                        </Link>
                      </div>
                    </div>
                  </div>;
          })}
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
              <Link to={`/mock-tests/unit-${unit.id}`} className="flex items-center justify-center text-orange-500 hover:text-orange-600 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check mr-2">
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
                Take Unit {unit.id} Mock Test
              </Link>
            </div>
          </div>)}
      </div>
    </div>;
};
export default SubjectDetail;