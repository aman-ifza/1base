import { useState } from 'react';
import BusinessInfoForm from './BusinessInfoForm';
import BrandPersonalityForm from './BrandPersonalityForm';
import ConceptGeneration from './ConceptGeneration';
import ValidationStep from './ValidationStep';

type Step = 'business-info' | 'brand-personality' | 'concept-generation' | 'validation';

interface StepIndicatorProps {
  currentStep: Step;
  steps: { id: Step; label: string }[];
}

const StepIndicator = ({ currentStep, steps }: StepIndicatorProps) => (
  <div className="flex items-center justify-center mb-8">
    {steps.map((step, idx) => (
      <div key={step.id} className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
          currentStep === step.id 
            ? 'bg-[#3F27FA] text-white' 
            : 'bg-gray-100 text-gray-400'
        }`}>
          {idx + 1}
        </div>
        <div className={`ml-2 ${
          currentStep === step.id ? 'text-[#3F27FA] font-medium' : 'text-gray-400'
        }`}>
          {step.label}
        </div>
        {idx < steps.length - 1 && (
          <div className="w-16 h-[2px] mx-2 bg-gray-200" />
        )}
      </div>
    ))}
  </div>
);

export default function BrandDNAGenerator() {
  const [currentStep, setCurrentStep] = useState<Step>('business-info');
  const [formData, setFormData] = useState({
    businessInfo: {
      companyName: '',
      industry: '',
      targetAudience: '',
      mission: '',
      values: [],
      competitors: ''
    },
    brandPersonality: {
      traits: [],
      tone: '',
      visualStyle: '',
      uniqueValue: ''
    },
    generatedConcept: null,
    validationFeedback: ''
  });

  const steps = [
    { id: 'business-info' as Step, label: 'Business Info' },
    { id: 'brand-personality' as Step, label: 'Personality' },
    { id: 'concept-generation' as Step, label: 'Generate' },
    { id: 'validation' as Step, label: 'Validate' }
  ];

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  const updateFormData = (section: keyof typeof formData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-[#3F27FA] mb-6">Brand DNA Generator</h1>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <StepIndicator currentStep={currentStep} steps={steps} />
        
        <div className="min-h-[400px]">
          {currentStep === 'business-info' && (
            <BusinessInfoForm
              data={formData.businessInfo}
              onUpdate={(data) => updateFormData('businessInfo', data)}
              onNext={handleNext}
            />
          )}
          
          {currentStep === 'brand-personality' && (
            <BrandPersonalityForm
              data={formData.brandPersonality}
              onUpdate={(data) => updateFormData('brandPersonality', data)}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 'concept-generation' && (
            <ConceptGeneration
              formData={formData}
              onUpdate={(data) => updateFormData('generatedConcept', data)}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}
          
          {currentStep === 'validation' && (
            <ValidationStep
              formData={formData}
              onUpdate={(data) => updateFormData('validationFeedback', data)}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
} 