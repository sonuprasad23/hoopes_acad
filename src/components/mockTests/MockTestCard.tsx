import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
interface MockTestCardProps {
  id: string;
  title: string;
  questions: number;
  duration: string;
  isCompleted?: boolean;
  score?: number;
  totalMarks?: number;
}
const MockTestCard: React.FC<MockTestCardProps> = ({
  id,
  title,
  questions,
  duration,
  isCompleted = false,
  score,
  totalMarks
}) => {
  return <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          {isCompleted ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <CheckCircleIcon className="w-3 h-3 mr-1" />
              Completed
            </span> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
              <ClockIcon className="w-3 h-3 mr-1" />
              Available
            </span>}
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <div className="flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{questions} questions</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        {isCompleted && score !== undefined && totalMarks !== undefined && <div className="mt-3 bg-gray-50 dark:bg-gray-700 rounded p-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Your score
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {score}/{totalMarks}
              </span>
            </div>
            <div className="mt-1 w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{
            width: `${score / totalMarks * 100}%`
          }}></div>
            </div>
          </div>}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        {isCompleted ? <div className="flex space-x-2">
            <Link to={`/mock-tests/${id}/review`} className="flex-1 text-center px-4 py-2 border border-orange-500 text-orange-500 rounded-md text-sm font-medium hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors">
              Review Test
            </Link>
            <Link to={`/mock-tests/${id}`} className="flex-1 text-center px-4 py-2 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
              Retake Test
            </Link>
          </div> : <Link to={`/mock-tests/${id}`} className="block w-full text-center px-4 py-2 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-colors">
            Start Test
          </Link>}
      </div>
    </div>;
};
export default MockTestCard;