import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TemplateSettings from '../components/TemplateSettings';
import TemplateComponent from '../components/TemplateComponent';

const Inspiration = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedCloud, setSelectedCloud] = useState('All');

  // Sample template data - in a real app, this would come from an API
  const templateData = [
    {
      id: 1,
      title: 'Productivity',
      category: 'Business',
      style: 'Modern',
      theme: 'Business',
      imageUrl: '/src/assets/productivity-template.jpg',
      description: 'Boost your daily workflow with organized layouts',
      isBookmarked: false
    },
    {
      id: 2,
      title: 'Portfolio',
      category: 'Creative',
      style: 'Creative',
      theme: 'Design',
      imageUrl: '/src/assets/portfolio-template.jpg',
      description: 'Showcase your work with stunning visual layouts',
      isBookmarked: true
    },
    {
      id: 3,
      title: 'Marketing',
      category: 'Business',
      style: 'Bold',
      theme: 'Marketing',
      imageUrl: '/src/assets/marketing-template.jpg',
      description: 'Drive growth with compelling marketing materials',
      isBookmarked: false
    },
    {
      id: 4,
      title: 'Presentation',
      category: 'Corporate',
      style: 'Professional',
      theme: 'Business',
      imageUrl: '/src/assets/presentation-template.jpg',
      description: 'Create impactful presentations that engage',
      isBookmarked: false
    },
    {
      id: 5,
      title: 'Technology',
      category: 'Tech',
      style: 'Modern',
      theme: 'Tech',
      imageUrl: '/src/assets/technology-template.jpg',
      description: 'Cutting-edge designs for tech companies',
      isBookmarked: true
    },
    {
      id: 6,
      title: 'Agency',
      category: 'Creative',
      style: 'Creative',
      theme: 'Design',
      imageUrl: '/src/assets/agency-template.jpg',
      description: 'Professional agency and studio layouts',
      isBookmarked: false
    },
    {
      id: 7,
      title: 'E-commerce',
      category: 'Retail',
      style: 'Modern',
      theme: 'Retail',
      imageUrl: '/src/assets/ecommerce-template.jpg',
      description: 'Convert visitors with optimized store designs',
      isBookmarked: false
    },
    {
      id: 8,
      title: 'Healthcare',
      category: 'Medical',
      style: 'Clean',
      theme: 'Healthcare',
      imageUrl: '/src/assets/healthcare-template.jpg',
      description: 'Trust-building layouts for medical practices',
      isBookmarked: false
    },
    {
      id: 9,
      title: 'Education',
      category: 'Academic',
      style: 'Classic',
      theme: 'Education',
      imageUrl: '/src/assets/education-template.jpg',
      description: 'Engaging designs for educational content',
      isBookmarked: true
    },
    {
      id: 10,
      title: 'Restaurant',
      category: 'Food',
      style: 'Elegant',
      theme: 'Food',
      imageUrl: '/src/assets/restaurant-template.jpg',
      description: 'Appetizing layouts for food businesses',
      isBookmarked: false
    },
    {
      id: 11,
      title: 'Real Estate',
      category: 'Property',
      style: 'Professional',
      theme: 'Real Estate',
      imageUrl: '/src/assets/realestate-template.jpg',
      description: 'Luxury layouts for property showcases',
      isBookmarked: false
    },
    {
      id: 12,
      title: 'Fitness',
      category: 'Health',
      style: 'Dynamic',
      theme: 'Fitness',
      imageUrl: '/src/assets/fitness-template.jpg',
      description: 'Energetic designs for fitness brands',
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
    // Navigate to template preview or editor
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
