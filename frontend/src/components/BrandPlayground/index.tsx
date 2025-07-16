import { useState } from 'react';
import ColorPicker from './ColorPicker';
import TypographySelector from './TypographySelector';
import LogoCustomizer from './LogoCustomizer';
import Preview from './Preview';

interface BrandPlaygroundState {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    scale: number;
  };
  logo: {
    text: string;
    icon: string | null;
    style: 'minimal' | 'modern' | 'classic' | 'bold';
    layout: 'icon-left' | 'icon-top' | 'text-only';
  };
  spacing: {
    scale: number;
    unit: number;
  };
}

export default function BrandPlayground() {
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'logo' | 'preview'>('colors');
  const [brandElements, setBrandElements] = useState<BrandPlaygroundState>({
    colors: {
      primary: '#3F27FA',
      secondary: '#FF6B6B',
      accent: '#4ECDC4',
      background: '#FFFFFF',
      text: '#1A1A1A'
    },
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      scale: 1.2
    },
    logo: {
      text: '1base',
      icon: null,
      style: 'modern',
      layout: 'icon-left'
    },
    spacing: {
      scale: 1,
      unit: 4
    }
  });

  const updateBrandElements = (section: keyof BrandPlaygroundState, data: Partial<BrandPlaygroundState[keyof BrandPlaygroundState]>) => {
    setBrandElements(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...data
      }
    }));
  };

  const tabs = [
    { id: 'colors' as const, label: 'Colors', icon: '🎨' },
    { id: 'typography' as const, label: 'Typography', icon: 'Aa' },
    { id: 'logo' as const, label: 'Logo', icon: '⭐' },
    { id: 'preview' as const, label: 'Preview', icon: '👁' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
            <div className="px-6 py-4">
              <h1 className="text-2xl font-bold text-gray-900">Brand Playground</h1>
              <p className="text-gray-600 mt-1">
                Experiment with your brand elements in real-time
              </p>
            </div>
            
            {/* Tabs */}
            <div className="px-6 flex space-x-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium rounded-t-lg transition relative ${
                    activeTab === tab.id
                      ? 'text-[#3F27FA] border-b-2 border-[#3F27FA]'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg">{tab.icon}</span>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-h-[600px]">
            {/* Left Panel - Controls */}
            <div className="w-80 border-r border-gray-200 bg-white p-6 overflow-y-auto">
              {activeTab === 'colors' && (
                <ColorPicker
                  colors={brandElements.colors}
                  onChange={(colors) => updateBrandElements('colors', colors)}
                />
              )}
              
              {activeTab === 'typography' && (
                <TypographySelector
                  typography={brandElements.typography}
                  onChange={(typography) => updateBrandElements('typography', typography)}
                />
              )}
              
              {activeTab === 'logo' && (
                <LogoCustomizer
                  logo={brandElements.logo}
                  onChange={(logo) => updateBrandElements('logo', logo)}
                />
              )}
            </div>

            {/* Right Panel - Preview */}
            <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
              <Preview
                brandElements={brandElements}
                showPreviewOptions={activeTab === 'preview'}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={() => {/* Reset to defaults */}}
            className="px-4 py-2 text-gray-600 font-medium rounded-lg hover:bg-gray-100 transition"
          >
            Reset
          </button>
          <button
            onClick={() => {/* Save changes */}}
            className="px-6 py-2 bg-[#3F27FA] text-white font-medium rounded-lg hover:bg-[#3F27FA]/90 transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
} 