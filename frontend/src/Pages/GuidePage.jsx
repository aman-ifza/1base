import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BrandSetupCard from '../components/BrandSetupCard';
import BrandSetupCardImageLeft from '../components/BrandSetupCardImageLeft';
import hero from "../assets/hero.jpg";
import Build from '../assets/Build.jpg';
import typography from '../assets/typography.png';
import canvas from '../assets/canvas.png';

const GuidePage = () => {
    // Custom Hero Section for Guide Page
    const GuideHero = () => {
        return (
            <section className="w-full bg-[#171568] px-6 py-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
                    <div className="text-white max-w-xl space-y-6 md:text-left text-center">
                        <h1 className="text-3xl md:text-4xl font-semibold">
                            Learn How to Master Your Brand
                        </h1>
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                            Welcome to your go-to resource for mastering brand creation with our platform. Whether you're starting fresh or refining your identity, our essential articles cover everything from logo design and typography to layout creation and brand inspiration. Designed for all skill levels, these clear, practical guides help you understand each tool, apply branding best practices, and build consistently — all while working on real projects.
                        </p>

                        <div className="pt-2">
                            <a
                                href="#"
                                className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-md transition duration-300"
                            >
                                GET STARTED →
                            </a>
                        </div>
                    </div>
                    
                    <div className="hidden md:block">
                        <img src={hero} alt="hero" className="max-w-md" />
                    </div> 
                </div>
            </section>
        );
    };

    // Custom Body Section for Guide Page (only 3 cards)
    const GuideBody = () => {
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
            <section className="bg-white min-h-screen py-16 px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        How does it work
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        We empower small businesses to create professional, high-quality brands in minutes – 
                        combining the speed of AI with the precision of expert design.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="space-y-12 max-w-6xl mx-auto">
                    {cardData.map((card, index) => (
                        card.type === 'right' ? (
                            // Custom right-aligned card with swapped colors
                            <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl max-w-6xl mx-auto">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left side - Content */}
                                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                            {card.description}
                                        </p>
                                        <button 
                                            onClick={() => console.log(`Card ${index + 1} clicked`)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 self-start"
                                        >
                                            {card.buttonText} →
                                        </button>
                                    </div>
                                    
                                    {/* Right side - Image */}
                                    <div className="lg:w-1/2 bg-gray-200 relative min-h-[300px]">
                                        <img 
                                            src={card.image} 
                                            alt={card.title} 
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Custom left-aligned card with swapped colors
                            <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl max-w-6xl mx-auto">
                                <div className="flex flex-col lg:flex-row">
                                    {/* Left side - Image */}
                                    <div className="lg:w-1/2 bg-gray-200 relative min-h-[300px]">
                                        <img 
                                            src={card.image} 
                                            alt={card.title} 
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Right side - Content */}
                                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                            {card.description}
                                        </p>
                                        <button 
                                            onClick={() => console.log(`Card ${index + 1} clicked`)}
                                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 self-start"
                                        >
                                            {card.buttonText} →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </section>
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <GuideHero />
            <GuideBody />
            <Footer />
        </div>
    );
}

export default GuidePage;
