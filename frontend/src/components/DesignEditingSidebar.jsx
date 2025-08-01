import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Trash2, Upload, Download } from 'lucide-react';

const DesignEditingSidebar = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [opacity, setOpacity] = useState(100);
  const [selectedLayer, setSelectedLayer] = useState(0);

  const layers = [
    { id: 0, name: 'Background', visible: true },
    { id: 1, name: 'Text Layer', visible: true },
    { id: 2, name: 'Image Layer', visible: false },
    { id: 3, name: 'Shape Layer', visible: true }
  ];

  const layouts = [
    { id: 1, name: 'Single Column' },
    { id: 2, name: 'Two Columns' },
    { id: 3, name: 'Three Columns' },
    { id: 4, name: 'Grid Layout' },
    { id: 5, name: 'Masonry' }
  ];

  const openPanel = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File uploaded:', file.name);
    }
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-l-2xl shadow-lg border border-gray-200 p-4 w-64 z-50">
      
      {/* Main Controls */}
      <div className="space-y-4">
        
        {/* Opacity Control */}
        <div className="relative">
          <button
            onClick={() => openPanel('opacity')}
            className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-6 h-6 mr-3 bg-black">
              <div className="w-full h-full" style={{
                backgroundImage: `repeating-conic-gradient(#000 0% 25%, transparent 0% 50%) 50% / 6px 6px`
              }}></div>
            </div>
            <span className="font-medium text-gray-800">Opacity</span>
          </button>
          

        </div>

        {/* Layer Control */}
        <div className="relative">
          <button
            onClick={() => openPanel('layer')}
            className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-6 h-6 mr-3 flex flex-col">
              <div className="flex-1 bg-gray-800 rounded-sm mb-1"></div>
              <div className="flex-1 bg-gray-600 rounded-sm mb-1"></div>
              <div className="flex-1 bg-gray-400 rounded-sm"></div>
            </div>
            <span className="font-medium text-gray-800">Layer</span>
          </button>
          

        </div>

        {/* Layout Control */}
        <div className="relative">
          <button
            onClick={() => openPanel('layout')}
            className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-6 h-6 mr-3 border-2 border-gray-800 rounded">
              <div className="w-full h-full grid grid-cols-2 gap-0.5 p-0.5">
                <div className="bg-gray-800 rounded-sm"></div>
                <div className="bg-gray-800 rounded-sm"></div>
                <div className="bg-gray-600 rounded-sm"></div>
                <div className="bg-gray-600 rounded-sm"></div>
              </div>
            </div>
            <span className="font-medium text-gray-800">Layout</span>
          </button>
          

        </div>

        {/* Duplicate Control */}
        <div className="relative">
          <button
            onClick={() => openPanel('duplicate')}
            className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="w-6 h-6 mr-3 relative">
              <div className="absolute inset-0 border-2 border-gray-400 rounded"></div>
              <div className="absolute top-1 left-1 right-0 bottom-0 border-2 border-gray-800 rounded bg-white"></div>
            </div>
            <span className="font-medium text-gray-800">Duplicate</span>
          </button>
          

        </div>

        {/* Upload Section */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="font-medium text-gray-800 mb-4">Upload</h3>
          
          <div className="relative mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="block w-full h-24 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-full h-full bg-gradient-to-r from-blue-100 via-purple-50 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-600">Image</span>
                    <Download className="w-4 h-4 text-gray-600 mx-auto mt-1" />
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group">
            <Trash2 className="w-5 h-5 text-red-500 group-hover:text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignEditingSidebar;