import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, User, Home, BookOpen } from 'lucide-react';

const ApiHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div 
              className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center cursor-pointer"
              onClick={() => navigate('/')}
            >
              <span className="text-white font-bold text-sm">1b</span>
            </div>
            <span 
              className="font-semibold text-gray-900 cursor-pointer"
              onClick={() => navigate('/')}
            >
              1base
            </span>
          </div>
          <span className="text-gray-400">|</span>
          <h1 className="text-lg font-medium text-gray-900">API/SDKs Documentation</h1>
        </div>

        {/* Center Navigation Links */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors font-medium"
          >
            <Home size={16} />
            <span>Home</span>
          </button>
          <button 
            onClick={() => navigate('/guide')}
            className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors font-medium"
          >
            <BookOpen size={16} />
            <span>Guide</span>
          </button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
            <span className="text-sm text-gray-700">🇺🇸 English</span>
            <ChevronDown size={14} className="text-gray-500" />
          </div>

          {/* Login Button */}
          <button 
            onClick={() => navigate('/login')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <User size={16} />
            <span>Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ApiHeader;
