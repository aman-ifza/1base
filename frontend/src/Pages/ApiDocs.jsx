import React, { useState } from 'react';
import ApiSidebar from '../components/ApiSidebar';
import ApiContent from '../components/ApiContent';
import ApiHeader from '../components/ApiHeader';

const ApiDocs = () => {
  const [selectedSection, setSelectedSection] = useState('overview');

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* API Sidebar */}
      <div className="flex-shrink-0">
        <ApiSidebar 
          selectedSection={selectedSection}
          onSectionSelect={setSelectedSection}
        />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen">
        {/* Header */}
        <div className="flex-shrink-0">
          <ApiHeader />
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          <ApiContent selectedSection={selectedSection} />
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
