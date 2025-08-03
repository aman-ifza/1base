import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ToneLeftMiniSidebar from '../components/ToneLeftMiniSidebar';
import ToneRightMiniSidebar from '../components/ToneRightMiniSidebar';
import PromptBar from '../components/PromptBar';

const BrandTone = () => {
  const [activeSection, setActiveSection] = useState('brand-tone');
  const [isMainSidebarCollapsed, setIsMainSidebarCollapsed] = useState(false);

  const handleSidebarCollapseChange = (collapsed) => {
    setIsMainSidebarCollapsed(collapsed);
  };

  return (
    <div className="flex h-screen">
      {/* Main Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onCollapseChange={handleSidebarCollapseChange}
      />
      
      {/* Tone Left Mini Sidebar */}
      <ToneLeftMiniSidebar isMainSidebarCollapsed={isMainSidebarCollapsed} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Central Content */}
        <div className="flex-1 flex">
          {/* Left content area */}
          <div className="flex-1 flex items-center justify-center">
            {/* Empty central area - uses global CSS background */}
          </div>
          
          {/* Tone Right Mini Sidebar */}
          <ToneRightMiniSidebar />
        </div>
      </div>
      
      {/* Independent Prompt Bar at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center p-4 pb-8 z-20">
        <PromptBar />
      </div>
    </div>
  );
};

export default BrandTone;
