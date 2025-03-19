import React, { useEffect, useState, useRef } from 'react';
import { SendIcon, XIcon, MessageSquareIcon } from 'lucide-react';
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
const ChatbotInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: "Hi there! 👋 I'm the HOPES ACADEMY assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date()
  }]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const generateBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes('admission')) {
      return 'For admission inquiries, please WhatsApp us at +91 7903066925. Our team will assist you with the admission process and provide all necessary information.';
    }
    if (lowerMessage.includes('notes') || lowerMessage.includes('study material')) {
      return 'You can find all study materials and notes in the Notes section. For specific materials, please WhatsApp us at +91 7903066925.';
    }
    if (lowerMessage.includes('fees')) {
      return 'For detailed fee structure and payment options, please WhatsApp us at +91 7903066925. We offer flexible payment plans for our courses.';
    }
    if (lowerMessage.includes('syllabus')) {
      return 'Our courses cover complete JEE, NEET, and 12th standard syllabi. For detailed subject-wise syllabus, please WhatsApp us at +91 7903066925.';
    }
    return 'Thank you for your message. For immediate assistance, please WhatsApp us at +91 7903066925. How else can I help you with HOPES ACADEMY services?';
  };
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return <>
      {!isOpen && <button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 bg-orange-500 text-white rounded-full p-4 shadow-lg hover:bg-orange-600 transition-all z-50">
          <MessageSquareIcon className="h-6 w-6" />
        </button>}
      {isOpen && <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col z-50 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="bg-orange-500 rounded-full p-1.5">
                <MessageSquareIcon className="h-5 w-5 text-white" />
              </div>
              <h3 className="ml-2 text-lg font-medium text-gray-900 dark:text-white">
                HOPES Assistant
              </h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-orange-500 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'}`}>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
                  </p>
                </div>
              </div>)}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type your message..." className="flex-1 bg-gray-100 dark:bg-gray-700 border-none rounded-full py-2 px-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <button onClick={handleSendMessage} disabled={!inputText.trim()} className={`ml-2 p-2 rounded-full ${inputText.trim() ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}>
                <SendIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>}
    </>;
};
export default ChatbotInterface;