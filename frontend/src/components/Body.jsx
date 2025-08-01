import React from 'react';
import BrandSetupCard from './BrandSetupCard';
import BrandSetupCardImageLeft from './BrandSetupCardImageLeft';
import Build from '../assets/Build.jpg';
import typography from '../assets/typography.png';
import canvas from '../assets/canvas.png';
import Logo from '../assets/Logo.png';
import inspiration from '../assets/inspiration.png';
import api from '../assets/api.png';

// Main Section Component with dark background
const Body = () => {
  const cardData = [
    {
      type: 'right',
      title: "CUSTOMER ENGAGEMENT",
      description: "Build stronger relationships with your customers through personalized engagement tools. Create meaningful interactions that drive loyalty and business growth.",
      buttonText: "ENGAGE CUSTOMERS",
      image: Build
    },
    {
      type: 'left',
      title: "BRAND IDENTITY CREATION",
      description: "Create a distinctive brand identity that sets you apart from competitors. Our tools help you develop a unique voice and visual style that resonates with your target audience.",
      buttonText: "EXPLORE BRANDING",
      image: typography
    },
    {
      type: 'right',
      title: "MARKETING AUTOMATION",
      description: "Streamline your marketing efforts with powerful automation tools. Schedule posts, analyze performance, and engage with your audience across multiple platforms effortlessly.",
      buttonText: "START AUTOMATING",
      image: canvas
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
          card.type === 'right' ? (
            <BrandSetupCard
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              image={card.image}
              onButtonClick={() => console.log(`Card ${index + 1} clicked`)}
            />
          ) : (
            <BrandSetupCardImageLeft
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              image={card.image}
              onButtonClick={() => console.log(`Card ${index + 1} clicked`)}
            />
          )
        ))}
      </div>
    </section>
  );
};

export default Body;