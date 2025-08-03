import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TypographyGuide = () => {
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
                How to choose Typography
              </h1>
              <p className="text-lg leading-relaxed">
                Welcome to your go-to resource for mastering brand creation with our platform. 
                Whether you're starting fresh or refining your identity, our essential articles 
                cover everything from logo design and typography to layout creation and brand 
                inspiration. Designed for all skill levels, these clear, practical guides help 
                you understand each tool, apply branding best practices, and build consistently 
                — all while working on real projects.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              {/* Main Image Placeholder */}
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">Anatomy Of</div>
                <div className="text-4xl font-serif text-red-400">A Typeface</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Understand the Brand</h2>
              <p className="text-gray-700 mb-4">
                Before designing anything, take time to understand the brand's personality, values, and audience. Ask:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>What does the brand stand for?</li>
                <li>Who is the target audience?</li>
                <li>What feelings or qualities should the logo convey?</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This step builds the foundation for all creative decisions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Research and Gather Inspiration</h2>
              <p className="text-gray-700">
                Explore logos from similar industries, review design trends, and gather visual references. 
                Use platforms like Pinterest, Behance, or Dribbble to spark ideas — but remember, the goal 
                is inspiration, not imitation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sketch Ideas and Build Concepts</h2>
              <p className="text-gray-700 mb-6">
                Start by sketching out rough ideas — simple shapes, icons, or type treatments. Don't worry 
                about polish yet. Focus on exploring multiple directions. After sketching, choose 2–3 concepts 
                that best represent the brand and refine them digitally.
              </p>
              
              {/* Image placeholder for sketching workspace */}
              <div className="bg-gray-100 rounded-lg p-8 my-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Sketching workspace illustration</p>
                  <p className="text-sm">Image of design sketches and tools will be placed here</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Choose Typography and Color</h2>
              <p className="text-gray-700">
                Typography and color dramatically affect how a logo is perceived. Pick fonts that align 
                with the brand's tone (e.g., elegant, bold, playful), and build a color palette that 
                enhances recognition and emotional response. Limit your palette for clarity and adaptability.
              </p>
            </div>

            {/* Step 5 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Refine and Test</h2>
              <p className="text-gray-700">
                Test your logo concepts in various contexts — small sizes, in black and white, on different 
                backgrounds. Ask for feedback from peers or clients. Adjust spacing, proportions, or elements 
                until the design feels balanced and effective.
              </p>
            </div>

            {/* Step 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Deliver Final Files</h2>
              <p className="text-gray-700">
                Once approved, prepare the logo in multiple formats: vector (AI, SVG), raster (PNG, JPG), 
                and include versions for dark/light backgrounds. Also consider creating a simple style guide 
                to explain usage, colors, and spacing.
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

export default TypographyGuide;
