import React from 'react';
import { useParams } from 'react-router-dom';
import ChatbotInterface from '../components/chatbot/ChatbotInterface';
const ChapterPage: React.FC = () => {
  const {
    chapterId
  } = useParams<{
    chapterId: string;
  }>();
  return <div className="w-full">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Chapter Details
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Chapter ID: {chapterId}
        </p>
      </div>
      {/* Main content - To be implemented */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Chapter content coming soon...
        </p>
      </div>
      {/* Chatbot */}
      <ChatbotInterface />
    </div>;
};
export default ChapterPage;