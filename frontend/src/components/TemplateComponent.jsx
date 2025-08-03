import React from 'react';

const TemplateComponent = ({ imageUrl, title, onView, onExport, onBookmark, isBookmarked = false }) => {
  
  // Generate placeholder content based on title
  const generatePlaceholder = (title) => {
    const colors = {
      'Productivity': 'from-yellow-400 to-orange-500',
      'Portfolio': 'from-green-600 to-teal-600',
      'Marketing': 'from-blue-500 to-indigo-600',
      'Presentation': 'from-purple-500 to-pink-500',
      'Technology': 'from-gray-700 to-blue-800',
      'Agency': 'from-gray-800 to-black',
      'E-commerce': 'from-red-500 to-pink-600',
      'Healthcare': 'from-blue-400 to-cyan-500',
      'Education': 'from-indigo-500 to-purple-600',
      'Restaurant': 'from-orange-600 to-red-600',
      'Real Estate': 'from-gray-600 to-gray-800',
      'Fitness': 'from-green-500 to-emerald-600'
    };

    const textContent = {
      'Productivity': 'Your day, your way.',
      'Portfolio': 'KANI SINGH PHOTOGRAPHY',
      'Marketing': 'GROW YOUR COMPANY',
      'Presentation': 'Project Proposal',
      'Technology': 'Always Stay Connected',
      'Agency': 'Strategy Building',
      'E-commerce': 'Shop Collection',
      'Healthcare': 'Health First',
      'Education': 'Learn & Grow',
      'Restaurant': 'Taste Excellence',
      'Real Estate': 'Dream Homes',
      'Fitness': 'Stay Strong'
    };

    return {
      gradient: colors[title] || 'from-gray-500 to-gray-700',
      text: textContent[title] || title
    };
  };

  const placeholder = generatePlaceholder(title);

  return (
    <div className="relative w-full group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Image container */}
      <div className="w-full h-[320px] overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title || "Template"} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${placeholder.gradient} flex items-center justify-center relative`}>
            {/* Mock template content */}
            <div className="text-center px-6">
              {title === 'Productivity' && (
                <div className="text-white">
                  <h2 className="text-2xl font-bold mb-2">{placeholder.text}</h2>
                  <p className="text-sm opacity-90">Organize your workflow efficiently</p>
                  <div className="mt-4 w-16 h-16 bg-white/20 rounded-lg mx-auto flex items-center justify-center">
                    <div className="text-2xl">📋</div>
                  </div>
                </div>
              )}
              {title === 'Portfolio' && (
                <div className="text-white">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <div className="text-xl">📸</div>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold">{placeholder.text}</h2>
                </div>
              )}
              {title === 'Marketing' && (
                <div className="text-white">
                  <h2 className="text-2xl font-bold mb-2">{placeholder.text}</h2>
                  <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                    <div className="text-3xl">📈</div>
                  </div>
                </div>
              )}
              {title === 'Presentation' && (
                <div className="text-white">
                  <div className="bg-white/20 rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-2">{placeholder.text}</h2>
                    <div className="text-sm opacity-90">Professional slides</div>
                  </div>
                </div>
              )}
              {title === 'Technology' && (
                <div className="text-white">
                  <h2 className="text-xl font-bold mb-3">{placeholder.text}</h2>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-8 bg-blue-400 rounded"></div>
                    <div className="w-8 h-8 bg-cyan-400 rounded"></div>
                    <div className="w-8 h-8 bg-white rounded"></div>
                  </div>
                </div>
              )}
              {title === 'Agency' && (
                <div className="text-white">
                  <h2 className="text-xl font-bold mb-3">{placeholder.text}</h2>
                  <div className="grid grid-cols-2 gap-2 max-w-20 mx-auto">
                    <div className="h-8 bg-white/30 rounded"></div>
                    <div className="h-8 bg-white/30 rounded"></div>
                    <div className="h-8 bg-white/30 rounded col-span-2"></div>
                  </div>
                </div>
              )}
              {!['Productivity', 'Portfolio', 'Marketing', 'Presentation', 'Technology', 'Agency'].includes(title) && (
                <div className="text-white">
                  <h2 className="text-xl font-bold mb-3">{placeholder.text}</h2>
                  <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto flex items-center justify-center">
                    <div className="text-2xl">✨</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content overlay - always visible */}
      <div className="absolute bottom-0 left-0 right-0 bg-white">
        <div className="p-4">
          {/* Top row with title and bookmark */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-gray-800 font-semibold text-lg">{title || "Template"}</h3>
            <button 
              onClick={onBookmark}
              className="text-gray-400 hover:text-yellow-500 transition-colors"
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
              className="flex-1 py-2 px-4 bg-yellow-100 text-gray-800 font-medium rounded-lg hover:bg-yellow-200 transition-colors text-sm"
            >
              View Template
            </button>
            <button
              onClick={onExport}
              className="flex-1 py-2 px-4 bg-blue-100 text-gray-800 font-medium rounded-lg hover:bg-blue-200 transition-colors text-sm"
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
