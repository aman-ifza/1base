import React, { useState } from 'react';
import ApiSidebar from '../components/ApiSidebar';
import ApiContent from '../components/ApiContent';
import ApiHeader from '../components/ApiHeader';

const ApiDocs = () => {
  const [selectedSection, setSelectedSection] = useState('getting-started');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* API Sidebar */}
      <ApiSidebar 
        selectedSection={selectedSection}
        onSectionSelect={setSelectedSection}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <ApiHeader />
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          <ApiContent selectedSection={selectedSection} />
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
