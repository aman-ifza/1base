import { useState } from 'react';

const defaultPrompts = [
  'Generate a brand concept for a tech startup.',
  'Suggest a playful brand personality.',
  'What are some unique value propositions for my business?'
];

export default function PromptsCard() {
  const [showInput, setShowInput] = useState(false);
  const [customPrompt, setCustomPrompt] = useState('');
  const [prompts, setPrompts] = useState(defaultPrompts);

  const handleAddPrompt = () => {
    if (customPrompt.trim()) {
      setPrompts([...prompts, customPrompt]);
      setCustomPrompt('');
      setShowInput(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 w-96 max-w-full bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-6 border border-white/30 z-50 font-sans font-medium text-gray-900">
      <h3 className="font-semibold text-lg mb-3 text-primary">Suggested Prompts</h3>
      <ul className="mb-3 space-y-2">
        {prompts.map((prompt, idx) => (
          <li key={idx} className="text-base text-gray-800 bg-white/40 rounded-lg px-3 py-2 font-medium shadow-sm">{prompt}</li>
        ))}
      </ul>
      {showInput ? (
        <div className="flex gap-2 mt-2">
          <input
            className="flex-1 border border-purple-300 rounded-lg px-3 py-2 text-base bg-white/70 focus:border-primary-dark focus:ring-2 focus:ring-primary outline-none font-sans font-medium"
            value={customPrompt}
            onChange={e => setCustomPrompt(e.target.value)}
            placeholder="Type your prompt..."
            autoFocus
          />
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg text-base font-semibold hover:bg-primary-dark transition"
            onClick={handleAddPrompt}
          >
            Add
          </button>
        </div>
      ) : (
        <button
          className="text-primary text-base underline mt-2 font-semibold hover:text-primary-dark"
          onClick={() => setShowInput(true)}
        >
          Add your own prompt
        </button>
      )}
    </div>
  );
} 