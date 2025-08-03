import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TypographyPreview from '../components/TypographyPreview';
import TypographySidebar from '../components/TypographySidebar';

const TypographyPreviewPage = () => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  
  // Typography templates data (should match the one in TypographyView)
  const typographyTemplates = [
    {
      id: 1,
      title: "Fira Code & Work Sans",
      primaryFont: "Fira Code",
      secondaryFont: "Work Sans",
      previewText: "All of this text is editable. Simply click anywhere in the paragraph or heading text and start typing. You can copy and paste your own content to see what it looks like with these font combinations.",
      style: "Modern",
      theme: "Tech"
    },
    {
      id: 2,
      title: "Playfair Display & Open Sans",
      primaryFont: "Playfair Display",
      secondaryFont: "Open Sans",
      previewText: "This elegant combination pairs a sophisticated serif headline font with a clean, readable sans-serif body text. Perfect for editorial and luxury brand content.",
      style: "Elegant",
      theme: "Design"
    },
    {
      id: 3,
      title: "Montserrat & Source Sans Pro",
      primaryFont: "Montserrat",
      secondaryFont: "Source Sans Pro",
      previewText: "A versatile pairing that works well for business and corporate communications. Both fonts are highly legible and professional.",
      style: "Professional",
      theme: "Business"
    },
    {
      id: 4,
      title: "Oswald & Lato",
      primaryFont: "Oswald",
      secondaryFont: "Lato",
      previewText: "Bold headlines with friendly body text. This combination is great for marketing materials and modern web design.",
      style: "Bold",
      theme: "Marketing"
    },
    {
      id: 5,
      title: "Roboto Slab & Roboto",
      primaryFont: "Roboto Slab",
      secondaryFont: "Roboto",
      previewText: "A harmonious family pairing that provides both character and readability. Ideal for tech and data-driven content.",
      style: "Clean",
      theme: "Data"
    },
    {
      id: 6,
      title: "Poppins & Inter",
      primaryFont: "Poppins",
      secondaryFont: "Inter",
      previewText: "Modern and friendly fonts that work perfectly for startups and creative agencies. Both fonts have excellent readability.",
      style: "Creative",
      theme: "Entertainment"
    },
    {
      id: 7,
      title: "Bebas Neue & Source Sans Pro",
      primaryFont: "Bebas Neue",
      secondaryFont: "Source Sans Pro",
      previewText: "Strong, condensed headlines paired with clean body text. Perfect for bold marketing campaigns and modern brand identities.",
      style: "Bold",
      theme: "Marketing"
    },
    {
      id: 8,
      title: "Crimson Text & Lato",
      primaryFont: "Crimson Text",
      secondaryFont: "Lato",
      previewText: "Classic serif elegance meets contemporary simplicity. Ideal for editorial content, publishing, and sophisticated brand communications.",
      style: "Elegant",
      theme: "Editorial"
    },
    {
      id: 9,
      title: "Space Mono & Work Sans",
      primaryFont: "Space Mono",
      secondaryFont: "Work Sans",
      previewText: "Futuristic monospace headlines combined with versatile sans-serif body text. Great for tech startups and innovative brands.",
      style: "Modern",
      theme: "Tech"
    }
  ];

  // Find the selected template
  const selectedTemplate = typographyTemplates.find(template => template.id === parseInt(templateId));
  
  // State for typography customization
  const [currentPrimaryFont, setCurrentPrimaryFont] = useState(selectedTemplate?.primaryFont || "Fira Code");
  const [currentSecondaryFont, setCurrentSecondaryFont] = useState(selectedTemplate?.secondaryFont || "Work Sans");
  const [typographySidebarCollapsed, setTypographySidebarCollapsed] = useState(true);
  const [selectedStyles, setSelectedStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
    color: '#4F46E5',
    alignment: 'left'
  });

  // Handle font changes
  const handleFontChange = (fontType, font) => {
    if (fontType === 'primary') {
      setCurrentPrimaryFont(font);
    } else if (fontType === 'secondary') {
      setCurrentSecondaryFont(font);
    }
  };

  // Handle style changes
  const handleStyleChange = (styleType, value) => {
    setSelectedStyles(prev => ({
      ...prev,
      [styleType]: value
    }));
  };

  // Handle typography sidebar toggle
  const handleTypographySidebarToggle = () => {
    setTypographySidebarCollapsed(!typographySidebarCollapsed);
  };

  // If template not found, redirect back
  if (!selectedTemplate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Template Not Found</h2>
          <button
            onClick={() => navigate('/typography/view')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Typography Templates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Main Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>

      {/* Typography Sidebar */}
      <div className="flex-shrink-0">
        <TypographySidebar
          isCollapsed={typographySidebarCollapsed}
          onToggle={handleTypographySidebarToggle}
          onFontChange={handleFontChange}
          onStyleChange={handleStyleChange}
          selectedFont={currentPrimaryFont}
          selectedStyles={selectedStyles}
        />
      </div>

      {/* Main Content - Typography Preview */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{selectedTemplate.title}</h1>
              <p className="text-gray-600">Preview and customize your typography</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/typography/view')}
                className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                Back to Templates
              </button>
              <button
                onClick={() => console.log('Export typography')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Typography Preview Container */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto">
          <TypographyPreview
            fontFamily={`${currentPrimaryFont} & ${currentSecondaryFont}`}
            primaryFont={currentPrimaryFont}
            secondaryFont={currentSecondaryFont}
          />
        </div>
      </div>
    </div>
  );
};

export default TypographyPreviewPage;
