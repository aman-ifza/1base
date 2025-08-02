import React from 'react';
import Sidebar from '../components/Sidebar';
import DesignCanvas from '../components/DesignCanvas';
import DesignEditingSidebar from '../components/DesignEditingSidebar';

const LogoEditor = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar - Navigation */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Main Canvas Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full h-full flex items-center justify-center">
          <DesignCanvas />
        </div>
      </div>
      
      {/* Right Sidebar - Design Editing Tools */}
      <DesignEditingSidebar />
    </div>
  );
};

export default LogoEditor;
