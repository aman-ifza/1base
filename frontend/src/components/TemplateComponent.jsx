import React from 'react';

const TemplateComponent = ({ imageUrl, title, onView, onExport, onBookmark, isBookmarked = false }) => {
  return (
    <div className="relative w-[400px] group rounded-2xl overflow-hidden bg-white shadow-lg">
      {/* Image container */}
      <div className="w-full h-[320px] overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title || "Template"} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>

      {/* Content overlay - always visible */}
      <div className="absolute bottom-0 left-0 right-0 bg-white">
        <div className="p-4">
          {/* Top row with title and bookmark */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[#1A1448] font-semibold">{title || "Productivity"}</h3>
            <button 
              onClick={onBookmark}
              className="text-gray-400 hover:text-[#2710D9] transition-colors"
            >
              {isBookmarked ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 4v18l7-4 7 4V4H5z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 4v18l7-4 7 4V4H5z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button
              onClick={onView}
              className="flex-1 py-2 px-4 bg-[#FFF8D6] text-[#1A1448] font-medium rounded-lg hover:bg-[#FFF3B8] transition-colors"
            >
              View Template
            </button>
            <button
              onClick={onExport}
              className="flex-1 py-2 px-4 bg-[#E7F5FF] text-[#1A1448] font-medium rounded-lg hover:bg-[#D3ECFF] transition-colors"
            >
              Export
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateComponent;
