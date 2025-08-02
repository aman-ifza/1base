import React, { useRef, useEffect, useState } from 'react';
import { Palette, Eraser, RotateCcw, Download, Brush } from 'lucide-react';

const DrawCompare = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);

  const colors = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
    '#FFC0CB', '#A52A2A', '#808080', '#90EE90', '#FFB6C1'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 608; // 38rem in pixels
    canvas.height = 576; // 36rem in pixels
    
    // Set default drawing properties
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = brushSize;
    ctx.globalCompositeOperation = isEraser ? 'destination-out' : 'source-over';
    ctx.strokeStyle = isEraser ? 'rgba(0,0,0,1)' : currentColor;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const downloadCanvas = () => {
    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="flex gap-16">
        {/* Left: Interactive Drawing Canvas */}
        <div className="relative w-[38rem] h-[36rem] bg-[#750C1D] rounded-xl shadow-2xl overflow-hidden">
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full cursor-crosshair bg-white rounded-xl"
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
          
          {/* Drawing Controls Overlay */}
          <div className="absolute top-4 left-4 right-4 z-10">
            {/* Top Control Bar */}
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center justify-between gap-4">
                {/* Color Palette */}
                <div className="flex items-center gap-2">
                  <Palette size={16} className="text-gray-600" />
                  <div className="flex gap-1">
                    {colors.map((color) => (
                      <button
                        key={color}
                        className={`w-6 h-6 rounded-full border-2 hover:scale-110 transition-transform ${
                          currentColor === color ? 'border-gray-800' : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                          setCurrentColor(color);
                          setIsEraser(false);
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="flex items-center gap-2">
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      !isEraser ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => setIsEraser(false)}
                    title="Brush"
                  >
                    <Brush size={16} />
                  </button>
                  <button
                    className={`p-2 rounded-lg transition-colors ${
                      isEraser ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                    }`}
                    onClick={() => setIsEraser(true)}
                    title="Eraser"
                  >
                    <Eraser size={16} />
                  </button>
                  <button
                    className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    onClick={clearCanvas}
                    title="Clear Canvas"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                    onClick={downloadCanvas}
                    title="Download"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>

              {/* Brush Size Slider */}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-sm text-gray-600 min-w-0">Size:</span>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={brushSize}
                  onChange={(e) => setBrushSize(parseInt(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm text-gray-600 min-w-0 w-8 text-right">{brushSize}px</span>
              </div>
            </div>
          </div>

          {/* Canvas Label */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg">
            Your Drawing
          </div>
        </div>

        {/* Right: AI Output Box */}
        <div className="relative w-[38rem] h-[36rem] bg-[#750C1D] rounded-xl shadow-2xl">
          {/* Yellow rectangle */}
          <div className="absolute top-6 left-6 w-72 h-32 bg-yellow-400 shadow-sm" />

          {/* Blue ellipse (half visible) */}
          <div className="absolute top-32 left-6 w-72 h-36 bg-cyan-500 rounded-full" />

          {/* Green triangle */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[160px] border-t-green-500" />

          {/* Purple oval */}
          <div className="absolute top-32 right-8 w-40 h-28 bg-purple-300 rounded-full opacity-90" />

          {/* Darker blue hexagon with red border */}
          <div className="absolute bottom-16 left-16 w-64 h-64 bg-indigo-700 border-2 border-red-500 clip-hexagon shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default DrawCompare;
