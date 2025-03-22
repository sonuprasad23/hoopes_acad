import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courseData';
const Notes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'jee' | 'neet' | '12th'>('all');
  // Filter notes based on active tab
  const getFilteredNotes = () => {
    if (activeTab === 'all') {
      return notes;
    }
    return notes.filter(note => note.category === activeTab);
  };
  return <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Study Notes
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Access comprehensive study materials and notes to help you master
          difficult concepts.
        </p>
      </div>
      <div className="mb-8 border-b border-gray-200 dark:border-gray-700">
        <nav className="flex flex-wrap -mb-px">
          <button onClick={() => setActiveTab('all')} className={`inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'all' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}>
            All Notes
          </button>
          <button onClick={() => setActiveTab('jee')} className={`inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'jee' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}>
            JEE
          </button>
          <button onClick={() => setActiveTab('neet')} className={`inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm ${activeTab === 'neet' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}>
            NEET
          </button>
          <button onClick={() => setActiveTab('12th')} className={`inline-flex items-center py-4 px-6 border-b-2 font-medium text-sm ${activeTab === '12th' ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'}`}>
            12th Standard
          </button>
        </nav>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredNotes().map(note => <div key={note.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-6 flex-grow">
              <div className="flex items-center mb-2">
                {note.category === 'jee' && <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    JEE
                  </span>}
                {note.category === 'neet' && <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    NEET
                  </span>}
                {note.category === '12th' && <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
                    12th
                  </span>}
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  {note.subject}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {note.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {note.description}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file mr-1">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span>{note.format}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text ml-4 mr-1">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" x2="8" y1="13" y2="13" />
                  <line x1="16" x2="8" y1="17" y2="17" />
                  <line x1="10" x2="8" y1="9" y2="9" />
                </svg>
                <span>{note.pages} pages</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span>Updated {note.updatedDate}</span>
              </div>
              <a href={note.downloadUrl} target="_blank" rel="noopener noreferrer" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download mr-1">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
                Download
              </a>
            </div>
          </div>)}
      </div>
    </div>;
};
// Mock data for notes
const notes = [{
  id: 'physics-mechanics',
  title: 'Mechanics Complete Notes',
  subject: 'Physics',
  category: 'jee',
  description: 'Comprehensive notes covering all mechanics concepts for JEE preparation, including kinematics, laws of motion, work-energy, and rotational dynamics.',
  format: 'PDF',
  pages: 45,
  updatedDate: 'Oct 15, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/keph1dd.zip'
}, {
  id: 'chemistry-organic',
  title: 'Organic Chemistry Handbook',
  subject: 'Chemistry',
  category: 'jee',
  description: 'Detailed notes on organic chemistry reactions, mechanisms, and important named reactions for JEE Advanced.',
  format: 'PDF',
  pages: 68,
  updatedDate: 'Nov 2, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/kech1dd.zip'
}, {
  id: 'maths-calculus',
  title: 'Calculus Master Notes',
  subject: 'Mathematics',
  category: 'jee',
  description: 'Complete calculus notes with solved examples and practice problems covering differentiation, integration, and applications.',
  format: 'PDF',
  pages: 72,
  updatedDate: 'Sep 28, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/kemh1dd.zip'
}, {
  id: 'biology-human-physiology',
  title: 'Human Physiology Notes',
  subject: 'Biology',
  category: 'neet',
  description: 'Detailed notes on human physiology systems including digestive, respiratory, circulatory, and excretory systems for NEET preparation.',
  format: 'PDF',
  pages: 56,
  updatedDate: 'Oct 5, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/kebo1dd.zip'
}, {
  id: 'chemistry-physical',
  title: 'Physical Chemistry Revision Notes',
  subject: 'Chemistry',
  category: 'neet',
  description: 'Concise revision notes for physical chemistry topics including thermodynamics, chemical equilibrium, and electrochemistry.',
  format: 'PDF',
  pages: 38,
  updatedDate: 'Nov 10, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/kech2dd.zip'
}, {
  id: 'physics-waves',
  title: 'Waves and Optics Notes',
  subject: 'Physics',
  category: '12th',
  description: 'Complete notes on waves, sound, and optics for 12th standard board exam preparation with solved examples.',
  format: 'PDF',
  pages: 42,
  updatedDate: 'Oct 20, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/leph2dd.zip'
}, {
  id: 'maths-vectors',
  title: 'Vectors and 3D Geometry',
  subject: 'Mathematics',
  category: '12th',
  description: 'Notes on vectors, three-dimensional geometry, and applications with step-by-step solutions to complex problems.',
  format: 'PDF',
  pages: 50,
  updatedDate: 'Sep 15, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/lemh1dd.zip'
}, {
  id: 'chemistry-inorganic',
  title: 'Inorganic Chemistry Handbook',
  subject: 'Chemistry',
  category: 'jee',
  description: 'Comprehensive notes on p-block, d-block, and f-block elements with important reactions and properties.',
  format: 'PDF',
  pages: 65,
  updatedDate: 'Nov 5, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/lech2dd.zip'
}, {
  id: 'biology-genetics',
  title: 'Genetics and Evolution Notes',
  subject: 'Biology',
  category: 'neet',
  description: 'Detailed notes covering principles of inheritance, molecular basis of inheritance, and evolution for NEET preparation.',
  format: 'PDF',
  pages: 48,
  updatedDate: 'Oct 12, 2023',
  downloadUrl: 'https://ncert.nic.in/textbook/pdf/lebo1dd.zip'
}];
export default Notes;