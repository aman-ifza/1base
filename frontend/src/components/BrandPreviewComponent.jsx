import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';
import LandingPage from '../Pages/LandingPage';

const BrandPreviewComponent = () => {
  const [viewMode, setViewMode] = useState('desktop');

  const getViewportStyles = () => {
    switch (viewMode) {
      case 'mobile':
        return { width: '375px', minHeight: '100%' };
      case 'tablet':
        return { width: '768px', minHeight: '100%' };
      case 'desktop':
      default:
        return { width: '100%', minHeight: '100%' };
    }
  };

  const getScaleClass = () => {
    switch (viewMode) {
      case 'mobile':
        return 'scale-100';
      case 'tablet':
        return 'scale-90';
      case 'desktop':
      default:
        return 'scale-100';
    }
  };

  return (
    <div className="w-full mx-auto h-screen flex flex-col bg-gray-800/10 backdrop-blur-md rounded-lg border border-gray-200/20 shadow-xl mt-8">
      {/* Header with Device Selection and Action Buttons */}
      <div className="px-6 py-4 flex items-center justify-between relative border-b border-gray-200/20">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()} 
          className="absolute left-6 top-5 flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        <h2 className="text-xl font-semibold text-white mx-auto">Brand Website Preview</h2>
        
        <div className="flex items-center gap-4">
          {/* Device Toggle Buttons */}
          <div className="flex bg-gray-800/30 rounded-lg p-1">
            <button
              onClick={() => setViewMode('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'desktop'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Monitor size={16} />
              Desktop
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'tablet'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Tablet size={16} />
              Tablet
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'mobile'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Smartphone size={16} />
              Mobile
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Edit Website
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
              Go Live
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Preview Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-center min-h-full">
          {/* Device Frame */}
          <div className={`bg-white/95 backdrop-blur-sm rounded-lg shadow-xl ring-1 ring-white/20 overflow-hidden ${getScaleClass()} transition-all duration-300`} 
               style={getViewportStyles()}>
            {/* Browser Bar (only for desktop) */}
            {viewMode === 'desktop' && (
              <div className="bg-gray-200 px-4 py-2 flex items-center gap-2 border-b">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-3 py-1 text-sm text-gray-600">
                    https://1base.com
                  </div>
                </div>
              </div>
            )}
            
            {/* Website Content */}
            <div className="w-full">
              <LandingPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPreviewComponent;
