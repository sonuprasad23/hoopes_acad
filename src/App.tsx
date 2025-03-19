import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import SubjectPage from './pages/SubjectPage';
import ChapterPage from './pages/ChapterPage';
import MockTestsPage from './pages/MockTestsPage';
import NotesPage from './pages/NotesPage';
import ProfilePage from './pages/ProfilePage';
export function App() {
  return <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:courseId" element={<CoursesPage />} />
              <Route path="/subjects/:subjectId" element={<SubjectPage />} />
              <Route path="/chapters/:chapterId" element={<ChapterPage />} />
              <Route path="/mock-tests" element={<MockTestsPage />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>;
}