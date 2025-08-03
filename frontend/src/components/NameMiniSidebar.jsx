import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NameMiniSidebar = ({ isDisabled = false, forceCollapsed = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [brandDescription, setBrandDescription] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [wordCount, setWordCount] = useState(50);
  const [resultCount, setResultCount] = useState(50);
  const [keywords, setKeywords] = useState('');

  // Use forced collapsed state if provided, otherwise use internal state
  const actuallyCollapsed = forceCollapsed || isCollapsed;

  return (
    <div className="fixed left-64 top-1/2 -translate-y-1/2 flex h-[80vh] z-10">
      <div
        className={`bg-white transition-all duration-300 ease-in-out overflow-hidden
        ${actuallyCollapsed ? 'w-0' : 'w-80'} 
        h-full rounded-tr-[34px] rounded-br-[34px] shadow-lg`}
      >
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent p-6">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">Brand Configuration</h2>
            
            {/* Industry Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Industry<span className="text-red-500">*</span>
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="" className="text-black">Select industry</option>
                <option value="technology" className="text-black">Technology</option>
                <option value="healthcare" className="text-black">Healthcare</option>
                <option value="finance" className="text-black">Finance</option>
                <option value="retail" className="text-black">Retail</option>
              </select>
            </div>

            {/* Brand Description */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Brand Description<span className="text-red-500">*</span>
              </label>
              <textarea
                value={brandDescription}
                onChange={(e) => setBrandDescription(e.target.value)}
                placeholder="Describe your brand personality, values, and target audience..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 h-24 resize-none text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Language Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Language</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="English" className="text-black">English</option>
                <option value="Spanish" className="text-black">Spanish</option>
                <option value="French" className="text-black">French</option>
                <option value="German" className="text-black">German</option>
              </select>
            </div>

            {/* Word Count Range */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Number of Words</label>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Short</span>
                <span>Medium</span>
                <span>Large</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={wordCount}
                onChange={(e) => setWordCount(parseInt(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            {/* Results Count Range */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Number of Results</label>
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={resultCount}
                onChange={(e) => setResultCount(parseInt(e.target.value))}
                className="w-full accent-indigo-600"
              />
            </div>

            {/* Keywords */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Keywords to include</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="Trust, Fast"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-black bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="relative">
        <button
          onClick={() => !isDisabled && setIsCollapsed(!isCollapsed)}
          disabled={isDisabled}
          className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300
            w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-lg border border-gray-200
            ${actuallyCollapsed ? 'left-3' : '-right-5'}
            ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {actuallyCollapsed ? (
            <ChevronRight className="w-5 h-5 text-gray-600" />
          ) : (
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NameMiniSidebar;
