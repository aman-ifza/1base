import React from 'react';
import { Paperclip, Upload, ArrowRight, Download, MonitorSmartphone } from 'lucide-react';

const PromptBar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex justify-center px-4">
        <div className="flex items-center gap-5 w-full max-w-5xl backdrop-blur-sm">
          {/* Input Section */}
          <div className="flex items-center bg-white/90 rounded-full px-6 py-3 w-full shadow-sm">
            <input
              type="text"
              placeholder="Enter your custom prompt………"
              className="flex-grow bg-transparent outline-none text-gray-800 placeholder-gray-500 text-base"
            />
            <div className="flex items-center gap-3 pl-3">
              <Paperclip className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
              <Upload className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />
            </div>
          </div>

          {/* Send Button */}
          <button className="w-12 h-12 rounded-full bg-[#9B6BFF] flex items-center justify-center shadow-sm hover:opacity-90 transition">
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          {/* Download Button */}
          <button className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-white transition">
            <Download className="w-5 h-5 text-black" />
          </button>

          {/* Device Button */}
          <button className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-white transition">
            <MonitorSmartphone className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptBar;
