import React, { useState, createContext, useContext } from 'react';
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  isAuthModalOpen: boolean;
  authModalView: 'login' | 'register';
  setAuthModalView: (view: 'login' | 'register') => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<'login' | 'register'>('login');
  const login = async (email: string, password: string) => {
    // This is a mock implementation
    setUser({
      id: '1',
      name: 'Student User',
      email: email,
      avatar: 'https://i.pravatar.cc/150?img=11'
    });
    setIsAuthModalOpen(false);
  };
  const register = async (name: string, email: string, password: string) => {
    // This is a mock implementation
    setUser({
      id: '1',
      name: name,
      email: email,
      avatar: 'https://i.pravatar.cc/150?img=11'
    });
    setIsAuthModalOpen(false);
  };
  const logout = () => {
    setUser(null);
  };
  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);
  return <AuthContext.Provider value={{
    user,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    openAuthModal,
    closeAuthModal,
    isAuthModalOpen,
    authModalView,
    setAuthModalView
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};