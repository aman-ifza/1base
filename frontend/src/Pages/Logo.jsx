import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TemplateSettings from '../components/TemplateSettings';
import LogoCard from '../components/LogoCard';

const Logo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedCloud, setSelectedCloud] = useState('All');

  // Sample logo data - in a real app, this would come from an API
  const logoData = [
    {
      id: 1,
      name: 'Hanover',
      subtitle: 'TECH AGENCY',
      backgroundColor: 'from-blue-600 to-purple-700',
      logoType: 'text',
      style: 'Modern',
      theme: 'Tech',
      textColor: 'white'
    },
    {
      id: 2,
      name: 'ChainBrand',
      subtitle: 'YOUR SLOGAN',
      backgroundColor: 'from-purple-500 to-blue-600',
      logoType: 'icon',
      style: 'Abstract',
      theme: 'Business',
      textColor: 'white'
    },
    {
      id: 3,
      name: 'OPENSIGNAL',
      subtitle: '',
      backgroundColor: 'from-blue-500 to-cyan-500',
      logoType: 'icon',
      style: 'Geometric',
      theme: 'Tech',
      textColor: 'white'
    },
    {
      id: 4,
      name: 'GINYARD PHONE',
      subtitle: '',
      backgroundColor: 'from-gray-800 to-black',
      logoType: 'icon',
      style: 'Modern',
      theme: 'Tech',
      textColor: 'white'
    },
    {
      id: 5,
      name: 'REAPER',
      subtitle: 'ESPORTS',
      backgroundColor: 'from-purple-800 to-purple-900',
      logoType: 'mascot',
      style: 'Gaming',
      theme: 'Entertainment',
      textColor: 'white'
    },
    {
      id: 6,
      name: 'ABSTRACT SPIN',
      subtitle: 'CREATIVE',
      backgroundColor: 'from-white to-gray-100',
      logoType: 'abstract',
      style: 'Creative',
      theme: 'Design',
      textColor: 'black'
    },
    {
      id: 7,
      name: 'TechFlow',
      subtitle: 'SOLUTIONS',
      backgroundColor: 'from-green-500 to-blue-500',
      logoType: 'text',
      style: 'Modern',
      theme: 'Tech',
      textColor: 'white'
    },
    {
      id: 8,
      name: 'CreativeHub',
      subtitle: 'STUDIO',
      backgroundColor: 'from-orange-500 to-red-500',
      logoType: 'icon',
      style: 'Creative',
      theme: 'Design',
      textColor: 'white'
    },
    {
      id: 9,
      name: 'DataCore',
      subtitle: 'ANALYTICS',
      backgroundColor: 'from-indigo-600 to-purple-600',
      logoType: 'geometric',
      style: 'Modern',
      theme: 'Data',
      textColor: 'white'
    },
    {
      id: 10,
      name: 'NeoVault',
      subtitle: 'SECURITY',
      backgroundColor: 'from-gray-900 via-red-900 to-black',
      logoType: 'icon',
      style: 'Bold',
      theme: 'Security',
      textColor: 'white'
    },
    {
      id: 11,
      name: 'EcoFlow',
      subtitle: 'SUSTAINABLE',
      backgroundColor: 'from-emerald-400 via-green-500 to-teal-600',
      logoType: 'abstract',
      style: 'Creative',
      theme: 'Environment',
      textColor: 'white'
    },
    {
      id: 12,
      name: 'Quantum',
      subtitle: 'LABORATORIES',
      backgroundColor: 'from-violet-600 via-purple-600 to-blue-600',
      logoType: 'geometric',
      style: 'Modern',
      theme: 'Science',
      textColor: 'white'
    }
  ];

  // Filter logos based on search and filters
  const filteredLogos = logoData.filter(logo => {
    const matchesSearch = logo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         logo.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStyle = selectedStyle === 'All' || logo.style === selectedStyle;
    const matchesTheme = selectedTheme === 'All' || logo.theme === selectedTheme;
    // For cloud filter, we'll just use it as a placeholder for now
    
    return matchesSearch && matchesStyle && matchesTheme;
  });

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Template Settings - Search and Filters */}
        <div className="flex-shrink-0 p-6 pb-4">
          <TemplateSettings
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedStyle={selectedStyle}
            onStyleChange={setSelectedStyle}
            selectedTheme={selectedTheme}
            onThemeChange={setSelectedTheme}
            selectedCloud={selectedCloud}
            onCloudChange={setSelectedCloud}
          />
        </div>
        
        {/* Logo Grid with Glass Background */}
        <div className="flex-1 px-6 pb-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLogos.map((logo) => (
                  <LogoCard
                    key={logo.id}
                    name={logo.name}
                    subtitle={logo.subtitle}
                    backgroundColor={logo.backgroundColor}
                    logoType={logo.logoType}
                    textColor={logo.textColor}
                    onEdit={() => console.log(`Edit logo: ${logo.name}`)}
                    onExport={() => console.log(`Export logo: ${logo.name}`)}
                  />
                ))}
              </div>
              
              {filteredLogos.length === 0 && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <p className="text-white text-lg mb-2">No logos found</p>
                    <p className="text-white/70">Try adjusting your search or filter criteria</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
