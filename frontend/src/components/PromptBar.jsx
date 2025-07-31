import React from 'react';
import { Paperclip, Upload, ArrowRight, Download, MonitorSmartphone } from 'lucide-react';

const PromptBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="flex justify-center px-4">
        <div className="flex items-center gap-4 w-full max-w-3xl backdrop-blur-sm">
          {/* Input Section */}
          <div className="flex items-center bg-white/80 rounded-full px-4 py-2 w-full shadow-sm">
            <input
              type="text"
              placeholder="Enter your custom prompt………"
              className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-500 text-sm"
            />
            <div className="flex items-center gap-2 pl-2">
              <Paperclip className="w-4 h-4 text-gray-700" />
              <Upload className="w-4 h-4 text-gray-700" />
            </div>
          </div>

          {/* Send Button */}
          <button className="w-10 h-10 rounded-full bg-[#9B6BFF] flex items-center justify-center shadow-sm hover:opacity-90 transition">
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          {/* Download Button */}
          <button className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm hover:bg-white transition">
            <Download className="w-4 h-4 text-black" />
          </button>

          {/* Device Button */}
          <button className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-sm hover:bg-white transition">
            <MonitorSmartphone className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptBar;
