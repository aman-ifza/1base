import React from 'react';

// Individual Card Component - This is what you can replicate multiple times
const BrandSetupCard = ({ 
  title = "FAST TRACK YOUR BRAND SETUP",
  description = "Define your brand's identity with tailored tools to align visuals, tone, and mission all in one place.",
  buttonText = "GET STARTED",
  onButtonClick = () => {}
}) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-xl max-w-6xl mx-auto min-h-[400px]">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Content */}
        <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center min-h-[400px]">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {description}
          </p>
          <button 
            onClick={onButtonClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 self-start"
          >
            {buttonText} →
          </button>
        </div>
        
        {/* Right side - Image placeholder */}
        <div className="lg:w-1/2 bg-gray-200 flex items-center justify-center min-h-[400px]">
          <p className="text-gray-600 text-lg font-medium">Image to be inserted here</p>
        </div>
      </div>
    </div>
  );
};

// Main Section Component with dark background
const Main = () => {
  // Sample data for multiple cards - you can modify this
  const cardData = [
    {
      title: "FAST TRACK YOUR BRAND SETUP",
      description: "Define your brand's identity with tailored tools to align visuals, tone, and mission all in one place.",
      buttonText: "GET STARTED"
    },
    {
      title: "STREAMLINE YOUR WORKFLOW",
      description: "Optimize your creative process with automated tools that save time and enhance productivity.",
      buttonText: "LEARN MORE"
    },
    {
      title: "SCALE YOUR BUSINESS",
      description: "Grow your brand with enterprise-level solutions designed for expanding businesses.",
      buttonText: "EXPLORE"
    }
  ];

  return (
    <section className="bg-gray-900 min-h-screen py-16 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          How does it work
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          We empower small businesses to create professional, high-quality brands in minutes – 
          combining the speed of AI with the precision of expert design.
        </p>
      </div>

      {/* Cards Container */}
      <div className="space-y-12 max-w-6xl mx-auto">
        {cardData.map((card, index) => (
          <BrandSetupCard
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            onButtonClick={() => console.log(`Card ${index + 1} clicked`)}
          />
        ))}
      </div>
    </section>
  );
};

export default Main;