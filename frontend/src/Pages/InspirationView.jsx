import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TemplatePreview from '../components/TemplatePreview';

const InspirationView = () => {
  const { templateId } = useParams();

  // You can use templateId to fetch specific template data
  // For now, we'll pass it as a prop to TemplatePreview
  
  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Main Content Area - Template Preview */}
      <div className="flex-1 px-4">
        <TemplatePreview templateId={templateId} />
      </div>
    </div>
  );
};

export default InspirationView;
