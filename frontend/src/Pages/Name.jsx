import React, { useState, useCallback } from 'react';
import Sidebar from '../components/Sidebar';
import NameMiniSidebar from '../components/NameMiniSidebar';
import NameRightMiniSidebar from '../components/NameRightMiniSidebar';
import PromptBar from '../components/PromptBar';
import Chatbox from '../components/Chatbox';

const Name = () => {
  const [isPromptSubmitted, setIsPromptSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handlePromptSubmit = () => {
    setIsPromptSubmitted(true);
  };

  const handleTypingStatusChange = useCallback((typing) => {
    setIsTyping(typing);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* NameMiniSidebar - positioned fixed to attach to main sidebar */}
      <NameMiniSidebar isDisabled={isTyping} forceCollapsed={isTyping} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        
        {/* Central workspace area */}
        <div className="flex-1 flex items-center justify-center p-8">
          {isPromptSubmitted ? (
            <div className="w-full h-full animate-fade-in">
              <Chatbox onTypingStatusChange={handleTypingStatusChange} />
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
        <NameRightMiniSidebar isDisabled={isTyping} forceCollapsed={isTyping} />
      </div>
    </div>
  );
};

export default Name;
