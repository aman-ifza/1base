import React, { useState } from 'react';

const DrawingMiniSidebar = ({ onToolSelect }) => {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    { id: 'image', icon: '🖼️', label: 'Image Tool' },
    { id: 'dropper', icon: '👆', label: 'Color Picker' },
    { id: 'pen', icon: '✏️', label: 'Pen Tool' },
    { id: 'pin', icon: '📍', label: 'Pin Tool' },
    { id: 'circle', icon: '⭕', label: 'Circle Tool' },
    { id: 'rectangle1', icon: '▯', label: 'Rectangle Tool 1' },
    { id: 'rectangle2', icon: '⬚', label: 'Rectangle Tool 2' },
    { id: 'arrowLeft', icon: '←', label: 'Arrow Left' },
    { id: 'arrowRight', icon: '→', label: 'Arrow Right' },
    { id: 'delete', icon: '🗑️', label: 'Delete' }
  ];

  const handleToolClick = (toolId) => {
    setSelectedTool(toolId);
    if (onToolSelect) {
      onToolSelect(toolId);
    }
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-2 space-y-4">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => handleToolClick(tool.id)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200
            ${selectedTool === tool.id 
              ? 'bg-indigo-100 text-indigo-600' 
              : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          title={tool.label}
        >
          <span className="text-xl">{tool.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default DrawingMiniSidebar;
