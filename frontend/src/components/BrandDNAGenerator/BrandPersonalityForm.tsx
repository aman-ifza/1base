import { useState } from 'react';

interface BrandPersonalityFormProps {
  data: {
    traits: string[];
    tone: string;
    visualStyle: string;
    uniqueValue: string;
  };
  onUpdate: (data: Partial<BrandPersonalityFormProps['data']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const personalityTraits = [
  'Professional',
  'Friendly',
  'Innovative',
  'Trustworthy',
  'Playful',
  'Luxurious',
  'Modern',
  'Traditional',
  'Bold',
  'Minimalist',
  'Energetic',
  'Sophisticated',
  'Casual',
  'Authentic',
  'Tech-Savvy'
];

const toneOptions = [
  'Professional & Formal',
  'Friendly & Approachable',
  'Bold & Confident',
  'Casual & Relaxed',
  'Innovative & Forward-thinking',
  'Elegant & Sophisticated',
  'Playful & Fun',
  'Educational & Informative'
];

const visualStyleOptions = [
  'Modern Minimalist',
  'Bold & Dynamic',
  'Classic & Timeless',
  'Playful & Creative',
  'Luxurious & Premium',
  'Tech & Futuristic',
  'Organic & Natural',
  'Corporate & Professional'
];

export default function BrandPersonalityForm({
  data,
  onUpdate,
  onNext,
  onBack
}: BrandPersonalityFormProps) {
  const [errors, setErrors] = useState<Partial<Record<keyof BrandPersonalityFormProps['data'], string>>>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (data.traits.length === 0) {
      newErrors.traits = 'Please select at least one personality trait';
    }
    if (!data.tone) {
      newErrors.tone = 'Please select a brand tone';
    }
    if (!data.visualStyle) {
      newErrors.visualStyle = 'Please select a visual style';
    }
    if (!data.uniqueValue.trim()) {
      newErrors.uniqueValue = 'Please describe your unique value proposition';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onNext();
    }
  };

  const toggleTrait = (trait: string) => {
    const newTraits = data.traits.includes(trait)
      ? data.traits.filter(t => t !== trait)
      : [...data.traits, trait];
    onUpdate({ traits: newTraits });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Brand Personality Traits*
        </label>
        <p className="text-sm text-gray-500 mb-3">Select traits that best describe your brand (choose up to 5)</p>
        <div className="flex flex-wrap gap-2">
          {personalityTraits.map(trait => (
            <button
              key={trait}
              type="button"
              disabled={!data.traits.includes(trait) && data.traits.length >= 5}
              onClick={() => toggleTrait(trait)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                data.traits.includes(trait)
                  ? 'bg-[#3F27FA] text-white'
                  : data.traits.length >= 5
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {trait}
            </button>
          ))}
        </div>
        {errors.traits && (
          <p className="mt-1 text-sm text-red-500">{errors.traits}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brand Tone of Voice*
        </label>
        <select
          value={data.tone}
          onChange={(e) => onUpdate({ tone: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.tone ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] bg-white`}
        >
          <option value="">Select your brand's tone of voice</option>
          {toneOptions.map(tone => (
            <option key={tone} value={tone}>{tone}</option>
          ))}
        </select>
        {errors.tone && (
          <p className="mt-1 text-sm text-red-500">{errors.tone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Visual Style*
        </label>
        <select
          value={data.visualStyle}
          onChange={(e) => onUpdate({ visualStyle: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.visualStyle ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] bg-white`}
        >
          <option value="">Select your preferred visual style</option>
          {visualStyleOptions.map(style => (
            <option key={style} value={style}>{style}</option>
          ))}
        </select>
        {errors.visualStyle && (
          <p className="mt-1 text-sm text-red-500">{errors.visualStyle}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Unique Value Proposition*
        </label>
        <textarea
          value={data.uniqueValue}
          onChange={(e) => onUpdate({ uniqueValue: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.uniqueValue ? 'border-red-500' : 'border-gray-200'
          } focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] min-h-[100px]`}
          placeholder="What makes your brand unique? What value do you provide that others don't?"
        />
        {errors.uniqueValue && (
          <p className="mt-1 text-sm text-red-500">{errors.uniqueValue}</p>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#3F27FA] text-white font-medium rounded-lg hover:bg-[#3F27FA]/90 transition"
        >
          Next Step
        </button>
      </div>
    </form>
  );
} 