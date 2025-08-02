import React from 'react';
import { Paperclip, Upload, ArrowRight } from 'lucide-react';

const PromptBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center gap-3">
        {/* Input Section */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Enter your custom prompt..."
            className="w-full bg-white/95 backdrop-blur-sm rounded-full px-6 py-4 pr-20 text-gray-800 placeholder-gray-500 text-base border border-gray-200/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/30"
          />
          {/* Icons inside input */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <Paperclip className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
              <Upload className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Send Button */}
        <button className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center shadow-lg transition-colors">
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default PromptBar;
