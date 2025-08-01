import React from 'react';

const LogoCard = ({ imageUrl, onEdit, onExport }) => {
  return (
    <div className="relative w-64 h-64 group">
      {/* Main card container with purple background */}
      <div className="w-full h-full bg-[#6B21A8] rounded-lg overflow-hidden">
        {/* Image container */}
        <div className="w-full h-full flex items-center justify-center p-4">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt="Logo" 
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-white text-opacity-50">
              No image uploaded
            </div>
          )}
        </div>

        {/* Hover overlay with actions - initially hidden, appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white py-3 px-4">
            <div className="flex justify-between items-center">
              <button
                onClick={onEdit}
                className="text-[#1A1448] hover:text-[#2710D9] font-medium text-sm transition-colors duration-200"
              >
                Edit Logo
              </button>
              <button
                onClick={onExport}
                className="text-[#1A1448] hover:text-[#2710D9] font-medium text-sm transition-colors duration-200"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;
