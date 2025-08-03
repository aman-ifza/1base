import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TemplateSettings from '../components/TemplateSettings';
import TemplateComponent from '../components/TemplateComponent';

// Import template images
import template1 from '../Template Images/template1.png';
import template2 from '../Template Images/template2.png';
import template3 from '../Template Images/template3.png';
import template4 from '../Template Images/template4.png';
import template5 from '../Template Images/template5.png';
import template6 from '../Template Images/template6.png';

const Inspiration = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedCloud, setSelectedCloud] = useState('All');

  // Sample template data - in a real app, this would come from an API
  const templateData = [
    {
      id: 1,
      title: 'Template 1',
      category: 'Business',
      style: 'Modern',
      theme: 'Business',
      imageUrl: template1,
      description: 'Professional business template design',
      isBookmarked: false
    },
    {
      id: 2,
      title: 'Template 2',
      category: 'Creative',
      style: 'Creative',
      theme: 'Design',
      imageUrl: template2,
      description: 'Creative portfolio showcase template',
      isBookmarked: true
    },
    {
      id: 3,
      title: 'Template 3',
      category: 'Business',
      style: 'Bold',
      theme: 'Marketing',
      imageUrl: template3,
      description: 'Bold marketing campaign template',
      isBookmarked: false
    },
    {
      id: 4,
      title: 'Template 4',
      category: 'Corporate',
      style: 'Professional',
      theme: 'Business',
      imageUrl: template4,
      description: 'Professional corporate presentation',
      isBookmarked: false
    },
    {
      id: 5,
      title: 'Template 5',
      category: 'Tech',
      style: 'Modern',
      theme: 'Tech',
      imageUrl: template5,
      description: 'Modern technology solution template',
      isBookmarked: true
    },
    {
      id: 6,
      title: 'Template 6',
      category: 'Creative',
      style: 'Creative',
      theme: 'Design',
      imageUrl: template6,
      description: 'Creative agency portfolio template',
      isBookmarked: false
    }
  ];

  // Filter templates based on search and filters
  const filteredTemplates = templateData.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStyle = selectedStyle === 'All' || template.style === selectedStyle;
    const matchesTheme = selectedTheme === 'All' || template.theme === selectedTheme;
    
    return matchesSearch && matchesStyle && matchesTheme;
  });

  const handleViewTemplate = (templateId) => {
    console.log(`View template: ${templateId}`);
    navigate(`/inspiration/view/${templateId}`);
  };

  const handleExportTemplate = (templateId) => {
    console.log(`Export template: ${templateId}`);
    // Handle template export
  };

  const handleBookmarkTemplate = (templateId) => {
    console.log(`Bookmark template: ${templateId}`);
    // Toggle bookmark status
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
        
        {/* Template Grid with Glass Background */}
        <div className="flex-1 px-6 pb-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <TemplateComponent
                    key={template.id}
                    title={template.title}
                    imageUrl={template.imageUrl}
                    isBookmarked={template.isBookmarked}
                    onView={() => handleViewTemplate(template.id)}
                    onExport={() => handleExportTemplate(template.id)}
                    onBookmark={() => handleBookmarkTemplate(template.id)}
                  />
                ))}
              </div>
              
              {filteredTemplates.length === 0 && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <p className="text-white text-lg mb-2">No templates found</p>
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

export default Inspiration;
