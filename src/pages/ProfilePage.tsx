import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import ChatbotInterface from '../components/chatbot/ChatbotInterface';
const ProfilePage: React.FC = () => {
  const {
    user
  } = useAuth();
  return <div className="w-full">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Profile
        </h1>
        {user ? <p className="mt-2 text-gray-600 dark:text-gray-300">
            Welcome back, {user.name}!
          </p> : <p className="mt-2 text-gray-600 dark:text-gray-300">
            Please sign in to view your profile.
          </p>}
      </div>
      {/* Main content - To be implemented */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Profile content coming soon...
        </p>
      </div>
      {/* Chatbot */}
      <ChatbotInterface />
    </div>;
};
export default ProfilePage;