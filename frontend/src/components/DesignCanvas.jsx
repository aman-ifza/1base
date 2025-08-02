import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Move, Type, RotateCw, Trash2, Copy, ZoomIn, ZoomOut } from 'lucide-react';

const DesignCanvas = () => {
  const [showGrid, setShowGrid] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [selectedTool, setSelectedTool] = useState('select');
  const [textElements, setTextElements] = useState([
    {
      id: 1,
      text: 'Hanover',
      x: 200,
      y: 180,
      fontSize: 48,
      fontWeight: 'bold',
      color: '#ffffff',
      isSelected: false
    },
    {
      id: 2,
      text: 'TECH AGENCY',
      x: 210,
      y: 240,
      fontSize: 16,
      fontWeight: 'normal',
      color: '#ffffff',
      letterSpacing: '0.2em',
      isSelected: false
    }
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isEditing, setIsEditing] = useState(null);
  const canvasRef = useRef(null);

  const tools = [
    { id: 'select', icon: Move, label: 'Select' },
    { id: 'text', icon: Type, label: 'Text' },
    { id: 'rotate', icon: RotateCw, label: 'Rotate' },
    { id: 'copy', icon: Copy, label: 'Copy' },
    { id: 'delete', icon: Trash2, label: 'Delete' }
  ];

  const handleCanvasClick = (e) => {
    if (selectedTool === 'text') {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const newTextElement = {
        id: Date.now(),
        text: 'New Text',
        x: x - 50,
        y: y - 10,
        fontSize: 24,
        fontWeight: 'normal',
        color: '#ffffff',
        isSelected: true
      };
      
      setTextElements(prev => [...prev.map(el => ({ ...el, isSelected: false })), newTextElement]);
    } else {
      // Deselect all elements when clicking on empty canvas
      setTextElements(prev => prev.map(el => ({ ...el, isSelected: false })));
    }
  };

  const handleTextElementClick = (e, elementId) => {
    e.stopPropagation();
    if (selectedTool === 'select') {
      setTextElements(prev => prev.map(el => ({
        ...el,
        isSelected: el.id === elementId
      })));
    }
  };

  const handleTextDoubleClick = (elementId) => {
    setIsEditing(elementId);
  };

  const handleTextChange = (elementId, newText) => {
    setTextElements(prev => prev.map(el => 
      el.id === elementId ? { ...el, text: newText } : el
    ));
  };

  const handleMouseDown = (e, elementId) => {
    if (selectedTool === 'select') {
      const rect = canvasRef.current.getBoundingClientRect();
      const element = textElements.find(el => el.id === elementId);
      setDragOffset({
        x: e.clientX - rect.left - element.x,
        y: e.clientY - rect.top - element.y
      });
      setIsDragging(elementId);
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging && selectedTool === 'select') {
      const rect = canvasRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left - dragOffset.x;
      const newY = e.clientY - rect.top - dragOffset.y;
      
      setTextElements(prev => prev.map(el => 
        el.id === isDragging ? { ...el, x: newX, y: newY } : el
      ));
    }
  }, [isDragging, selectedTool, dragOffset.x, dragOffset.y]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragOffset({ x: 0, y: 0 });
  }, []);

  const deleteSelectedElement = () => {
    const selectedElement = textElements.find(el => el.isSelected);
    if (selectedElement) {
      setTextElements(prev => prev.filter(el => el.id !== selectedElement.id));
    }
  };

  const copySelectedElement = () => {
    const selectedElement = textElements.find(el => el.isSelected);
    if (selectedElement) {
      const newElement = {
        ...selectedElement,
        id: Date.now(),
        x: selectedElement.x + 20,
        y: selectedElement.y + 20
      };
      setTextElements(prev => [...prev.map(el => ({ ...el, isSelected: false })), newElement]);
    }
  };

  const handleToolClick = (toolId) => {
    setSelectedTool(toolId);
    if (toolId === 'delete') {
      deleteSelectedElement();
    } else if (toolId === 'copy') {
      copySelectedElement();
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, dragOffset, handleMouseMove, handleMouseUp]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      
      {/* Toolbar */}
      <div className="mb-6 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 flex items-center gap-4">
        {/* Tools */}
        <div className="flex gap-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <button
                key={tool.id}
                onClick={() => handleToolClick(tool.id)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  selectedTool === tool.id 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow-sm'
                }`}
                title={tool.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoom(Math.max(25, zoom - 25))}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:shadow-sm"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-sm font-medium text-gray-700 min-w-[50px] text-center">
            {zoom}%
          </span>
          <button
            onClick={() => setZoom(Math.min(200, zoom + 25))}
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:shadow-sm"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>

        <div className="w-px h-8 bg-gray-300 mx-1"></div>

        {/* Grid Toggle */}
        <button
          onClick={() => setShowGrid(!showGrid)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            showGrid 
              ? 'bg-blue-500 text-white shadow-md' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:shadow-sm'
          }`}
        >
          Grid
        </button>
      </div>

      {/* Canvas Container - Centered */}
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        
        {/* Canvas */}
        <div
          ref={canvasRef}
          className={`relative bg-gradient-to-br from-blue-600 to-purple-700 ${
            selectedTool === 'text' ? 'cursor-crosshair' : 'cursor-default'
          }`}
          style={{
            width: `${800 * (zoom / 100)}px`,
            height: `${600 * (zoom / 100)}px`,
            minWidth: '800px',
            minHeight: '600px'
          }}
          onClick={handleCanvasClick}
        >
          
          {/* Grid Overlay */}
          {showGrid && (
            <div className="absolute inset-0 pointer-events-none">
              <svg
                width="100%"
                height="100%"
                className="opacity-20"
              >
                <defs>
                  <pattern
                    id="grid"
                    width={25 * (zoom / 100)}
                    height={25 * (zoom / 100)}
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d={`M ${25 * (zoom / 100)} 0 L 0 0 0 ${25 * (zoom / 100)}`}
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          )}

          {/* Logo Symbol */}
          <div className="absolute top-16 left-16">
            <div className="flex items-center justify-center w-16 h-16 border-4 border-white rounded-lg bg-transparent">
              <div className="flex gap-1">
                <div className="w-2 h-8 bg-white rounded-sm"></div>
                <div className="w-2 h-8 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Text Elements */}
          {textElements.map((element) => (
            <div
              key={element.id}
              className={`absolute select-none ${
                element.isSelected ? 'ring-2 ring-yellow-400 ring-opacity-60' : ''
              } ${selectedTool === 'select' ? 'cursor-move' : 'cursor-default'}`}
              style={{
                left: `${element.x * (zoom / 100)}px`,
                top: `${element.y * (zoom / 100)}px`,
                fontSize: `${element.fontSize * (zoom / 100)}px`,
                fontWeight: element.fontWeight,
                color: element.color,
                letterSpacing: element.letterSpacing || 'normal',
                transform: `scale(${zoom / 100})`,
                transformOrigin: 'top left'
              }}
              onClick={(e) => handleTextElementClick(e, element.id)}
              onDoubleClick={() => handleTextDoubleClick(element.id)}
              onMouseDown={(e) => handleMouseDown(e, element.id)}
            >
              {isEditing === element.id ? (
                <input
                  type="text"
                  value={element.text}
                  onChange={(e) => handleTextChange(element.id, e.target.value)}
                  onBlur={() => setIsEditing(null)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setIsEditing(null);
                    }
                  }}
                  className="bg-transparent border-none outline-none text-white"
                  style={{
                    fontSize: `${element.fontSize}px`,
                    fontWeight: element.fontWeight,
                    letterSpacing: element.letterSpacing || 'normal'
                  }}
                  autoFocus
                />
              ) : (
                <span>{element.text}</span>
              )}

              {/* Selection Handles */}
              {element.isSelected && (
                <>
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </>
              )}
            </div>
          ))}

          {/* Crosshair Cursor Effect */}
          {selectedTool === 'text' && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-6 h-6 border border-white border-opacity-50 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white bg-opacity-50 rounded-full"></div>
              </div>
            </div>
          )}
        </div>

        {/* Canvas Info */}
        <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg">
          800 × 600px
        </div>
      </div>

      {/* Property Panel for Selected Element */}
      {textElements.some(el => el.isSelected) && (
        <div className="mt-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 w-full max-w-lg">
          <h3 className="font-semibold text-gray-800 mb-4 text-lg">Text Properties</h3>
          {textElements.filter(el => el.isSelected).map(element => (
            <div key={element.id} className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Font Size
                </label>
                <input
                  type="range"
                  min="12"
                  max="72"
                  value={element.fontSize}
                  onChange={(e) => {
                    setTextElements(prev => prev.map(el => 
                      el.id === element.id ? { ...el, fontSize: parseInt(e.target.value) } : el
                    ));
                  }}
                  className="w-full"
                />
                <span className="text-xs text-gray-500">{element.fontSize}px</span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Font Weight
                </label>
                <select
                  value={element.fontWeight}
                  onChange={(e) => {
                    setTextElements(prev => prev.map(el => 
                      el.id === element.id ? { ...el, fontWeight: e.target.value } : el
                    ));
                  }}
                  className="w-full px-3 py-1 border border-gray-300 rounded text-sm"
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Bold</option>
                  <option value="lighter">Light</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  );
}

export default DesignCanvas;