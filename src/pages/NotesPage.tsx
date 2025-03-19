import React from 'react';
import ChatbotInterface from '../components/chatbot/ChatbotInterface';
import { BookOpenIcon, DownloadIcon, FileTextIcon } from 'lucide-react';
const notesData = {
  jee: {
    physics: [{
      title: 'Complete Physics Formula Book',
      description: 'Comprehensive collection of all important formulas',
      url: 'https://ncert.nic.in/textbook/pdf/leph1dd.pdf',
      size: '2.4 MB'
    }, {
      title: 'Mechanics Notes',
      description: 'Detailed notes on Mechanics and Motion',
      url: 'https://ncert.nic.in/textbook/pdf/leph2dd.pdf',
      size: '1.8 MB'
    }],
    chemistry: [{
      title: 'Organic Chemistry Notes',
      description: 'Complete organic chemistry preparation material',
      url: 'https://ncert.nic.in/textbook/pdf/lech1dd.pdf',
      size: '3.1 MB'
    }],
    mathematics: [{
      title: 'Calculus Complete Notes',
      description: 'Comprehensive calculus study material',
      url: 'https://ncert.nic.in/textbook/pdf/lemh1dd.pdf',
      size: '2.7 MB'
    }]
  },
  neet: {
    physics: [{
      title: 'NEET Physics Complete Notes',
      description: 'Chapter-wise physics notes for NEET',
      url: 'https://ncert.nic.in/textbook/pdf/leph1dd.pdf',
      size: '4.2 MB'
    }],
    chemistry: [{
      title: 'NEET Chemistry Study Material',
      description: 'Complete chemistry preparation notes',
      url: 'https://ncert.nic.in/textbook/pdf/lech1dd.pdf',
      size: '3.5 MB'
    }],
    biology: [{
      title: 'Biology Complete Notes',
      description: 'Comprehensive biology study material',
      url: 'https://ncert.nic.in/textbook/pdf/lebo1dd.pdf',
      size: '5.1 MB'
    }]
  },
  '12th': {
    physics: [{
      title: 'Class 12 Physics Notes',
      description: 'CBSE Class 12 Physics complete notes',
      url: 'https://ncert.nic.in/textbook/pdf/leph1dd.pdf',
      size: '3.8 MB'
    }],
    chemistry: [{
      title: 'Class 12 Chemistry Notes',
      description: 'CBSE Class 12 Chemistry study material',
      url: 'https://ncert.nic.in/textbook/pdf/lech1dd.pdf',
      size: '3.2 MB'
    }],
    mathematics: [{
      title: 'Class 12 Mathematics Notes',
      description: 'CBSE Class 12 Mathematics complete notes',
      url: 'https://ncert.nic.in/textbook/pdf/lemh1dd.pdf',
      size: '2.9 MB'
    }]
  }
};
const NotesPage: React.FC = () => {
  return <div className="w-full">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Study Notes
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Access comprehensive study materials and notes for all subjects.
        </p>
      </div>
      {/* Notes Content */}
      <div className="space-y-6">
        {Object.entries(notesData).map(([course, subjects]) => <div key={course} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {course === '12th' ? '12th Standard' : course.toUpperCase()} Notes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(subjects).map(([subject, notes]) => <div key={subject} className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white capitalize">
                    {subject}
                  </h3>
                  {notes.map((note, index) => <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-orange-500 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {note.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {note.description}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Size: {note.size}
                          </p>
                        </div>
                        <a href={note.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-orange-500 hover:text-orange-600">
                          <DownloadIcon className="h-5 w-5" />
                        </a>
                      </div>
                    </div>)}
                </div>)}
            </div>
          </div>)}
      </div>
      <ChatbotInterface />
    </div>;
};
export default NotesPage;