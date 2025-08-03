import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CanvasGuide = () => {
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
                Master the Design Canvas
              </h1>
              <p className="text-lg leading-relaxed">
                Unlock the full potential of our design canvas with this comprehensive guide. Learn 
                advanced techniques, shortcuts, and best practices to create stunning designs efficiently. 
                From basic operations to complex compositions, this guide will help you become a 
                canvas expert and streamline your creative workflow.
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              {/* Main Image Placeholder */}
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">Design</div>
                <div className="text-4xl font-serif text-green-400">Canvas</div>
                <div className="text-2xl mt-2">Mastery</div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Understanding Canvas Basics</h2>
              <p className="text-gray-700 mb-4">
                Familiarize yourself with the canvas interface and fundamental tools. Master these essential elements:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Canvas dimensions and aspect ratios</li>
                <li>Layer management and organization</li>
                <li>Basic selection and transformation tools</li>
                <li>Grid systems and alignment guides</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Understanding these basics will provide a solid foundation for more advanced techniques.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Working with Elements and Objects</h2>
              <p className="text-gray-700">
                Learn to efficiently create, manipulate, and organize design elements. Practice adding 
                text, shapes, images, and graphics while maintaining proper hierarchy and composition. 
                Master grouping, duplicating, and aligning objects for professional-looking designs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Advanced Design Techniques</h2>
              <p className="text-gray-700 mb-6">
                Explore advanced features like masks, blending modes, effects, and filters. Learn to 
                create complex compositions using layering techniques, transparency, and creative effects 
                that will elevate your designs to a professional level.
              </p>
              
              {/* Image placeholder for canvas workspace */}
              <div className="bg-gray-100 rounded-lg p-8 my-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Canvas Interface Overview</p>
                  <p className="text-sm">Screenshot of the design canvas with tools and panels highlighted</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Optimize Your Workflow</h2>
              <p className="text-gray-700">
                Develop efficient workflows using keyboard shortcuts, templates, and reusable components. 
                Learn to set up custom libraries, create style guides, and use automation features to 
                speed up your design process while maintaining consistency.
              </p>
            </div>

            {/* Step 5 */}
            <div className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Collaboration and Sharing</h2>
              <p className="text-gray-700">
                Master collaborative features including real-time editing, commenting, version control, 
                and sharing options. Learn how to work effectively with team members, gather feedback, 
                and manage design iterations efficiently.
              </p>
            </div>

            {/* Step 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Export and Deployment</h2>
              <p className="text-gray-700">
                Learn the best practices for exporting designs in various formats for different use cases. 
                Understand resolution requirements, color profiles, and file optimization techniques to 
                ensure your designs look perfect across all platforms and media.
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

export default CanvasGuide;
