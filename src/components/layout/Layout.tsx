import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '../../contexts/AuthContext';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const {
    isAuthModalOpen
  } = useAuth();
  return <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
      <Footer />
      {isAuthModalOpen && <AuthModal />}
    </div>;
};
export default Layout;