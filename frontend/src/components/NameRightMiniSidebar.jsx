import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NameRightMiniSidebar = ({ isDisabled = false, forceCollapsed = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [style, setStyle] = useState('Professional');
  const [useAcronyms, setUseAcronyms] = useState(false);
  const [includeTrademark, setIncludeTrademark] = useState(false);
  const [needsScreening, setNeedsScreening] = useState(false);
  const [creativityLevel, setCreativityLevel] = useState(50);

  // Use forced collapsed state if provided, otherwise use internal state
  const actuallyCollapsed = forceCollapsed || isCollapsed;

  return (
    <div className="relative isolate">
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex h-[60vh] z-10">
        <div className="relative">
          <button
            onClick={() => !isDisabled && setIsCollapsed(!isCollapsed)}
            disabled={isDisabled}
            className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300
              w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-lg border border-gray-200 z-20
              ${actuallyCollapsed ? 'right-3' : '-left-5'}
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {actuallyCollapsed ? (
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        <div
          className={`bg-white transition-all duration-300 ease-in-out overflow-hidden
          ${actuallyCollapsed ? 'w-0' : 'w-80'} 
          h-full rounded-tl-[34px] rounded-bl-[34px] shadow-lg`}
        >
          <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent p-4">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Name Settings</h2>
              
              {/* Style Selection */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Style</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-black bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="Professional" className="text-black">Professional</option>
                  <option value="Creative" className="text-black">Creative</option>
                  <option value="Modern" className="text-black">Modern</option>
                  <option value="Traditional" className="text-black">Traditional</option>
                </select>
              </div>

              {/* Toggle Switches */}
              <div className="space-y-4">
                {/* Acronyms Toggle */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Acronyms</label>
                  <button
                    onClick={() => setUseAcronyms(!useAcronyms)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none
                      ${useAcronyms ? 'bg-indigo-600' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                      ${useAcronyms ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </button>
                </div>

                {/* Trademark Toggle */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Trademark</label>
                  <button
                    onClick={() => setIncludeTrademark(!includeTrademark)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none
                      ${includeTrademark ? 'bg-indigo-600' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                      ${includeTrademark ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </button>
                </div>

                {/* Screening Toggle */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Screening</label>
                  <button
                    onClick={() => setNeedsScreening(!needsScreening)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none
                      ${needsScreening ? 'bg-indigo-600' : 'bg-gray-200'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                      ${needsScreening ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </button>
                </div>
              </div>

              {/* Creativity Level Slider */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Creativity Level</label>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Conservative</span>
                  <span>Creativity</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={creativityLevel}
                  onChange={(e) => setCreativityLevel(parseInt(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameRightMiniSidebar;
