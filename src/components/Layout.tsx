import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)} />
        {/* Sidebar */}
        <div className={`absolute top-0 left-0 w-64 h-full transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <Sidebar isMobile onClose={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
        <main className="flex-1 p-4 overflow-auto relative">
          {/* Watermark */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] dark:opacity-[0.01]">
            <img src="/hopes_logo.png" alt="Watermark" className="w-96 h-96 object-contain" />
          </div>
          {children}
        </main>
      </div>
    </div>;
};
export default Layout;