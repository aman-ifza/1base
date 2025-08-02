import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DrawCompare from '../components/DrawCompare';
import DrawingMiniSidebar from '../components/DrawingMiniSidebar';
import InputOutputToggle from '../components/InputOutput';
import PromptBar from '../components/PromptBar';

const Canvas = () => {
  const [selectedInputOutput, setSelectedInputOutput] = useState('Input');
  const [selectedTool, setSelectedTool] = useState(null);

  const handleToolSelect = (toolId) => {
    setSelectedTool(toolId);
    console.log(`Selected tool: ${toolId}`);
  };

  const handleInputOutputToggle = (selection) => {
    setSelectedInputOutput(selection);
    console.log(`Switched to: ${selection}`);
  };

  const handlePromptSubmit = (promptText) => {
    console.log(`Prompt submitted: ${promptText}`);
    // Here you would typically send the prompt to your AI service
  };

  return (
    <div className="h-screen flex relative overflow-hidden">
      {/* Left Sidebar */}
      <div className="flex-shrink-0 z-10 relative">
        <Sidebar />
        
        {/* Drawing Tools Mini Sidebar - Positioned relative to sidebar */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-20">
          <DrawingMiniSidebar onToolSelect={handleToolSelect} />
        </div>
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
          <DrawCompare />
        </div>
      </div>
      
      {/* Bottom Prompt Bar - Fixed at bottom of page */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-40 bg-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <PromptBar onSubmit={handlePromptSubmit} />
        </div>
      </div>
      
      {/* Status Indicator */}
      {selectedTool && (
        <div className="fixed top-20 right-6 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg z-30">
          <p className="text-sm text-gray-700">
            Active Tool: <span className="font-semibold capitalize">{selectedTool}</span>
          </p>
        </div>
      )}
      
      {/* Canvas Info */}
      <div className="fixed bottom-28 right-6 bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg z-30">
        Mode: {selectedInputOutput}
      </div>
    </div>
  );
};

export default Canvas;
