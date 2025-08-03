import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TypographyTemplate from '../components/TypographyTemplate';
import TemplateSettings from '../components/TemplateSettings';

const TypographyView = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedCloud, setSelectedCloud] = useState('All');
  
  // State for typography templates
  const [bookmarkedTemplates, setBookmarkedTemplates] = useState(new Set());

  // Mock typography template data
  const typographyTemplates = [
    {
      id: 1,
      title: "Fira Code & Work Sans",
      previewText: "All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content to see what it looks like with these font combinations.",
      style: "Modern",
      theme: "Tech",
      cloud: "Featured"
    },
    {
      id: 2,
      title: "Playfair Display & Open Sans",
      previewText: "This elegant combination pairs a sophisticated serif headline font with a clean, readable sans-serif body text. Perfect for editorial and luxury brand content.",
      style: "Elegant",
      theme: "Design",
      cloud: "Popular"
    },
    {
      id: 3,
      title: "Montserrat & Source Sans Pro",
      previewText: "A versatile pairing that works well for business and corporate communications. Both fonts are highly legible and professional.",
      style: "Professional",
      theme: "Business",
      cloud: "Featured"
    },
    {
      id: 4,
      title: "Oswald & Lato",
      previewText: "Bold headlines with friendly body text. This combination is great for marketing materials and modern web design.",
      style: "Bold",
      theme: "Marketing",
      cloud: "Recent"
    },
    {
      id: 5,
      title: "Roboto Slab & Roboto",
      previewText: "A harmonious family pairing that provides both character and readability. Ideal for tech and data-driven content.",
      style: "Clean",
      theme: "Data",
      cloud: "Popular"
    },
    {
      id: 6,
      title: "Poppins & Inter",
      previewText: "Modern and friendly fonts that work perfectly for startups and creative agencies. Both fonts have excellent readability.",
      style: "Creative",
      theme: "Entertainment",
      cloud: "Featured"
    },
    {
      id: 7,
      title: "Bebas Neue & Source Sans Pro",
      previewText: "Strong, condensed headlines paired with clean body text. Perfect for bold marketing campaigns and modern brand identities.",
      style: "Bold",
      theme: "Marketing",
      cloud: "Popular"
    },
    {
      id: 8,
      title: "Crimson Text & Lato",
      previewText: "Classic serif elegance meets contemporary simplicity. Ideal for editorial content, publishing, and sophisticated brand communications.",
      style: "Elegant",
      theme: "Editorial",
      cloud: "Featured"
    },
    {
      id: 9,
      title: "Space Mono & Work Sans",
      previewText: "Futuristic monospace headlines combined with versatile sans-serif body text. Great for tech startups and innovative brands.",
      style: "Modern",
      theme: "Tech",
      cloud: "Recent"
    }
  ];

  // Filter templates based on settings
  const filteredTemplates = typographyTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.previewText.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStyle = selectedStyle === 'All' || template.style === selectedStyle;
    const matchesTheme = selectedTheme === 'All' || template.theme === selectedTheme;
    const matchesCloud = selectedCloud === 'All' || template.cloud === selectedCloud;
    
    return matchesSearch && matchesStyle && matchesTheme && matchesCloud;
  });

  // Handle template actions
  const handleExport = (templateId) => {
    console.log('Exporting template:', templateId);
    // Implementation for export functionality
  };

  const handlePreview = (templateId) => {
    console.log('Previewing template:', templateId);
    navigate(`/typography/preview/${templateId}`);
  };

  const handleBookmark = (templateId) => {
    const newBookmarks = new Set(bookmarkedTemplates);
    if (newBookmarks.has(templateId)) {
      newBookmarks.delete(templateId);
    } else {
      newBookmarks.add(templateId);
    }
    setBookmarkedTemplates(newBookmarks);
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
        
        {/* Typography Grid with Glass Background */}
        <div className="flex-1 px-6 pb-6">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => (
                  <TypographyTemplate
                    key={template.id}
                    title={template.title}
                    previewText={template.previewText}
                    onExport={() => handleExport(template.id)}
                    onPreview={() => handlePreview(template.id)}
                    onBookmark={() => handleBookmark(template.id)}
                    isBookmarked={bookmarkedTemplates.has(template.id)}
                  />
                ))}
              </div>
              
              {filteredTemplates.length === 0 && (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <p className="text-white text-lg mb-2">No typography templates found</p>
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

export default TypographyView;
