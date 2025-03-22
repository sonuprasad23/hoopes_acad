import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { courses } from '../data/courseData';
const VideoLessons: React.FC = () => {
  const {
    courseId,
    subjectId,
    unitId,
    topicId
  } = useParams<{
    courseId: string;
    subjectId: string;
    unitId: string;
    topicId: string;
  }>();
  const [activeVideo, setActiveVideo] = useState(0);
  const [progress, setProgress] = useState<{
    [key: string]: number;
  }>({});
  // Mock video data - in a real app, this would come from an API
  const videos = [{
    id: 'HEfHFsfGXjs',
    title: 'Introduction to Motion in Straight Line',
    duration: '12:30'
  }, {
    id: 'CeNGUJHXP0E',
    title: 'Distance and Displacement',
    duration: '15:45'
  }, {
    id: 'bKEaK7WNLzM',
    title: 'Speed and Velocity',
    duration: '18:20'
  }, {
    id: 'WWCcR9Sqs5I',
    title: 'Acceleration',
    duration: '20:15'
  }];
  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`videoProgress-${courseId}-${subjectId}-${unitId}-${topicId}`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, [courseId, subjectId, unitId, topicId]);
  const handleVideoProgress = (videoId: string, percent: number) => {
    const newProgress = {
      ...progress,
      [videoId]: percent
    };
    setProgress(newProgress);
    localStorage.setItem(`videoProgress-${courseId}-${subjectId}-${unitId}-${topicId}`, JSON.stringify(newProgress));
  };
  const calculateOverallProgress = () => {
    if (Object.keys(progress).length === 0) return 0;
    const total = Object.values(progress).reduce((sum, curr) => sum + curr, 0);
    return Math.round(total / videos.length);
  };
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  };
  return <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Video Player Section */}
        <div className="lg:w-2/3">
          <div className="bg-black rounded-lg overflow-hidden mb-6">
            <YouTube videoId={videos[activeVideo].id} opts={opts} onStateChange={event => {
            // Track progress when video ends
            if (event.data === YouTube.PlayerState.ENDED) {
              handleVideoProgress(videos[activeVideo].id, 100);
            }
          }} />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {videos[activeVideo].title}
            </h1>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {videos[activeVideo].duration}
            </div>
          </div>
        </div>
        {/* Video List Section */}
        <div className="lg:w-1/3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Chapter Videos
              </h2>
              <div className="mt-2 flex items-center">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{
                  width: `${calculateOverallProgress()}%`
                }}></div>
                </div>
                <span className="ml-4 text-sm text-gray-500 dark:text-gray-400">
                  {calculateOverallProgress()}% Complete
                </span>
              </div>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {videos.map((video, index) => <button key={video.id} onClick={() => setActiveVideo(index)} className={`w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${activeVideo === index ? 'bg-orange-50 dark:bg-orange-900/20' : ''}`}>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${progress[video.id] === 100 ? 'bg-green-100 dark:bg-green-900/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                      {progress[video.id] === 100 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-green-500">
                          <path d="M20 6 9 17l-5-5" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-gray-500 dark:text-gray-400">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        {video.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-1">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {video.duration}
                      </div>
                    </div>
                    {progress[video.id] > 0 && progress[video.id] < 100 && <div className="ml-4">
                        <div className="text-xs text-orange-500 font-medium">
                          {progress[video.id]}%
                        </div>
                      </div>}
                  </div>
                </button>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default VideoLessons;