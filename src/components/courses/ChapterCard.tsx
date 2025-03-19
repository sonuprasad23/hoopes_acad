import React from 'react';
import { Link } from 'react-router-dom';
import { PlayCircleIcon, FileTextIcon } from 'lucide-react';
import ProgressCircle from '../ui/ProgressCircle';
interface ChapterCardProps {
  id: string;
  title: string;
  videoCount: number;
  notesAvailable: boolean;
  progress: number;
  duration: string;
}
const ChapterCard: React.FC<ChapterCardProps> = ({
  id,
  title,
  videoCount,
  notesAvailable,
  progress,
  duration
}) => {
  return <Link to={`/chapters/${id}`} className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-all">
      <div className="flex items-center">
        <ProgressCircle progress={progress} />
        <div className="ml-4">
          <h3 className="text-base font-medium text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="flex items-center mt-1 space-x-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <PlayCircleIcon className="h-4 w-4 mr-1" />
              <span>{videoCount} videos</span>
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <span>{duration}</span>
            </div>
            {notesAvailable && <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FileTextIcon className="h-4 w-4 mr-1" />
                <span>Notes</span>
              </div>}
          </div>
        </div>
      </div>
      <div className="text-orange-500">
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>;
};
export default ChapterCard;