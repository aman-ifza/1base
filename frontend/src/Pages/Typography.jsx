import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import TypographySidebar from '../components/TypographySidebar';
import TypographyTemplate from '../components/TypographyTemplate';

const Typography = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');

  // Mock typography data
  const typographyData = [
    {
      id: 1,
      name: "Modern Sans",
      category: "Corporate",
      style: "Sans Serif",
      preview: "Aa Bb Cc",
      fontFamily: "font-sans",
      description: "Clean and professional"
    },
    {
      id: 2,
      name: "Classic Serif",
      category: "Traditional",
      style: "Serif",
      preview: "Aa Bb Cc",
      fontFamily: "font-serif",
      description: "Elegant and timeless"
    },
    {
      id: 3,
      name: "Bold Display",
      category: "Creative",
      style: "Display",
      preview: "Aa Bb Cc",
      fontFamily: "font-bold",
      description: "Eye-catching headlines"
    },
    {
      id: 4,
      name: "Script Elegant",
      category: "Luxury",
      style: "Script",
      preview: "Aa Bb Cc",
      fontFamily: "font-serif",
      description: "Sophisticated script"
    },
    {
      id: 5,
      name: "Tech Mono",
      category: "Tech",
      style: "Monospace",
      preview: "Aa Bb Cc",
      fontFamily: "font-mono",
      description: "Modern monospace"
    },
    {
      id: 6,
      name: "Casual Script",
      category: "Creative",
      style: "Script",
      preview: "Aa Bb Cc",
      fontFamily: "font-serif",
      description: "Friendly and approachable"
    },
    {
      id: 7,
      name: "Corporate Clean",
      category: "Corporate",
      style: "Sans Serif",
      preview: "Aa Bb Cc",
      fontFamily: "font-sans",
      description: "Professional clarity"
    },
    {
      id: 8,
      name: "Artistic Bold",
      category: "Creative",
      style: "Display",
      preview: "Aa Bb Cc",
      fontFamily: "font-bold",
      description: "Creative expression"
    }
  ];

  const filteredTypography = typographyData.filter(font => {
    const categoryMatch = selectedCategory === 'All' || font.category === selectedCategory;
    const styleMatch = selectedStyle === 'All' || font.style === selectedStyle;
    return categoryMatch && styleMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="lg:ml-64">
        <div className="flex">
          {/* Typography Sidebar */}
          <TypographySidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
          
          {/* Main Typography Content */}
          <main className="flex-1 p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Typography Gallery
              </h1>
              <p className="text-gray-600 text-lg">
                Discover the perfect fonts for your brand identity. Choose from our curated collection of typography styles.
              </p>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredTypography.length} typography options
              </p>
            </div>

            {/* Typography Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTypography.map((font) => (
                <TypographyTemplate
                  key={font.id}
                  font={font}
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="mt-12 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Load More Typography
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Typography;
