import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ToneRightMiniSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [voiceCharacteristics, setVoiceCharacteristics] = useState(['Trustworthy', 'Expert']);
  const [communicationApproach, setCommunicationApproach] = useState('Professional');
  const [languageComplexity, setLanguageComplexity] = useState('Moderate');
  const [personalitySliders, setPersonalitySliders] = useState({
    seriousPlayful: 60, // 0 = Serious, 100 = Playful
    directDiplomatic: 40, // 0 = Direct, 100 = Diplomatic
    humbleConfident: 70 // 0 = Humble, 100 = Confident
  });

  const voiceOptions = [
    'Witty',
    'Trustworthy',
    'Bold',
    'Caring',
    'Expert',
    'Innovative',
    'Authentic',
    'Passionate',
    'Reliable',
    'Creative',
    'Inspiring',
    'Empathetic'
  ];

  const communicationOptions = [
    { value: 'Conversational', label: 'Conversational' },
    { value: 'Professional', label: 'Professional' },
    { value: 'Authoritative', label: 'Authoritative' },
    { value: 'Inspiring', label: 'Inspiring' }
  ];

  const complexityOptions = ['Simple', 'Moderate', 'Technical'];

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleVoiceCharacteristic = (characteristic) => {
    setVoiceCharacteristics(prev => 
      prev.includes(characteristic)
        ? prev.filter(item => item !== characteristic)
        : [...prev, characteristic]
    );
  };

  const handleSliderChange = (slider, value) => {
    setPersonalitySliders(prev => ({
      ...prev,
      [slider]: parseInt(value)
    }));
  };

  const getSliderLabel = (slider, value) => {
    switch (slider) {
      case 'seriousPlayful':
        return value < 50 ? 'Serious' : 'Playful';
      case 'directDiplomatic':
        return value < 50 ? 'Direct' : 'Diplomatic';
      case 'humbleConfident':
        return value < 50 ? 'Humble' : 'Confident';
      default:
        return '';
    }
  };

  return (
    <>
      {/* Tone Right Mini Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex h-[85vh] z-10">
        <div className="relative">
          <button
            onClick={toggleSidebar}
            className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300
              w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-lg border border-gray-200 z-20
              ${isExpanded ? '-left-5' : 'right-3'}`}
          >
            {isExpanded ? (
              <ChevronRight className="w-5 h-5 text-gray-600" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        <div
          className={`bg-white transition-all duration-300 ease-in-out overflow-hidden
          ${isExpanded ? 'w-80' : 'w-0'} 
          h-full rounded-tl-[34px] rounded-bl-[34px] shadow-lg`}
        >
          <div className="h-full p-6">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice & Personality</h3>
              {/* Voice Characteristics */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Voice Characteristics
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {voiceCharacteristics.map((characteristic) => (
                    <span
                      key={characteristic}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {characteristic}
                      <button
                        onClick={() => toggleVoiceCharacteristic(characteristic)}
                        className="hover:bg-blue-200 rounded-full p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {voiceOptions
                    .filter(option => !voiceCharacteristics.includes(option))
                    .map((option) => (
                      <button
                        key={option}
                        onClick={() => toggleVoiceCharacteristic(option)}
                        className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors"
                      >
                        + {option}
                      </button>
                    ))}
                </div>
              </div>

              {/* Communication Approach */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Communication Approach
                </label>
                <div className="space-y-3">
                  {communicationOptions.map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="communicationApproach"
                        value={option.value}
                        checked={communicationApproach === option.value}
                        onChange={(e) => setCommunicationApproach(e.target.value)}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Language Complexity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Language Complexity
                </label>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  {complexityOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setLanguageComplexity(option)}
                      className={`flex-1 py-2 px-3 text-sm rounded-md transition-colors ${
                        languageComplexity === option
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personality Sliders */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Personality Traits
                </label>
                
                {/* Serious ↔ Playful */}
                <div className="mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Serious</span>
                      <span className="font-medium">{getSliderLabel('seriousPlayful', personalitySliders.seriousPlayful)}</span>
                      <span>Playful</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={personalitySliders.seriousPlayful}
                      onChange={(e) => handleSliderChange('seriousPlayful', e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #E5E7EB 0%, #E5E7EB ${personalitySliders.seriousPlayful}%, #3B82F6 ${personalitySliders.seriousPlayful}%, #3B82F6 100%)`
                      }}
                    />
                  </div>
                </div>

                {/* Direct ↔ Diplomatic */}
                <div className="mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Direct</span>
                      <span className="font-medium">{getSliderLabel('directDiplomatic', personalitySliders.directDiplomatic)}</span>
                      <span>Diplomatic</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={personalitySliders.directDiplomatic}
                      onChange={(e) => handleSliderChange('directDiplomatic', e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #E5E7EB 0%, #E5E7EB ${personalitySliders.directDiplomatic}%, #3B82F6 ${personalitySliders.directDiplomatic}%, #3B82F6 100%)`
                      }}
                    />
                  </div>
                </div>

                {/* Humble ↔ Confident */}
                <div className="mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Humble</span>
                      <span className="font-medium">{getSliderLabel('humbleConfident', personalitySliders.humbleConfident)}</span>
                      <span>Confident</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={personalitySliders.humbleConfident}
                      onChange={(e) => handleSliderChange('humbleConfident', e.target.value)}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #E5E7EB 0%, #E5E7EB ${personalitySliders.humbleConfident}%, #3B82F6 ${personalitySliders.humbleConfident}%, #3B82F6 100%)`
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Apply Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToneRightMiniSidebar;
