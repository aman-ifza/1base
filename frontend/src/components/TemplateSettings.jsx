import React, { useState } from 'react';
import { ChevronDown, Search, Menu } from 'lucide-react';

const TemplateSettings = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const styleOptions = [
    'Modern', 'Classic', 'Minimalist', 'Bold',
    'Elegant', 'Creative', 'Professional', 'Casual'
  ];

  const themeOptions = [
    'Light', 'Dark', 'Auto', 'High Contrast',
    'Sepia', 'Blue', 'Green', 'Purple'
  ];

  const colorOptions = [
    'Default', 'Red', 'Orange', 'Yellow',
    'Green', 'Blue', 'Indigo', 'Purple', 'Pink', 'Gray'
  ];

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const selectOption = (option, type) => {
    console.log(`Selected ${option} for ${type}`);
    setActiveDropdown(null);
  };

  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-center gap-4 flex-wrap">

        {/* Search Bar */}
        <div className="relative">
          <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 min-w-[300px] bg-transparent">
            <Menu className="w-4 h-4 text-gray-500 mr-3" />
            <input
              type="text"
              placeholder="Search for templates"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 outline-none bg-transparent text-gray-100 placeholder-gray-400"
            />
            <Search className="w-4 h-4 text-gray-500 ml-2" />
          </div>
        </div>

        {/* Dropdown Button Generator */}
        {[
          { label: 'Style', options: styleOptions },
          { label: 'Theme', options: themeOptions },
          { label: 'Colour', options: colorOptions }
        ].map(({ label, options }) => (
          <div className="relative" key={label}>
            <button
              onClick={() => toggleDropdown(label.toLowerCase())}
              className="flex items-center border border-gray-300 rounded-full px-6 py-2 min-w-[120px] bg-transparent hover:bg-gray-800/30 transition-colors text-gray-100"
            >
              <span className="mr-2">{label}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {activeDropdown === label.toLowerCase() && (
              <div className="absolute top-full mt-2 left-0 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-10 min-w-[160px]">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option, label.toLowerCase())}
                    className="w-full text-left px-4 py-2 hover:bg-gray-800 text-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {label === 'Colour' ? (
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          option === 'Red' ? 'bg-red-500' :
                          option === 'Orange' ? 'bg-orange-500' :
                          option === 'Yellow' ? 'bg-yellow-500' :
                          option === 'Green' ? 'bg-green-500' :
                          option === 'Blue' ? 'bg-blue-500' :
                          option === 'Indigo' ? 'bg-indigo-500' :
                          option === 'Purple' ? 'bg-purple-500' :
                          option === 'Pink' ? 'bg-pink-500' :
                          option === 'Gray' ? 'bg-gray-500' :
                          'bg-gray-300'
                        }`}></div>
                        {option}
                      </div>
                    ) : option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default TemplateSettings;
