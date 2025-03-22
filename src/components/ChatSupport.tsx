import React, { useState } from 'react';
interface ChatSupportProps {
  onClose: () => void;
}
const ChatSupport: React.FC<ChatSupportProps> = ({
  onClose
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setShowResponse(true);
  };
  return <div className="fixed bottom-6 right-6 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200 dark:border-gray-700">
      <div className="bg-orange-500 text-white p-4 flex justify-between items-center">
        <h3 className="font-medium flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle mr-2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          Chat Support
        </h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div className="p-4 h-80 overflow-y-auto">
        <div className="flex mb-4">
          <div className="bg-orange-100 dark:bg-orange-900/20 rounded-lg p-3 max-w-[80%]">
            <p className="text-gray-800 dark:text-gray-200">
              Welcome to HOPES ACADEMY! How can I help you today?
            </p>
          </div>
        </div>
        {!selectedOption ? <div className="space-y-2 mt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Please select what you need help with:
            </p>
            <button onClick={() => handleOptionSelect('Admission')} className="block w-full text-left p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200">
              Admission Information
            </button>
            <button onClick={() => handleOptionSelect('Notes')} className="block w-full text-left p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200">
              Study Notes
            </button>
            <button onClick={() => handleOptionSelect('Fees')} className="block w-full text-left p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200">
              Fee Structure
            </button>
            <button onClick={() => handleOptionSelect('Syllabus')} className="block w-full text-left p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200">
              Syllabus Details
            </button>
          </div> : <>
            <div className="flex justify-end mb-4">
              <div className="bg-orange-500 text-white rounded-lg p-3 max-w-[80%]">
                <p>{selectedOption}</p>
              </div>
            </div>
            {showResponse && <div className="flex mb-4">
                <div className="bg-orange-100 dark:bg-orange-900/20 rounded-lg p-3 max-w-[80%]">
                  <p className="text-gray-800 dark:text-gray-200">
                    We are working on this. Please WhatsApp us on +91 7903066925
                    for immediate assistance regarding{' '}
                    {selectedOption.toLowerCase()}.
                  </p>
                </div>
              </div>}
          </>}
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex">
        <input type="text" placeholder="Type your message..." className="flex-1 bg-gray-100 dark:bg-gray-700 border-none rounded-l-md p-2 focus:outline-none text-gray-800 dark:text-gray-200" disabled={!selectedOption} />
        <button className="bg-orange-500 text-white rounded-r-md px-4 hover:bg-orange-600 disabled:opacity-50" disabled={!selectedOption}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
        </button>
      </div>
    </div>;
};
export default ChatSupport;