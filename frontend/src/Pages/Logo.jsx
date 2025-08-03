import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TemplateSettings from '../components/TemplateSettings';
import LogoCard from '../components/LogoCard';

// Import logo images
import logo1 from '../Logo Card Images/logo1.png';
import logo2 from '../Logo Card Images/logo2.png';
import logo3 from '../Logo Card Images/logo3.png';
import logo4 from '../Logo Card Images/logo4.png';
import logo5 from '../Logo Card Images/logo5.png';
import logo6 from '../Logo Card Images/logo6.png';

const Logo = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedCloud, setSelectedCloud] = useState('All');

  // Sample logo data - in a real app, this would come from an API
  const logoData = [
    {
      id: 1,
      name: 'Brand Logo 1',
      subtitle: '',
      backgroundColor: 'from-blue-600 to-purple-700',
      logoType: 'image',
      logoImage: logo1,
      style: 'Modern',
      theme: 'Tech',
      textColor: 'white'
    },
    {
      id: 2,
      name: 'Brand Logo 2',
      subtitle: '',
      backgroundColor: 'from-purple-500 to-blue-600',
      logoType: 'image',
      logoImage: logo2,
      style: 'Abstract',
      theme: 'Business',
      textColor: 'white'
    },
    {
      id: 3,
      name: 'Brand Logo 3',
      subtitle: '',
      backgroundColor: 'from-blue-500 to-cyan-500',
      logoType: 'image',
      logoImage: logo3,
      style: 'Geometric',
      theme: 'Tech',
      textColor: 'white'
    },
    {
      id: 4,
      name: 'Brand Logo 4',
      subtitle: '',
      backgroundColor: 'from-gray-800 to-black',
      logoType: 'image',
      logoImage: logo4,
      style: 'Modern',
      theme: 'Tech',
      textColor: 'white'
    },
    {
      id: 5,
      name: 'Brand Logo 5',
      subtitle: '',
      backgroundColor: 'from-purple-800 to-purple-900',
      logoType: 'image',
      logoImage: logo5,
      style: 'Creative',
      theme: 'Entertainment',
      textColor: 'white'
    },
    {
      id: 6,
      name: 'Brand Logo 6',
      subtitle: '',
      backgroundColor: 'from-white to-gray-100',
      logoType: 'image',
      logoImage: logo6,
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

  // Handle edit logo functionality
  const handleEditLogo = () => {
    // Navigate to logo editor
    navigate('/logo-editor');
  };

  const handleExportLogo = (logoName) => {
    console.log(`Export logo: ${logoName}`);
    // Handle export functionality
  };

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
                    logoImage={logo.logoImage}
                    textColor={logo.textColor}
                    onEdit={() => handleEditLogo()}
                    onExport={() => handleExportLogo(logo.name)}
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
