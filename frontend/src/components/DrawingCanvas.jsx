import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react';

const DrawingCanvas = forwardRef(({ 
  currentColor, 
  brushSize, 
  isEraser, 
  isDrawing, 
  setIsDrawing 
}, ref) => {
  const canvasRef = useRef(null);

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

  // Expose canvas methods to parent
  useImperativeHandle(ref, () => ({
    clearCanvas,
    downloadCanvas
  }));

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
});

DrawingCanvas.displayName = 'DrawingCanvas';

export default DrawingCanvas;
