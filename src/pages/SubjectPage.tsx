import React from 'react';
import { useParams } from 'react-router-dom';
import { BookOpenIcon, ClockIcon } from 'lucide-react';
import ChapterCard from '../components/courses/ChapterCard';
import ChatbotInterface from '../components/chatbot/ChatbotInterface';
// Mock data for the subject
const subjectData = {
  'jee-physics': {
    title: 'Physics',
    description: 'Complete JEE Physics preparation covering mechanics, thermodynamics, electromagnetism, optics, and modern physics.',
    totalChapters: 15,
    completedChapters: 7,
    progress: 46,
    totalDuration: '45 hours',
    chapters: [{
      id: 'phy-1',
      title: 'Mechanics',
      videoCount: 24,
      notesAvailable: true,
      progress: 100,
      duration: '8 hours'
    }, {
      id: 'phy-2',
      title: 'Thermodynamics',
      videoCount: 18,
      notesAvailable: true,
      progress: 85,
      duration: '6 hours'
    }, {
      id: 'phy-3',
      title: 'Electrostatics',
      videoCount: 15,
      notesAvailable: true,
      progress: 60,
      duration: '5 hours'
    }, {
      id: 'phy-4',
      title: 'Current Electricity',
      videoCount: 12,
      notesAvailable: true,
      progress: 40,
      duration: '4 hours'
    }, {
      id: 'phy-5',
      title: 'Magnetism',
      videoCount: 14,
      notesAvailable: true,
      progress: 20,
      duration: '5 hours'
    }, {
      id: 'phy-6',
      title: 'Electromagnetic Induction',
      videoCount: 10,
      notesAvailable: true,
      progress: 0,
      duration: '3 hours'
    }, {
      id: 'phy-7',
      title: 'Optics',
      videoCount: 16,
      notesAvailable: true,
      progress: 0,
      duration: '5 hours'
    }, {
      id: 'phy-8',
      title: 'Modern Physics',
      videoCount: 20,
      notesAvailable: true,
      progress: 0,
      duration: '7 hours'
    }]
  },
  'jee-chemistry': {
    title: 'Chemistry',
    description: 'Comprehensive JEE Chemistry preparation covering physical, organic, and inorganic chemistry with practice problems.',
    totalChapters: 18,
    completedChapters: 5,
    progress: 28,
    totalDuration: '50 hours',
    chapters: [{
      id: 'chem-1',
      title: 'Atomic Structure',
      videoCount: 12,
      notesAvailable: true,
      progress: 100,
      duration: '4 hours'
    }, {
      id: 'chem-2',
      title: 'Chemical Bonding',
      videoCount: 15,
      notesAvailable: true,
      progress: 80,
      duration: '5 hours'
    }, {
      id: 'chem-3',
      title: 'States of Matter',
      videoCount: 10,
      notesAvailable: true,
      progress: 60,
      duration: '3 hours'
    }, {
      id: 'chem-4',
      title: 'Thermodynamics',
      videoCount: 14,
      notesAvailable: true,
      progress: 30,
      duration: '4 hours'
    }, {
      id: 'chem-5',
      title: 'Equilibrium',
      videoCount: 16,
      notesAvailable: true,
      progress: 10,
      duration: '5 hours'
    }, {
      id: 'chem-6',
      title: 'Redox Reactions',
      videoCount: 8,
      notesAvailable: true,
      progress: 0,
      duration: '3 hours'
    }, {
      id: 'chem-7',
      title: 'Organic Chemistry Basics',
      videoCount: 18,
      notesAvailable: true,
      progress: 0,
      duration: '6 hours'
    }, {
      id: 'chem-8',
      title: 'Hydrocarbons',
      videoCount: 14,
      notesAvailable: true,
      progress: 0,
      duration: '5 hours'
    }]
  },
  'jee-maths': {
    title: 'Mathematics',
    description: 'Expert-led JEE Mathematics preparation covering algebra, calculus, trigonometry, coordinate geometry, and more.',
    totalChapters: 16,
    completedChapters: 3,
    progress: 19,
    totalDuration: '60 hours',
    chapters: [{
      id: 'math-1',
      title: 'Sets, Relations & Functions',
      videoCount: 12,
      notesAvailable: true,
      progress: 100,
      duration: '4 hours'
    }, {
      id: 'math-2',
      title: 'Complex Numbers',
      videoCount: 10,
      notesAvailable: true,
      progress: 75,
      duration: '3 hours'
    }, {
      id: 'math-3',
      title: 'Quadratic Equations',
      videoCount: 8,
      notesAvailable: true,
      progress: 50,
      duration: '3 hours'
    }, {
      id: 'math-4',
      title: 'Matrices & Determinants',
      videoCount: 15,
      notesAvailable: true,
      progress: 0,
      duration: '5 hours'
    }, {
      id: 'math-5',
      title: 'Permutations & Combinations',
      videoCount: 12,
      notesAvailable: true,
      progress: 0,
      duration: '4 hours'
    }, {
      id: 'math-6',
      title: 'Binomial Theorem',
      videoCount: 8,
      notesAvailable: true,
      progress: 0,
      duration: '3 hours'
    }, {
      id: 'math-7',
      title: 'Differential Calculus',
      videoCount: 22,
      notesAvailable: true,
      progress: 0,
      duration: '8 hours'
    }, {
      id: 'math-8',
      title: 'Integral Calculus',
      videoCount: 20,
      notesAvailable: true,
      progress: 0,
      duration: '7 hours'
    }]
  }
};
const SubjectPage: React.FC = () => {
  const {
    subjectId
  } = useParams<{
    subjectId: string;
  }>();
  const subject = subjectData[subjectId as keyof typeof subjectData] || {
    title: 'Subject',
    description: 'Subject description',
    totalChapters: 0,
    completedChapters: 0,
    progress: 0,
    totalDuration: '0 hours',
    chapters: []
  };
  return <div className="w-full">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {subject.title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {subject.description}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center">
            <div className="relative w-16 h-16">
              <svg className="w-16 h-16" viewBox="0 0 36 36">
                <path d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E5E7EB" strokeWidth="3" />
                <path d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F97316" strokeWidth="3" strokeDasharray={`${subject.progress}, 100`} />
                <text x="18" y="20.5" className="text-lg font-medium" textAnchor="middle" fill="#1F2937" style={{
                fontSize: '9px'
              }}>
                  {subject.progress}%
                </text>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Overall Progress
              </p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {subject.completedChapters} of {subject.totalChapters} chapters
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-orange-100 dark:bg-gray-700 rounded-full p-3">
              <BookOpenIcon className="h-6 w-6 text-orange-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Chapters
              </p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {subject.totalChapters}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-orange-100 dark:bg-gray-700 rounded-full p-3">
              <ClockIcon className="h-6 w-6 text-orange-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Duration
              </p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                {subject.totalDuration}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Chapters List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Chapters
          </h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-orange-400 rounded-md hover:bg-orange-200 dark:hover:bg-gray-600 transition-colors">
              All
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-100 dark:hover:bg-gray-700 rounded-md transition-colors">
              In Progress
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:bg-orange-100 dark:hover:bg-gray-700 rounded-md transition-colors">
              Completed
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {subject.chapters.map(chapter => <ChapterCard key={chapter.id} id={chapter.id} title={chapter.title} videoCount={chapter.videoCount} notesAvailable={chapter.notesAvailable} progress={chapter.progress} duration={chapter.duration} />)}
        </div>
      </div>
      {/* Chatbot */}
      <ChatbotInterface />
    </div>;
};
export default SubjectPage;