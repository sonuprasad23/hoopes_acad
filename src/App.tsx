import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import SubjectDetail from './pages/SubjectDetail';
import MockTests from './pages/MockTests';
import MockTestDetail from './pages/MockTestDetail';
import Notes from './pages/Notes';
import Auth from './pages/Auth';
import ChatSupport from './components/ChatSupport';
import VideoLessons from './pages/VideoLessons';
import { ThemeProvider } from './context/ThemeContext';
export function App() {
  const [chatOpen, setChatOpen] = useState(false);
  return <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:courseId" element={<CourseDetail />} />
            <Route path="/courses/:courseId/:subjectId" element={<SubjectDetail />} />
            <Route path="/courses/:courseId/:subjectId/unit/:unitId/topic/:topicId" element={<VideoLessons />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/mock-tests/:testId" element={<MockTestDetail />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
          {chatOpen && <ChatSupport onClose={() => setChatOpen(false)} />}
          <button onClick={() => setChatOpen(true)} className="fixed bottom-6 right-6 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors z-50" style={{
          display: chatOpen ? 'none' : 'block'
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>
        </Layout>
      </Router>
    </ThemeProvider>;
}