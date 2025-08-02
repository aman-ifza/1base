import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import NameMiniSidebar from '../components/NameMiniSidebar';
import NameRightMiniSidebar from '../components/NameRightMiniSidebar';
import PromptBar from '../components/PromptBar';
import Chatbox from '../components/Chatbox';

const Name = () => {
  const [isPromptSubmitted, setIsPromptSubmitted] = useState(false);

  const handlePromptSubmit = () => {
    setIsPromptSubmitted(true);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* NameMiniSidebar - positioned fixed to attach to main sidebar */}
      <NameMiniSidebar isCollapsed={isPromptSubmitted} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Central workspace area */}
        <div className="flex-1 flex items-center justify-center p-8">
          {isPromptSubmitted ? (
            <div className="w-full h-full animate-fade-in">
              <Chatbox />
            </div>
          ) : (
            <div className="text-center text-gray-500 transition-opacity duration-300">
              {/* Placeholder content when no prompt is submitted */}
              <p>Configure your brand settings and enter a prompt to generate names</p>
            </div>
          )}
        </div>
        
        {/* Bottom Prompt Bar */}
        <div className="flex-shrink-0 p-6 pb-8">
          <PromptBar onSubmit={handlePromptSubmit} />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="flex-shrink-0">
        <NameRightMiniSidebar isCollapsed={isPromptSubmitted} />
      </div>
    </div>
  );
};

export default Name;
