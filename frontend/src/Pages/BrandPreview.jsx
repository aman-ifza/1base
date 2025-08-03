import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import BrandPreviewComponent from '../components/BrandPreviewComponent';

const BrandPreview = () => {
  const location = useLocation();
  const { brandName, brandData } = location.state || { brandName: '1base', brandData: null };

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Main Content Area - Brand Preview */}
      <div className="flex-1 px-4">
        <BrandPreviewComponent brandName={brandName} brandData={brandData} />
      </div>
    </div>
  );
};

export default BrandPreview;
