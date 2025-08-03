import React from 'react';
import { Palette, Eraser, RotateCcw, Download, Brush } from 'lucide-react';

const PaintToolsSidebar = ({ 
  currentColor, 
  setCurrentColor, 
  brushSize, 
  setBrushSize, 
  isEraser, 
  setIsEraser, 
  onClearCanvas, 
  onDownloadCanvas 
}) => {
  const colors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
    '#FFC0CB', '#A52A2A', '#808080', '#90EE90', '#FFB6C1'
  ];

  return (
    <div className="w-80 h-full bg-white/95 backdrop-blur-sm border-l border-gray-200 flex flex-col shadow-xl">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Palette className="w-6 h-6 text-indigo-600" />
          Paint Tools
        </h2>
      </div>

      {/* Tools Content */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        
        {/* Drawing Tools */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Drawing Tools</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
                !isEraser 
                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                  : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
              }`}
              onClick={() => setIsEraser(false)}
            >
              <Brush size={20} />
              <span className="font-medium">Brush</span>
            </button>
            <button
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${
                isEraser 
                  ? 'border-red-500 bg-red-50 text-red-700' 
                  : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
              }`}
              onClick={() => setIsEraser(true)}
            >
              <Eraser size={20} />
              <span className="font-medium">Eraser</span>
            </button>
          </div>
        </div>

        {/* Color Palette */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Colors</h3>
          
          {/* Current Color Display */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div 
              className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm"
              style={{ backgroundColor: currentColor }}
            />
            <div>
              <p className="text-sm font-medium text-gray-700">Current Color</p>
              <p className="text-xs text-gray-500">{currentColor}</p>
            </div>
          </div>

          {/* Color Grid */}
          <div className="grid grid-cols-5 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                className={`w-12 h-12 rounded-lg border-2 hover:scale-110 transition-transform ${
                  currentColor === color ? 'border-gray-800 ring-2 ring-blue-500' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => {
                  setCurrentColor(color);
                  setIsEraser(false);
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Brush Size */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Brush Size</h3>
          
          {/* Size Preview */}
          <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
            <div 
              className="rounded-full bg-gray-800"
              style={{ 
                width: `${Math.max(brushSize, 4)}px`, 
                height: `${Math.max(brushSize, 4)}px` 
              }}
            />
          </div>

          {/* Size Slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>1px</span>
              <span className="font-medium">{brushSize}px</span>
              <span>50px</span>
            </div>
            <input
              type="range"
              min="1"
              max="50"
              value={brushSize}
              onChange={(e) => setBrushSize(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">Actions</h3>
          
          <button
            className="w-full flex items-center justify-center gap-2 p-3 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors border border-yellow-300"
            onClick={onClearCanvas}
          >
            <RotateCcw size={18} />
            <span className="font-medium">Clear Canvas</span>
          </button>
          
          <button
            className="w-full flex items-center justify-center gap-2 p-3 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors border border-green-300"
            onClick={onDownloadCanvas}
          >
            <Download size={18} />
            <span className="font-medium">Download Drawing</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaintToolsSidebar;
