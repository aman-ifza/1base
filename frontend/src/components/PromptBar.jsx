import React, { useState } from 'react';
import { Paperclip, Upload, ArrowRight } from 'lucide-react';

const PromptBar = ({ onSubmit }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() && onSubmit) {
      onSubmit(prompt);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        {/* Input Section */}
        <div className="flex-1 relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your custom prompt..."
            className="w-full bg-white/95 backdrop-blur-sm rounded-full px-6 py-4 pr-20 text-gray-800 placeholder-gray-500 text-base border border-gray-200/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/30"
          />
          {/* Icons inside input */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <Paperclip className="w-4 h-4 text-gray-600" />
            </button>
            <button type="button" className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <Upload className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Send Button */}
        <button 
          type="submit"
          className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!prompt.trim()}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </form>
    </div>
  );
};

export default PromptBar;
