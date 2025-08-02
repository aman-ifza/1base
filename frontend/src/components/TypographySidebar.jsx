import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bold, Italic, AlignLeft, AlignCenter, AlignRight, List, Type } from 'lucide-react';

const TypographySidebar = ({ 
  isCollapsed: externalCollapsed,
  onToggle = () => {},
  onFontChange = () => {},
  onStyleChange = () => {},
  selectedFont = "Arial",
  selectedStyles = { bold: false, italic: false, underline: false }
}) => {
  const [isCollapsed, setIsCollapsed] = useState(externalCollapsed ?? true);
  const [selectedColor, setSelectedColor] = useState('#4F46E5');
  const [selectedAlignment, setSelectedAlignment] = useState('left');
  const [opacity, setOpacity] = useState(100);

  const fonts = [
    'Arial',
    'Helvetica',
    'Times New Roman',
    'Georgia',
    'Verdana',
    'Trebuchet MS',
    'Impact',
    'Comic Sans MS',
    'Courier New',
    'Lucida Console',
    'Fira Code',
    'Work Sans',
    'Inter',
    'Roboto',
    'Open Sans'
  ];

  const predefinedColors = [
    '#EF4444', '#F97316', '#F59E0B', '#EAB308', '#84CC16',
    '#22C55E', '#10B981', '#14B8A6', '#06B6D4', '#0EA5E9',
    '#3B82F6', '#6366F1', '#8B5CF6', '#A855F7', '#D946EF',
    '#EC4899', '#F43F5E'
  ];

  const handleColorChange = (color) => {
    setSelectedColor(color);
    onStyleChange('color', color);
  };

  const handleAlignmentChange = (alignment) => {
    setSelectedAlignment(alignment);
    onStyleChange('alignment', alignment);
  };

  const handleStyleToggle = (style) => {
    const newStyles = {
      ...selectedStyles,
      [style]: !selectedStyles[style]
    };
    onStyleChange('styles', newStyles);
  };

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
    onToggle();
  };

  const handleColorPickerClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;
    
    // Calculate hue from x position (0-360)
    const hue = (x / width) * 360;
    
    // Calculate saturation and lightness from y position
    const saturation = 100 - (y / height) * 100;
    const lightness = 50;
    
    // Convert HSL to hex
    const hslToHex = (h, s, l) => {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    };
    
    const newColor = hslToHex(hue, saturation, lightness);
    handleColorChange(newColor);
  };

  return (
    <div className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${
      isCollapsed ? 'translate-x-0' : 'translate-x-0'
    }`}>
      <div className={`bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-l-2xl shadow-xl transition-all duration-300 ${
        isCollapsed ? 'w-12' : 'w-80'
      }`}>
        
        {/* Toggle Button */}
        <button
          onClick={handleToggle}
          className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
        >
          {isCollapsed ? (
            <ChevronLeft size={16} className="text-gray-600" />
          ) : (
            <ChevronRight size={16} className="text-gray-600" />
          )}
        </button>

        {/* Expanded State */}
        {!isCollapsed && (
          <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
              <Type size={20} className="text-gray-700" />
              <h3 className="font-semibold text-gray-800">Typography Settings</h3>
            </div>

            {/* Font Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Select Font
              </label>
              <select
                value={selectedFont}
                onChange={(e) => onFontChange(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
              >
                {fonts.map((font) => (
                  <option key={font} value={font} style={{ fontFamily: font }}>
                    {font}
                  </option>
                ))}
              </select>
            </div>

            {/* Text Formatting */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Text Format
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleStyleToggle('bold')}
                  className={`p-2 rounded-lg border transition-colors ${
                    selectedStyles.bold
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Bold size={16} />
                </button>
                <button
                  onClick={() => handleStyleToggle('italic')}
                  className={`p-2 rounded-lg border transition-colors ${
                    selectedStyles.italic
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Italic size={16} />
                </button>
                <button
                  onClick={() => handleStyleToggle('underline')}
                  className={`p-2 rounded-lg border transition-colors ${
                    selectedStyles.underline
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold underline text-sm">U</span>
                </button>
              </div>
            </div>

            {/* Text Alignment */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Alignment
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAlignmentChange('left')}
                  className={`p-2 rounded-lg border transition-colors ${
                    selectedAlignment === 'left'
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <AlignLeft size={16} />
                </button>
                <button
                  onClick={() => handleAlignmentChange('center')}
                  className={`p-2 rounded-lg border transition-colors ${
                    selectedAlignment === 'center'
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <AlignCenter size={16} />
                </button>
                <button
                  onClick={() => handleAlignmentChange('right')}
                  className={`p-2 rounded-lg border transition-colors ${
                    selectedAlignment === 'right'
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <AlignRight size={16} />
                </button>
                <button
                  onClick={() => handleAlignmentChange('justify')}
                  className={`p-2 rounded-lg border transition-colors ${
                    selectedAlignment === 'justify'
                      ? 'bg-indigo-100 border-indigo-300 text-indigo-700'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>

            {/* Color Picker */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                Text Color
              </label>
              
              {/* Gradient Color Picker */}
              <div className="space-y-3">
                <div 
                  className="h-20 w-full rounded-lg bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 relative overflow-hidden cursor-crosshair"
                  onClick={handleColorPickerClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                  {/* Color picker indicator */}
                  <div 
                    className="absolute w-3 h-3 border-2 border-white rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{ 
                      left: '50%', 
                      top: '50%',
                      backgroundColor: selectedColor 
                    }}
                  ></div>
                </div>
                
                {/* Color Input */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">Hex</span>
                  <input
                    type="text"
                    value={selectedColor}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="#000000"
                  />
                  <span className="text-xs text-gray-500">100%</span>
                </div>
              </div>

              {/* Predefined Colors */}
              <div className="space-y-2">
                <span className="text-xs text-gray-500">Saved colors:</span>
                <div className="grid grid-cols-8 gap-1">
                  {predefinedColors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => handleColorChange(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-gray-800 scale-110'
                          : 'border-gray-300 hover:scale-105'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Add Color Button */}
            <button 
              className="w-full py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => {
                // Add current color to predefined colors if not already there
                if (!predefinedColors.includes(selectedColor)) {
                  // In a real app, you'd update the predefined colors state
                  console.log('Adding color:', selectedColor);
                }
              }}
            >
              + Add
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default TypographySidebar;
