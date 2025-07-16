import { useState, useEffect } from 'react';

interface ConceptGenerationProps {
  formData: {
    businessInfo: {
      companyName: string;
      industry: string;
      targetAudience: string;
      mission: string;
      values: string[];
      competitors: string;
    };
    brandPersonality: {
      traits: string[];
      tone: string;
      visualStyle: string;
      uniqueValue: string;
    };
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

interface BrandConcept {
  colorPalette: {
    primary: string;
    secondary: string;
    accent: string;
    neutral: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
  };
  brandVoice: {
    description: string;
    examples: string[];
  };
  visualElements: {
    description: string;
    recommendations: string[];
  };
}

const sampleFonts = {
  modern: ['Roboto', 'Open Sans', 'Montserrat'],
  traditional: ['Merriweather', 'Playfair Display', 'Lora'],
  playful: ['Quicksand', 'Comfortaa', 'Fredoka One'],
  elegant: ['Cormorant Garamond', 'Libre Baskerville', 'Crimson Text'],
  tech: ['Space Grotesk', 'Inter', 'SF Pro Display']
};

export default function ConceptGeneration({
  formData,
  onUpdate,
  onNext,
  onBack
}: ConceptGenerationProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [concept, setConcept] = useState<BrandConcept | null>(null);

  // Simulate AI generation process
  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsGenerating(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  // Generate brand concept based on form data
  const generateConcept = () => {
    setIsGenerating(true);
    setProgress(0);

    // Simulate API call delay
    setTimeout(() => {
      const newConcept: BrandConcept = {
        colorPalette: {
          primary: '#3F27FA',
          secondary: '#FF6B6B',
          accent: '#4ECDC4',
          neutral: '#F7F7F7'
        },
        typography: {
          headingFont: sampleFonts[
            formData.brandPersonality.visualStyle.toLowerCase().includes('modern') ? 'modern' :
            formData.brandPersonality.visualStyle.toLowerCase().includes('classic') ? 'traditional' :
            formData.brandPersonality.visualStyle.toLowerCase().includes('playful') ? 'playful' :
            formData.brandPersonality.visualStyle.toLowerCase().includes('luxurious') ? 'elegant' :
            'tech'
          ][0],
          bodyFont: 'Inter'
        },
        brandVoice: {
          description: `Based on your selected tone (${formData.brandPersonality.tone}) and industry focus, your brand voice should be ${formData.brandPersonality.traits.join(', ').toLowerCase()}.`,
          examples: [
            'Welcome to innovation that matters.',
            'Building tomorrow, today.',
            'Your success is our mission.'
          ]
        },
        visualElements: {
          description: `Your visual identity should reflect a ${formData.brandPersonality.visualStyle.toLowerCase()} approach, emphasizing ${formData.brandPersonality.traits[0].toLowerCase()} and ${formData.brandPersonality.traits[1]?.toLowerCase() || 'professional'} elements.`,
          recommendations: [
            'Use clean lines and modern geometry',
            'Incorporate dynamic gradient overlays',
            'Maintain consistent spacing and alignment',
            'Utilize white space effectively'
          ]
        }
      };

      setConcept(newConcept);
      onUpdate(newConcept);
    }, 5000);
  };

  return (
    <div className="space-y-6">
      {!concept && !isGenerating && (
        <div className="text-center py-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Ready to Generate Your Brand Concept
          </h3>
          <p className="text-gray-600 mb-6">
            Our AI will analyze your inputs and generate a comprehensive brand concept
            including colors, typography, voice, and visual elements.
          </p>
          <button
            onClick={generateConcept}
            className="px-8 py-3 bg-[#3F27FA] text-white font-medium rounded-lg hover:bg-[#3F27FA]/90 transition"
          >
            Generate Concept
          </button>
        </div>
      )}

      {isGenerating && (
        <div className="text-center py-8">
          <div className="mb-4">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3F27FA] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">{progress}% complete</p>
          </div>
          <p className="text-gray-600 animate-pulse">
            Generating your brand concept...
          </p>
        </div>
      )}

      {concept && !isGenerating && (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Color Palette
            </h3>
            <div className="flex gap-4">
              {Object.entries(concept.colorPalette).map(([name, color]) => (
                <div key={name} className="text-center">
                  <div
                    className="w-16 h-16 rounded-lg shadow-md"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-sm text-gray-600 mt-2 capitalize">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Typography
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Heading Font</p>
                <p className="text-2xl" style={{ fontFamily: concept.typography.headingFont }}>
                  {concept.typography.headingFont}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Body Font</p>
                <p className="text-lg" style={{ fontFamily: concept.typography.bodyFont }}>
                  {concept.typography.bodyFont}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Brand Voice
            </h3>
            <p className="text-gray-600 mb-4">{concept.brandVoice.description}</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Example Messages:</p>
              <ul className="list-disc list-inside space-y-2">
                {concept.brandVoice.examples.map((example, idx) => (
                  <li key={idx} className="text-gray-800">{example}</li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Visual Elements
            </h3>
            <p className="text-gray-600 mb-4">{concept.visualElements.description}</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Recommendations:</p>
              <ul className="list-disc list-inside space-y-2">
                {concept.visualElements.recommendations.map((rec, idx) => (
                  <li key={idx} className="text-gray-800">{rec}</li>
                ))}
              </ul>
            </div>
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
              onClick={onNext}
              className="px-6 py-2 bg-[#3F27FA] text-white font-medium rounded-lg hover:bg-[#3F27FA]/90 transition"
            >
              Next Step
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 