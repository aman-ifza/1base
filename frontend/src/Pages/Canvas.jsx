import React, { useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import DrawingCanvas from '../components/DrawingCanvas';
import PaintToolsSidebar from '../components/PaintToolsSidebar';
import InputOutputToggle from '../components/InputOutput';
import PromptBar from '../components/PromptBar';

const Canvas = () => {
  const [selectedInputOutput, setSelectedInputOutput] = useState('Input');
  
  // Drawing states
  const [currentColor, setCurrentColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);
  const [isEraser, setIsEraser] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);

  const handleInputOutputToggle = (selection) => {
    setSelectedInputOutput(selection);
    console.log(`Switched to: ${selection}`);
  };

  const handlePromptSubmit = (promptText) => {
    console.log(`Prompt submitted: ${promptText}`);
    // Here you would typically send the prompt to your AI service
  };

  const handleClearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clearCanvas();
    }
  };

  const handleDownloadCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.downloadCanvas();
    }
  };

  return (
    <div className="h-screen flex relative overflow-hidden">
      {/* Left Sidebar */}
      <div className="flex-shrink-0 z-10 relative">
        <Sidebar />
      </div>
      
      {/* Input/Output Toggle */}
      <InputOutputToggle 
        selected={selectedInputOutput} 
        onChange={handleInputOutputToggle} 
      />
      
      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Canvas Container - Takes remaining space, accounting for prompt bar */}
        <div className="flex-1 flex items-center justify-center pb-24">
          <DrawingCanvas 
            ref={canvasRef}
            currentColor={currentColor}
            brushSize={brushSize}
            isEraser={isEraser}
            isDrawing={isDrawing}
            setIsDrawing={setIsDrawing}
          />
        </div>
      </div>
      
      {/* Right Paint Tools Sidebar */}
      <div className="flex-shrink-0 z-10">
        <PaintToolsSidebar 
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          brushSize={brushSize}
          setBrushSize={setBrushSize}
          isEraser={isEraser}
          setIsEraser={setIsEraser}
          onClearCanvas={handleClearCanvas}
          onDownloadCanvas={handleDownloadCanvas}
        />
      </div>
      
      {/* Bottom Prompt Bar - Fixed at bottom of page */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-40 bg-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <PromptBar onSubmit={handlePromptSubmit} />
        </div>
      </div>
      
      {/* Canvas Info */}
      <div className="fixed bottom-28 right-6 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg z-30">
        Mode: {selectedInputOutput}
      </div>
    </div>
  );
};

export default Canvas;
