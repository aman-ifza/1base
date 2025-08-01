import React from 'react';

const InputOutputToggle = ({ selected, onChange }) => {
  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-indigo-700 rounded-full p-1 w-64 h-10 z-50">
      <button
        onClick={() => onChange('Input')}
        className={`flex-1 rounded-full text-sm font-medium transition-all duration-300 w-1/2 h-full ${
          selected === 'Input'
            ? 'bg-white text-black shadow'
            : 'bg-transparent text-white'
        }`}
      >
        Input
      </button>
      <button
        onClick={() => onChange('Output')}
        className={`flex-1 rounded-full text-sm font-medium transition-all duration-300 w-1/2 h-full ${
          selected === 'Output'
            ? 'bg-white text-black shadow'
            : 'bg-transparent text-white'
        }`}
      >
        Output
      </button>
    </div>
  );
};

export default InputOutputToggle;
