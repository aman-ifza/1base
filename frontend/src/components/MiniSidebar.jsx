import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const MiniSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedColor, setSelectedColor] = useState('#4F46E5');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [brandDescription, setBrandDescription] = useState('');

  const predefinedColors = [
    '#EF4444', '#F97316', '#EAB308', '#22C55E', '#06B6D4', '#3B82F6', '#6366F1',
    '#EC4899', '#EF4444', '#A855F7', '#8B5CF6', '#0EA5E9', '#10B981', '#84CC16'
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const selectPredefinedColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="relative flex">
      {/* Mini Sidebar */}
      <div className={`relative transition-all duration-300 ease-in-out ${isExpanded ? 'w-80' : 'w-0'} overflow-hidden`}>
        {isExpanded && (
          <div className="w-80 h-[calc(80vh)] mt-[10vh] bg-white border-l border-gray-200 flex flex-col" style={{ borderTopRightRadius: '34px', borderBottomRightRadius: '34px' }}>
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">Brand Configuration</h2>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 space-y-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter your company name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                </select>
              </div>

              {/* Brand Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Description
                </label>
                <textarea
                  value={brandDescription}
                  onChange={(e) => setBrandDescription(e.target.value)}
                  placeholder="Describe your brand personality, values, and target audience..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Preferred Colors */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Preferred Colors
                </label>
                
                {/* Color Gradient Display */}
                <div 
                  className="w-full h-32 rounded-lg mb-4 relative"
                  style={{
                    background: `linear-gradient(135deg, ${selectedColor}, #000000, ${selectedColor})`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-lg"></div>
                </div>

                {/* Color Picker */}
                <div className="mb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <input
                      type="color"
                      value={selectedColor}
                      onChange={handleColorChange}
                      className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                    />
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Hex</span>
                      <input
                        type="text"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-600">100%</span>
                    </div>
                  </div>
                </div>

                {/* Saved Colors */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Saved colors:</span>
                    <button className="text-sm text-indigo-600 hover:text-indigo-700">+ Add</button>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {predefinedColors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => selectPredefinedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${
                          selectedColor === color ? 'border-gray-400 ring-2 ring-indigo-500' : 'border-gray-200'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-[45vh] -left-3 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10`}
      >
        {isExpanded ? (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        )}
      </button>


    </div>
  );
};

export default MiniSidebar;