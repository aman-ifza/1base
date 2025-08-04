import React, { useState, useCallback } from 'react';
import SidebarContainer from '../components/SidebarContainer';
import RightMiniSidebar from '../components/RightMiniSidebar';
import PromptBar from '../components/PromptBar';
import Chatbox from '../components/Chatbox';
import LogoCard from '../components/LogoCard';
import TypographyTemplate from '../components/TypographyTemplate';
import TemplatePreview from '../components/TemplatePreview';

const Build = () => {
  const [step, setStep] = useState(0); // 0: initial, 1: names, 2: logos, 3: typography, 4: colors, 5: final preview
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedName, setSelectedName] = useState('');
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [selectedTypography, setSelectedTypography] = useState(null);
  const [selectedColorScheme, setSelectedColorScheme] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentAIResponse, setCurrentAIResponse] = useState('');

  // Sample data that would normally come from API
  const brandNames = [
    'TechFlow', 'InnovateLab', 'DigitalCraft',
    'CreativeForge', 'BrandSphere', 'VisionWorks'
  ];

  const logoOptions = [
    {
      id: 1,
      name: 'ModernTech',
      logoType: 'text',
      backgroundColor: 'from-blue-600 to-purple-600',
      textColor: 'white'
    },
    {
      id: 2,
      name: 'Creative',
      logoType: 'icon',
      backgroundColor: 'from-orange-500 to-red-500',
      textColor: 'white'
    },
    {
      id: 3,
      name: 'Minimal',
      logoType: 'text',
      backgroundColor: 'from-gray-800 to-black',
      textColor: 'white'
    }
  ];

  const typographyOptions = [
    {
      id: 1,
      title: "Roboto & Open Sans",
      previewText: "A clean, modern combination perfect for tech brands. Highly legible and professional."
    },
    {
      id: 2,
      title: "Playfair & Lato",
      previewText: "Elegant serif paired with clean sans-serif for sophisticated brand identity."
    },
    {
      id: 3,
      title: "Montserrat & Source Sans",
      previewText: "Versatile combination that works across digital and print applications."
    }
  ];

  const colorSchemes = [
    {
      id: 1,
      name: 'Ocean Blue',
      primary: '#0EA5E9',
      secondary: '#0284C7',
      accent: '#38BDF8',
      background: 'from-blue-400 via-cyan-500 to-blue-600'
    },
    {
      id: 2,
      name: 'Sunset Orange',
      primary: '#F97316',
      secondary: '#EA580C',
      accent: '#FBBF24',
      background: 'from-orange-400 via-red-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Forest Green',
      primary: '#059669',
      secondary: '#047857',
      accent: '#10B981',
      background: 'from-green-400 via-emerald-500 to-teal-600'
    }
  ];

  const handlePromptSubmit = useCallback((prompt) => {
    setIsProcessing(true);
    setSidebarCollapsed(true);
    
    // Simulate AI processing delay
    setTimeout(() => {
      setStep(1);
      setCurrentAIResponse(`Based on your prompt "${prompt}", I've generated several brand name suggestions that align with your vision. Please review and select the one that best represents your brand identity.`);
      setIsProcessing(false);
    }, 2000);
  }, []);

  const handleNameSelection = (name) => {
    setSelectedName(name);
    setIsProcessing(true);
    
    setTimeout(() => {
      setStep(2);
      setCurrentAIResponse(`Great choice! "${name}" is a strong brand name. Now let me present some custom logo concepts that complement this name and reflect your brand's personality.`);
      setIsProcessing(false);
    }, 1500);
  };

  const handleLogoSelection = (logo) => {
    setSelectedLogo(logo);
    setIsProcessing(true);
    
    setTimeout(() => {
      setStep(3);
      setCurrentAIResponse(`Perfect! The ${logo.name} logo style aligns well with your brand. Now let's choose typography that enhances your brand's communication and maintains consistency across all touchpoints.`);
      setIsProcessing(false);
    }, 1500);
  };

  const handleTypographySelection = (typography) => {
    setSelectedTypography(typography);
    setIsProcessing(true);
    
    setTimeout(() => {
      setStep(4);
      setCurrentAIResponse(`Excellent typography choice! Now let's select a color scheme that brings everything together and creates a cohesive visual identity for your brand.`);
      setIsProcessing(false);
    }, 1500);
  };

  const handleColorSelection = (colorScheme) => {
    setSelectedColorScheme(colorScheme);
    setIsProcessing(true);
    
    setTimeout(() => {
      setStep(5);
      setCurrentAIResponse(`Fantastic! Your brand identity is complete. Here's a preview of your final brand design showcasing how all elements work together harmoniously.`);
      setIsProcessing(false);
    }, 1500);
  };

  const handleSaveBrand = () => {
    // Reset all states to return to initial build page
    setStep(0);
    setIsProcessing(false);
    setSelectedName('');
    setSelectedLogo(null);
    setSelectedTypography(null);
    setSelectedColorScheme(null);
    setSidebarCollapsed(false);
    setCurrentAIResponse('');
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Select Your Brand Name:</h3>
            <div className="grid grid-cols-2 gap-3">
              {brandNames.map((name, index) => (
                <button
                  key={index}
                  onClick={() => handleNameSelection(name)}
                  className="p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
                >
                  <span className="font-medium text-gray-800">{name}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Choose Your Logo Style:</h3>
            <div className="grid grid-cols-3 gap-4">
              {logoOptions.map((logo) => (
                <div key={logo.id} className="cursor-pointer" onClick={() => handleLogoSelection(logo)}>
                  <LogoCard
                    name={selectedName || logo.name}
                    logoType={logo.logoType}
                    backgroundColor={logo.backgroundColor}
                    textColor={logo.textColor}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Select Typography:</h3>
            <div className="grid grid-cols-3 gap-4">
              {typographyOptions.map((typography) => (
                <div key={typography.id} className="cursor-pointer" onClick={() => handleTypographySelection(typography)}>
                  <TypographyTemplate
                    title={typography.title}
                    previewText={typography.previewText}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Choose Color Scheme:</h3>
            <div className="grid grid-cols-3 gap-4">
              {colorSchemes.map((scheme) => (
                <button
                  key={scheme.id}
                  onClick={() => handleColorSelection(scheme)}
                  className="p-0 bg-white border-2 border-gray-200 rounded-lg hover:border-blue-500 transition-all overflow-hidden h-80"
                >
                  <div className={`w-full h-48 bg-gradient-to-br ${scheme.background}`}></div>
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-4 text-lg">{scheme.name}</h4>
                    <div className="flex justify-center gap-4">
                      <div className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: scheme.primary }}></div>
                      <div className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: scheme.secondary }}></div>
                      <div className="w-10 h-10 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: scheme.accent }}></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Your Complete Brand Identity:</h3>
            
            <div className="w-full">
              <TemplatePreview
                selectedName={selectedName}
                selectedLogo={selectedLogo}
                selectedTypography={selectedTypography}
                selectedColorScheme={selectedColorScheme}
                onBack={() => setStep(4)}
                onSave={handleSaveBrand}
                exportButtonText="Save Brand"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Main layout container */}
      <div className="relative z-10 flex h-screen">
        
        {/* Left Sidebar - Collapsible */}
        <div className={`flex-shrink-0 transition-all duration-300 ${sidebarCollapsed ? 'w-0 overflow-hidden' : ''}`}>
          <SidebarContainer />
        </div>
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          
          {/* Central workspace area */}
          <div className="flex-1 flex flex-col p-8 overflow-y-auto bg-gray-900 text-white">
            {step > 0 && (
              <div className="mb-6">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-semibold">AI</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white leading-relaxed">
                        {isProcessing ? (
                          <div className="flex items-center gap-2">
                            <div className="animate-spin w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full"></div>
                            <span>Processing your request...</span>
                          </div>
                        ) : (
                          currentAIResponse
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {step > 0 && !isProcessing && (
              <div className="flex-1">
                {renderStepContent()}
              </div>
            )}
            
            {step === 0 && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Let's Build Your Brand
                  </h2>
                  <p className="text-gray-300 mb-8">
                    Describe your vision and let me guide you through creating a complete brand identity.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Bottom Prompt Bar - Only show if not in final step */}
          {step === 0 && (
            <div className="flex-shrink-0 p-6 pb-8">
              <PromptBar onSubmit={handlePromptSubmit} />
            </div>
          )}
        </div>
        
        {/* Right Mini Sidebar - Collapsible */}
        <div className={`flex-shrink-0 transition-all duration-300 ${sidebarCollapsed ? 'w-0 overflow-hidden' : ''}`}>
          <RightMiniSidebar />
        </div>
      </div>
    </div>
  );
};

export default Build;
