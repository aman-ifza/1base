import { useState } from 'react';

export default function PromptsCard() {
  const [showInput, setShowInput] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [prompts, setPrompts] = useState([
    'Generate a brand concept for a tech startup.',
    'Suggest a playful brand personality.',
    'What are some unique value propositions?'
  ]);
  const [isMinimized, setIsMinimized] = useState(false);

  const handleAddPrompt = () => {
    if (customPrompt.trim()) {
      setPrompts([...prompts, customPrompt]);
      setCustomPrompt('');
      setShowInput(false);
    }
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-20 md:bottom-8 right-4 md:right-8 bg-white rounded-full w-12 h-12 shadow-lg flex items-center justify-center hover:bg-gray-50 transition z-50 text-[#3F27FA]"
      >
        <span className="text-xl">💡</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 w-72 bg-white shadow-lg rounded-xl p-4 z-50 font-sans">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-base text-[#3F27FA] flex items-center gap-2">
          <span className="text-xl">💡</span>
          Prompts
        </h3>
        <button 
          onClick={() => setIsMinimized(true)}
          className="text-gray-400 hover:text-gray-600 transition"
        >
          ▼
        </button>
      </div>
      
      <ul className="mb-2 space-y-2 max-h-32 overflow-y-auto">
        {prompts.map((prompt, idx) => (
          <li key={idx} className="text-sm text-gray-800 bg-gray-50 rounded-lg px-3 py-2">{prompt}</li>
        ))}
      </ul>
      
      {showInput ? (
        <div className="flex gap-2">
          <input
            className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm bg-white focus:border-[#3F27FA] focus:ring-1 focus:ring-[#3F27FA]/20 outline-none"
            value={customPrompt}
            onChange={e => setCustomPrompt(e.target.value)}
            placeholder="Type your prompt..."
            autoFocus
          />
          <button
            className="bg-[#3F27FA] text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-[#3F27FA]/90 transition"
            onClick={handleAddPrompt}
          >
            Add
          </button>
        </div>
      ) : (
        <button
          className="text-[#3F27FA] text-sm font-medium hover:text-[#3F27FA]/90"
          onClick={() => setShowInput(true)}
        >
          + Add prompt
        </button>
      )}
    </div>
  );
} 