import { useState } from 'react';

interface ValidationStepProps {
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
    generatedConcept: {
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
    };
  };
  onUpdate: (data: any) => void;
  onBack: () => void;
}

export default function ValidationStep({
  formData,
  onUpdate,
  onBack
}: ValidationStepProps) {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Here you would typically send the feedback to your backend
    onUpdate({
      feedback,
      rating,
      timestamp: new Date().toISOString()
    });
    
    setIsSubmitting(false);
    // Show success message or redirect
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Review Your Brand Concept
        </h3>
        <p className="text-gray-600">
          Please review the generated brand concept and provide your feedback. This helps us improve and refine the results.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl space-y-6">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Business Information</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Company Name</p>
              <p className="font-medium">{formData.businessInfo.companyName}</p>
            </div>
            <div>
              <p className="text-gray-600">Industry</p>
              <p className="font-medium">{formData.businessInfo.industry}</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-2">Brand Personality</h4>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-gray-600">Traits: </span>
              <span className="font-medium">{formData.brandPersonality.traits.join(', ')}</span>
            </p>
            <p>
              <span className="text-gray-600">Tone: </span>
              <span className="font-medium">{formData.brandPersonality.tone}</span>
            </p>
            <p>
              <span className="text-gray-600">Visual Style: </span>
              <span className="font-medium">{formData.brandPersonality.visualStyle}</span>
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-2">Generated Concept</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Color Palette</p>
              <div className="flex gap-2">
                {Object.entries(formData.generatedConcept.colorPalette).map(([name, color]) => (
                  <div
                    key={name}
                    className="w-8 h-8 rounded-md shadow-sm"
                    style={{ backgroundColor: color }}
                    title={`${name}: ${color}`}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Typography</p>
              <p className="font-medium text-sm">
                {formData.generatedConcept.typography.headingFont} (Headings), {' '}
                {formData.generatedConcept.typography.bodyFont} (Body)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-800 mb-4">Your Feedback</h4>
        
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">How would you rate this concept?</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                  rating >= star
                    ? 'bg-[#3F27FA] text-white'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-600 mb-2">
            Additional Comments
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] min-h-[100px]"
            placeholder="What do you like or dislike about the concept? Any suggestions for improvement?"
          />
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
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`px-6 py-2 bg-[#3F27FA] text-white font-medium rounded-lg transition ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#3F27FA]/90'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Complete'}
        </button>
      </div>
    </div>
  );
} 