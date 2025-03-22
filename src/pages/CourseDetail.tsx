import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { courses } from '../data/courseData';
const CourseDetail: React.FC = () => {
  const {
    courseId
  } = useParams<{
    courseId: string;
  }>();
  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return <div className="p-8 text-center">Course not found</div>;
  }
  return <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {course.title}
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          {course.description}
        </p>
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 mb-8">
          <div className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info text-orange-500 mr-3 mt-1">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Course Information
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                This course is designed for{' '}
                {courseId === 'jee' ? 'JEE Main and Advanced' : courseId === 'neet' ? 'NEET' : '12th Standard'}{' '}
                preparation. Complete all subjects to master the syllabus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Subjects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {course.subjects.map(subject => <Link key={subject.id} to={`/courses/${courseId}/${subject.id}`} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-40 overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              {subject.id === 'physics' && <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-atom text-orange-500">
                  <circle cx="12" cy="12" r="1" />
                  <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
                  <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
                </svg>}
              {subject.id === 'chemistry' && <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flask-conical text-orange-500">
                  <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
                  <path d="M8.5 2h7" />
                  <path d="M7 16h10" />
                </svg>}
              {subject.id === 'mathematics' && <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calculator text-orange-500">
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <line x1="8" x2="16" y1="6" y2="6" />
                  <line x1="16" x2="16" y1="14" y2="18" />
                  <path d="M16 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M8 14h.01" />
                  <path d="M12 18h.01" />
                  <path d="M8 18h.01" />
                </svg>}
              {subject.id === 'biology' && <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-dna text-orange-500">
                  <path d="M2 15c6.667-6 13.333 0 20-6" />
                  <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
                  <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
                  <path d="m17 6-2.5-2.5" />
                  <path d="m14 8-1-1" />
                  <path d="m7 18 2.5 2.5" />
                  <path d="m3.5 14.5.5.5" />
                  <path d="m20 9 .5.5" />
                  <path d="m6.5 12.5 1 1" />
                  <path d="m16.5 10.5 1 1" />
                  <path d="m10 16 1.5 1.5" />
                </svg>}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {subject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {subject.units.length} units •{' '}
                {subject.units.reduce((acc, unit) => acc + unit.topics.length, 0)}{' '}
                topics
              </p>
              <div className="flex justify-between items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{
                width: '0%'
              }}></div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-4 whitespace-nowrap">
                  0% Complete
                </span>
              </div>
            </div>
          </Link>)}
      </div>
    </div>;
};
export default CourseDetail;