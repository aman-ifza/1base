import React from 'react';

const DrawCompare = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="flex gap-16">
        {/* Left: User Input Box */}
        <div className="relative w-[38rem] h-[36rem] bg-[#750C1D] rounded-xl shadow-2xl">
          {/* Yellow rectangle */}
          <div className="absolute top-6 left-6 w-72 h-32 bg-yellow-400" />

          {/* Blue ellipse (half visible) */}
          <div className="absolute top-32 left-6 w-72 h-36 bg-cyan-400 rounded-full" />

          {/* Green triangle */}
          <div className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[160px] border-t-green-500" />

          {/* Purple oval */}
          <div className="absolute top-32 right-8 w-40 h-28 bg-purple-200 rounded-full opacity-90" />

          {/* Blue hexagon with red border */}
          <div className="absolute bottom-16 left-16 w-64 h-64 bg-indigo-600 border-2 border-red-500 clip-hexagon" />
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
