import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockTestQuestions } from '../data/courseData';
const MockTestDetail: React.FC = () => {
  const {
    testId
  } = useParams<{
    testId: string;
  }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(mockTestQuestions.length).fill(-1));
  const [timeRemaining, setTimeRemaining] = useState(15 * 60); // 15 minutes in seconds
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    if (testId !== 'chemistry-mock-1') {
      navigate('/mock-tests');
      return;
    }
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [testId, navigate]);
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };
  const handlePrevious = () => {
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  };
  const handleNext = () => {
    setCurrentQuestion(prev => Math.min(mockTestQuestions.length - 1, prev + 1));
  };
  const handleSubmit = () => {
    setTestSubmitted(true);
  };
  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === mockTestQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: mockTestQuestions.length,
      percentage: Math.round(correct / mockTestQuestions.length * 100)
    };
  };
  if (testSubmitted) {
    const score = calculateScore();
    return <div className="container mx-auto py-8 px-4 max-w-3xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Test Results
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Chemistry Mock Test 1
            </p>
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {score.correct}/{score.total}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Questions Correct
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {score.percentage}%
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Score
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {formatTime(15 * 60 - timeRemaining)}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Time Taken
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => setShowResult(!showResult)} className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md font-medium transition-colors mb-4">
              {showResult ? 'Hide Detailed Analysis' : 'Show Detailed Analysis'}
            </button>
            <button onClick={() => navigate('/mock-tests')} className="w-full bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-gray-700 py-3 px-4 rounded-md font-medium transition-colors">
              Return to Mock Tests
            </button>
          </div>
        </div>
        {showResult && <div className="mt-8 space-y-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Detailed Analysis
            </h2>
            {mockTestQuestions.map((question, index) => <div key={index} className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${selectedAnswers[index] === question.correctAnswer ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Question {index + 1}
                    </h3>
                    {selectedAnswers[index] === question.correctAnswer ? <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                        Correct
                      </span> : <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                        Incorrect
                      </span>}
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 mb-4">
                    {question.question}
                  </p>
                  <div className="space-y-2 mb-6">
                    {question.options.map((option, optionIndex) => <div key={optionIndex} className={`p-3 rounded-md ${optionIndex === question.correctAnswer ? 'bg-green-100 dark:bg-green-900/30 border border-green-500' : selectedAnswers[index] === optionIndex ? 'bg-red-100 dark:bg-red-900/30 border border-red-500' : 'bg-gray-50 dark:bg-gray-700/50 border border-transparent'}`}>
                        <div className="flex items-center">
                          <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 mr-3">
                            {String.fromCharCode(65 + optionIndex)}
                          </div>
                          <span className="text-gray-800 dark:text-gray-200">
                            {option}
                          </span>
                          {optionIndex === question.correctAnswer && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-green-500 ml-auto">
                              <path d="M20 6 9 17l-5-5" />
                            </svg>}
                          {selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x text-red-500 ml-auto">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                              </svg>}
                        </div>
                      </div>)}
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-md">
                    <h4 className="text-blue-800 dark:text-blue-300 font-medium mb-1">
                      Explanation
                    </h4>
                    <p className="text-blue-700 dark:text-blue-200">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>}
      </div>;
  }
  return <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Chemistry Mock Test 1
            </h1>
            <div className="text-lg font-semibold text-orange-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock mr-2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {formatTime(timeRemaining)}
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Question {currentQuestion + 1} of {mockTestQuestions.length}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {selectedAnswers.filter(a => a !== -1).length} of{' '}
                {mockTestQuestions.length} answered
              </div>
            </div>
            <div className="mb-6 overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {mockTestQuestions.map((_, index) => <button key={index} onClick={() => setCurrentQuestion(index)} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentQuestion === index ? 'bg-orange-500 text-white' : selectedAnswers[index] !== -1 ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-500' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'}`}>
                    {index + 1}
                  </button>)}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {mockTestQuestions[currentQuestion].question}
              </h2>
              <div className="space-y-3">
                {mockTestQuestions[currentQuestion].options.map((option, index) => <div key={index} onClick={() => handleAnswer(currentQuestion, index)} className={`p-4 rounded-md border cursor-pointer transition-colors ${selectedAnswers[currentQuestion] === index ? 'bg-orange-100 dark:bg-orange-900/30 border-orange-500' : 'bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'}`}>
                      <div className="flex items-center">
                        <div className={`w-6 h-6 flex items-center justify-center rounded-full mr-3 ${selectedAnswers[currentQuestion] === index ? 'bg-orange-500 text-white' : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'}`}>
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-gray-800 dark:text-gray-200">
                          {option}
                        </span>
                      </div>
                    </div>)}
              </div>
            </div>
            <div className="flex justify-between">
              <button onClick={handlePrevious} disabled={currentQuestion === 0} className={`flex items-center py-2 px-4 rounded-md text-sm font-medium transition-colors ${currentQuestion === 0 ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left mr-1">
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Previous
              </button>
              {currentQuestion < mockTestQuestions.length - 1 ? <button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center">
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button> : <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center">
                  Submit Test
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check ml-1">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </button>}
            </div>
          </div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-md">
          <h4 className="text-orange-800 dark:text-orange-300 font-medium mb-1">
            Instructions
          </h4>
          <ul className="text-orange-700 dark:text-orange-200 space-y-1 list-disc list-inside">
            <li>This test contains 10 multiple choice questions.</li>
            <li>You have 15 minutes to complete the test.</li>
            <li>Each question has only one correct answer.</li>
            <li>
              You can navigate between questions using the number buttons or
              previous/next buttons.
            </li>
            <li>
              Click "Submit Test" when you're finished or when time expires.
            </li>
          </ul>
        </div>
      </div>
    </div>;
};
export default MockTestDetail;