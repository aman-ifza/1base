import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const ToneLeftMiniSidebar = ({ isMainSidebarCollapsed = false }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [brandArchetype, setBrandArchetype] = useState('The Hero');
  const [coreBrandTone, setCoreBrandTone] = useState('Dynamic');
  const [energyLevel, setEnergyLevel] = useState(50);
  const [formalityLevel, setFormalityLevel] = useState(30);
  const [brandColors, setBrandColors] = useState({
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#F59E0B'
  });

  const archetypes = [
    'The Hero',
    'The Innocent',
    'The Sage',
    'The Rebel',
    'The Explorer',
    'The Creator',
    'The Ruler',
    'The Magician',
    'The Lover',
    'The Caregiver',
    'The Jester',
    'The Everyman'
  ];

  const toneOptions = [
    'Dynamic',
    'Approachable',
    'Premium',
    'Professional',
    'Friendly',
    'Authoritative',
    'Innovative',
    'Trustworthy'
  ];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex">
      {/* Tone Left Mini Sidebar */}
      <div className={`relative transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-0'} overflow-hidden`}>
        {isExpanded && (
          <div className="w-64 h-[calc(80vh)] mt-[10vh] bg-white border-r border-gray-200 flex flex-col" style={{ borderTopRightRadius: '34px', borderBottomRightRadius: '34px' }}>
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Brand Identity</h3>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {/* Brand Archetype */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brand Archetype
                </label>
                <div className="relative">
                  <select
                    value={brandArchetype}
                    onChange={(e) => setBrandArchetype(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900"
                  >
                    {archetypes.map((archetype) => (
                      <option key={archetype} value={archetype}>
                        {archetype}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Core Brand Tone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Core Brand Tone
                </label>
                <div className="relative">
                  <select
                    value={coreBrandTone}
                    onChange={(e) => setCoreBrandTone(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-900"
                  >
                    {toneOptions.map((tone) => (
                      <option key={tone} value={tone}>
                        {tone}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Energy Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Energy Level
                </label>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Calm</span>
                    <span className="font-medium">{energyLevel}%</span>
                    <span>Energetic</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={energyLevel}
                    onChange={(e) => setEnergyLevel(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #E5E7EB 0%, #E5E7EB ${energyLevel}%, #3B82F6 ${energyLevel}%, #3B82F6 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Formality Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Formality Level
                </label>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Casual</span>
                    <span className="font-medium">{formalityLevel}%</span>
                    <span>Formal</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={formalityLevel}
                    onChange={(e) => setFormalityLevel(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #E5E7EB 0%, #E5E7EB ${formalityLevel}%, #3B82F6 ${formalityLevel}%, #3B82F6 100%)`
                    }}
                  />
                </div>
              </div>

              {/* Brand Colors */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Brand Colors
                </label>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <label className="text-sm text-gray-600 w-20">Primary</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={brandColors.primary}
                        onChange={(e) => setBrandColors({...brandColors, primary: e.target.value})}
                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm font-mono text-gray-700">{brandColors.primary}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-sm text-gray-600 w-20">Secondary</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={brandColors.secondary}
                        onChange={(e) => setBrandColors({...brandColors, secondary: e.target.value})}
                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm font-mono text-gray-700">{brandColors.secondary}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-sm text-gray-600 w-20">Accent</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={brandColors.accent}
                        onChange={(e) => setBrandColors({...brandColors, accent: e.target.value})}
                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                      />
                      <span className="text-sm font-mono text-gray-700">{brandColors.accent}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Apply Changes
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-[45vh] -right-3 bg-white border border-gray-200 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10`}
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

export default ToneLeftMiniSidebar;
