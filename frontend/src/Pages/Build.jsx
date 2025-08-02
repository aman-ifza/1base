import React from 'react';
import SidebarContainer from '../components/SidebarContainer';
import RightMiniSidebar from '../components/RightMiniSidebar';
import PromptBar from '../components/PromptBar';

const Build = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Main layout container */}
      <div className="relative z-10 flex h-screen">
        
        {/* Left Sidebar */}
        <div className="flex-shrink-0">
          <SidebarContainer />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          
          {/* Central workspace area */}
          <div className="flex-1 flex items-center justify-center p-8">
            {/* Empty content area */}
          </div>
          
          {/* Bottom Prompt Bar */}
          <div className="flex-shrink-0 p-6 pb-8">
            <PromptBar />
          </div>
        </div>
        
        {/* Right Mini Sidebar */}
        <div className="flex-shrink-0">
          <RightMiniSidebar />
        </div>
      </div>
    </div>
  );
};

export default Build;
