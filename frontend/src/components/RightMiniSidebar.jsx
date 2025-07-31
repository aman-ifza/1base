import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Smartphone, Tablet } from 'lucide-react';

const RightMiniSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const [selectedDimension, setSelectedDimension] = useState('Desktop');

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    setExpandedDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setExpandedDropdown(expandedDropdown === dropdown ? null : dropdown);
  };

  const models = [
    'GPT-4 Turbo', 'GPT-4', 'GPT-3.5 Turbo', 'Claude 3 Opus', 'Claude 3 Sonnet',
    'Claude 3 Haiku', 'Gemini Pro', 'Llama 2 70B', 'Mistral Large'
  ];

  const promptEnhancements = [
    'Creative Writing', 'Technical Documentation', 'Code Generation', 'Data Analysis',
    'Marketing Copy', 'Academic Writing', 'Business Proposals', 'Email Templates',
    'Social Media Content', 'SEO Optimization'
  ];

  const templates = [
    {
      name: 'Landing Page',
      preview: (
        <div className="w-12 h-8 border border-gray-300 rounded bg-white relative">
          <div className="h-2 bg-blue-400 rounded-t"></div>
          <div className="p-1 space-y-0.5">
            <div className="h-0.5 bg-gray-300 rounded"></div>
            <div className="h-0.5 bg-gray-300 rounded w-3/4"></div>
            <div className="h-1 bg-blue-300 rounded w-1/2"></div>
          </div>
        </div>
      )
    },
    {
      name: 'Dashboard',
      preview: (
        <div className="w-12 h-8 border border-gray-300 rounded bg-white relative">
          <div className="h-1.5 bg-gray-600 rounded-t"></div>
          <div className="flex p-0.5 space-x-0.5">
            <div className="w-2 h-4 bg-blue-200 rounded"></div>
            <div className="flex-1 space-y-0.5">
              <div className="h-0.5 bg-gray-300 rounded"></div>
              <div className="h-0.5 bg-gray-300 rounded"></div>
              <div className="h-1 bg-green-300 rounded"></div>
            </div>
          </div>
        </div>
      )
    },
    {
      name: 'E-commerce',
      preview: (
        <div className="w-12 h-8 border border-gray-300 rounded bg-white relative">
          <div className="h-1.5 bg-red-400 rounded-t"></div>
          <div className="p-0.5 grid grid-cols-2 gap-0.5">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="h-1 bg-yellow-300 rounded col-span-2"></div>
          </div>
        </div>
      )
    },
    {
      name: 'Blog',
      preview: (
        <div className="w-12 h-8 border border-gray-300 rounded bg-white relative">
          <div className="h-1.5 bg-green-500 rounded-t"></div>
          <div className="p-0.5 space-y-0.5">
            <div className="h-0.5 bg-gray-400 rounded w-2/3"></div>
            <div className="h-0.5 bg-gray-300 rounded"></div>
            <div className="h-0.5 bg-gray-300 rounded w-3/4"></div>
            <div className="h-0.5 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      )
    },
    {
      name: 'Portfolio',
      preview: (
        <div className="w-12 h-8 border border-gray-300 rounded bg-white relative">
          <div className="h-1.5 bg-purple-400 rounded-t"></div>
          <div className="p-0.5">
            <div className="grid grid-cols-3 gap-0.5 mb-0.5">
              <div className="h-1 bg-gray-200 rounded"></div>
              <div className="h-1 bg-gray-200 rounded"></div>
              <div className="h-1 bg-gray-200 rounded"></div>
            </div>
            <div className="h-0.5 bg-gray-300 rounded"></div>
          </div>
        </div>
      )
    },
    {
      name: 'Documentation',
      preview: (
        <div className="w-12 h-8 border border-gray-300 rounded bg-white relative">
          <div className="flex">
            <div className="w-3 bg-gray-100 rounded-l border-r"></div>
            <div className="flex-1 p-0.5 space-y-0.5">
              <div className="h-0.5 bg-blue-400 rounded w-2/3"></div>
              <div className="h-0.5 bg-gray-300 rounded"></div>
              <div className="h-0.5 bg-gray-300 rounded w-3/4"></div>
              <div className="h-0.5 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const dimensions = [
    { name: 'Mobile', icon: <Smartphone className="w-6 h-6" />, size: '375x812' },
    { name: 'Desktop', icon: <Monitor className="w-6 h-6" />, size: '1920x1080' },
    { name: 'Tablet', icon: <Tablet className="w-6 h-6" />, size: '768x1024' }
  ];

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center z-50">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="bg-white border border-gray-200 rounded-l-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
      >
        {isExpanded ? (
          <ChevronRight className="w-4 h-4 text-gray-600" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        )}
      </button>

      {/* Mini Sidebar */}
      <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-0'} overflow-hidden`}>
        <div
          className="w-64 max-h-[90vh] bg-white border-l border-gray-200 flex flex-col overflow-hidden"
          style={{ borderTopLeftRadius: '34px', borderBottomLeftRadius: '34px' }}
        >
          {/* Header */}
          <div className="p-4">
            <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            {/* Model Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('model')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full transition-colors duration-200"
              >
                Model
              </button>
              {expandedDropdown === 'model' && (
                <div className="mt-2 bg-gray-50 rounded-lg border border-gray-200 max-h-40 overflow-y-auto">
                  {models.map((model, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-3 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 text-sm"
                    >
                      {model}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Prompt Enhancement */}
            <div>
              <button
                onClick={() => toggleDropdown('prompt')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full transition-colors duration-200"
              >
                Prompt Enhance
              </button>
              {expandedDropdown === 'prompt' && (
                <div className="mt-2 bg-gray-50 rounded-lg border border-gray-200 max-h-40 overflow-y-auto">
                  {promptEnhancements.map((enhancement, index) => (
                    <button
                      key={index}
                      className="w-full text-left px-3 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 text-sm"
                    >
                      {enhancement}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Templates */}
            <div>
              <button
                onClick={() => toggleDropdown('templates')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full transition-colors duration-200"
              >
                Templates
              </button>
              {expandedDropdown === 'templates' && (
                <div className="mt-2 bg-gray-50 rounded-lg border border-gray-200 max-h-48 overflow-y-auto">
                  {templates.map((template, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center space-x-3 px-3 py-3 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 text-sm border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex-shrink-0">{template.preview}</div>
                      <span className="text-left">{template.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dimensions */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dimensions</h3>
              <div className="grid grid-cols-3 gap-3">
                {dimensions.map((dimension) => (
                  <button
                    key={dimension.name}
                    onClick={() => setSelectedDimension(dimension.name)}
                    className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedDimension === dimension.name
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 hover:border-gray-400 text-gray-600'
                    }`}
                  >
                    <div className="mb-2">{dimension.icon}</div>
                    <span className="text-xs font-medium">{dimension.name}</span>
                    <span className="text-xs text-gray-500 mt-1">{dimension.size}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightMiniSidebar;
