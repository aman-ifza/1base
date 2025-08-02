import React, { useState } from 'react';
import { ChevronDown, Search, Menu } from 'lucide-react';

const TemplateSettings = ({ 
  searchQuery = '',
  onSearchChange,
  selectedStyle = 'All',
  onStyleChange,
  selectedTheme = 'All',
  onThemeChange,
  selectedCloud = 'All',
  onCloudChange
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const styleOptions = [
    'All', 'Modern', 'Classic', 'Minimalist', 'Bold',
    'Elegant', 'Creative', 'Professional', 'Casual', 'Abstract', 'Geometric', 'Gaming'
  ];

  const themeOptions = [
    'All', 'Tech', 'Business', 'Entertainment', 'Design', 'Data',
    'Healthcare', 'Finance', 'Education', 'Retail', 'Security', 'Environment', 'Science'
  ];

  const cloudOptions = [
    'All', 'Featured', 'Popular', 'Recent', 'Premium'
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const selectOption = (option, type) => {
    if (type === 'style') {
      onStyleChange && onStyleChange(option);
    } else if (type === 'theme') {
      onThemeChange && onThemeChange(option);
    } else if (type === 'cloud') {
      onCloudChange && onCloudChange(option);
    }
    setActiveDropdown(null);
  };

  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-center gap-4 flex-wrap">

        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 min-w-[300px] bg-white">
            <Search className="w-4 h-4 text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search for templates"
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              className="flex-1 outline-none bg-transparent text-gray-800 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Style Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('style')}
            className="flex items-center border border-gray-300 rounded-full px-6 py-2 min-w-[120px] bg-white hover:bg-gray-50 transition-colors text-gray-800"
          >
            <span className="mr-2">Style</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>

          {activeDropdown === 'style' && (
            <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px]">
              {styleOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption(option, 'style')}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                    selectedStyle === option ? 'bg-blue-50 text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Theme Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('theme')}
            className="flex items-center border border-gray-300 rounded-full px-6 py-2 min-w-[120px] bg-white hover:bg-gray-50 transition-colors text-gray-800"
          >
            <span className="mr-2">Theme</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>

          {activeDropdown === 'theme' && (
            <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px]">
              {themeOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption(option, 'theme')}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                    selectedTheme === option ? 'bg-blue-50 text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Cloud Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown('cloud')}
            className="flex items-center border border-gray-300 rounded-full px-6 py-2 min-w-[120px] bg-white hover:bg-gray-50 transition-colors text-gray-800"
          >
            <span className="mr-2">Cloud</span>
            <ChevronDown className="w-4 h-4 text-gray-600" />
          </button>

          {activeDropdown === 'cloud' && (
            <div className="absolute top-full mt-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[160px]">
              {cloudOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => selectOption(option, 'cloud')}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                    selectedCloud === option ? 'bg-blue-50 text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TemplateSettings;
