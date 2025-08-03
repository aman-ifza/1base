import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BuildGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#5543E8] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                How to Build Your Brand Identity
              </h1>
              <p className="text-lg leading-relaxed">
                Learn how to create a comprehensive brand identity system that resonates with your 
                audience and stands out in the market. From strategy to execution, this guide covers 
                all essential elements needed to build a memorable and effective brand that drives 
                business growth and customer loyalty.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              {/* Main Image Placeholder */}
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">Brand</div>
                <div className="text-4xl font-serif text-blue-400">Building</div>
                <div className="text-2xl mt-2">Process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Define Your Brand Strategy</h2>
              <p className="text-gray-700 mb-4">
                Start by establishing a clear brand strategy that will guide all your decisions. Consider these key elements:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Mission statement and core values</li>
                <li>Target audience demographics and psychographics</li>
                <li>Unique value proposition</li>
                <li>Brand personality and voice</li>
              </ul>
              <p className="text-gray-700 mt-4">
                A solid strategy ensures consistency across all brand touchpoints and helps make informed design decisions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Analyze Your Competition</h2>
              <p className="text-gray-700">
                Conduct thorough competitor research to understand the landscape and identify opportunities 
                for differentiation. Study their visual identity, messaging, and positioning to find gaps 
                you can fill and ensure your brand stands out in the market.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Create Your Visual Identity System</h2>
              <p className="text-gray-700 mb-6">
                Develop a cohesive visual identity that includes logo design, color palette, typography, 
                imagery style, and graphic elements. This system should reflect your brand personality 
                and appeal to your target audience while ensuring scalability across different mediums.
              </p>
              
              {/* Image placeholder for visual identity */}
              <div className="bg-gray-100 rounded-lg p-8 my-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Visual Identity System Examples</p>
                  <p className="text-sm">Showcase of brand elements: logos, colors, typography, patterns</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Develop Brand Guidelines</h2>
              <p className="text-gray-700">
                Create comprehensive brand guidelines that document how your brand should be used across 
                all applications. Include logo usage rules, color specifications, typography guidelines, 
                tone of voice, and examples of proper implementation to maintain consistency.
              </p>
            </div>

            {/* Step 5 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Apply Across All Touchpoints</h2>
              <p className="text-gray-700">
                Implement your brand identity consistently across all customer touchpoints including 
                website, social media, packaging, business cards, signage, and marketing materials. 
                Consistency builds recognition and trust with your audience.
              </p>
            </div>

            {/* Step 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Monitor and Evolve</h2>
              <p className="text-gray-700">
                Regularly assess your brand's performance and gather feedback from customers and stakeholders. 
                Be prepared to evolve your brand as your business grows and market conditions change, while 
                maintaining the core elements that make your brand recognizable and trusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BuildGuide;
