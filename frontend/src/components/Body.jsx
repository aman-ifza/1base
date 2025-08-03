import React from 'react';
import { useNavigate } from 'react-router-dom';
import BrandSetupCard from './BrandSetupCard';
import BrandSetupCardImageLeft from './BrandSetupCardImageLeft';
import Build from '../assets/Build.jpg';
import typography from '../assets/typography.png';
import canvas from '../assets/canvas.png';
import logo from '../assets/logo.png';
import inspiration from '../assets/inspiration.png';
import api from '../assets/api.png';

// Main Section Component with dark background
const Body = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      type: 'right',
      title: "FAST TRACK YOUR BRAND SETUP",
      description: "Define your brand's identity with tailored tools to align visuals, tone, and mission all in one place.",
      buttonText: "ENGAGE CUSTOMERS",
      image: Build,
      route: '/build'
    },
    {
      type: 'left',
      title: "Typography",
      description: "Choose and customize brand fonts to ensure consistent and impactful text styling across all assets.",
      buttonText: "EXPLORE TYPOGRAPHY",
      image: typography,
      route: '/typography/view'
    },
    {
      type: 'right',
      title: "Canvas",
      description: "Design freely or start with smart layouts the canvas adapts to your brand guidelines automatically.",
      buttonText: "START AUTOMATING",
      image: canvas,
      route: '/canvas'
    },
    {
      type: 'left',
      title: "Logo",
      description: "Create your own unique logo with our easy-to-use design tool. Choose from a variety of icons, fonts, and colors, then customize every detail to match your brand's personality.",
      buttonText: "DESIGN LOGOS",
      image: logo,
      route: '/logo'
    },
    {
      type: 'right',
      title: "Inspiration",
      description: "Explore curated designs and content ideas to spark creativity and keep your branding fresh.",
      buttonText: "GET INSPIRED",
      image: inspiration,
      route: '/inspiration'
    },
    {
      type: 'left',
      title: "API",
      description: "Integrate our features seamlessly into your own apps with our robust and easy-to-use API. Access logo generation, customization, and asset management automate your workflow and build at scale with complete flexibility.",
      buttonText: "EXPLORE API",
      image: api,
      route: '/api'
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
              onButtonClick={() => navigate(card.route)}
            />
          ) : (
            <BrandSetupCardImageLeft
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              image={card.image}
              onButtonClick={() => navigate(card.route)}
            />
          )
        ))}
      </div>
    </section>
  );
};

export default Body;