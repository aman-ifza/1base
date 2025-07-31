import React from 'react';

const BrandSetupCard = ({ 
  title,
  description,
  buttonText,
  onButtonClick,
  image
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Content */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {description}
          </p>
          <button 
            onClick={onButtonClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 self-start"
          >
            {buttonText} →
          </button>
        </div>
        
        {/* Right side - Image */}
                {/* Right side - Image placeholder */}
        <div className="lg:w-1/2 bg-gray-200 relative min-h-[300px]">
          {image ? (
            <img 
              src={image} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-600 text-lg font-medium">Image to be inserted here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandSetupCard;
