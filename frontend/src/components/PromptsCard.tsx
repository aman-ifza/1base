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
    <div className="fixed bottom-6 right-6 w-80 bg-card border border-purple-200 z-50">
      <h3 className="font-semibold text-lg mb-2 text-primary">Suggested Prompts</h3>
      <ul className="mb-2 space-y-1">
        {prompts.map((prompt, idx) => (
          <li key={idx} className="text-sm text-gray-700 bg-purple-50 rounded px-2 py-1">{prompt}</li>
        ))}
      </ul>
      {showInput ? (
        <div className="flex gap-2 mt-2">
          <input
            className="flex-1 border rounded px-2 py-1 text-sm border-purple-300 focus:border-primary-dark focus:ring-1 focus:ring-primary"
            value={customPrompt}
            onChange={e => setCustomPrompt(e.target.value)}
            placeholder="Type your prompt..."
            autoFocus
          />
          <button
            className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary-dark"
            onClick={handleAddPrompt}
          >
            Add
          </button>
        </div>
      ) : (
        <button
          className="text-primary text-sm underline mt-2"
          onClick={() => setShowInput(true)}
        >
          Add your own prompt
        </button>
      )}
    </div>
  );
} 