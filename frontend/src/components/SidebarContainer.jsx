import React from 'react';
import MiniSidebar from './MiniSidebar';
import Sidebar from './Sidebar';

const SidebarContainer = () => {
  return (
    <div className="flex">
      <div className="relative">
        <Sidebar />
        <div className="absolute top-0 left-full">
          <MiniSidebar />
        </div>
      </div>
    </div>
  );
};

export default SidebarContainer;
