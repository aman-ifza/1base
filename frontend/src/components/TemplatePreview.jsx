import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

const TemplatePreview = ({ templateImage = null }) => {
  const [viewMode, setViewMode] = useState('desktop');

  const getViewportStyles = () => {
    switch (viewMode) {
      case 'mobile':
        return { width: '375px', minHeight: '100%' };
      case 'tablet':
        return { width: '768px', minHeight: '100%' };
      case 'desktop':
      default:
        return { width: '100%', minHeight: '100%' };
    }
  };

  const getScaleClass = () => {
    switch (viewMode) {
      case 'mobile':
        return 'scale-100';
      case 'tablet':
        return 'scale-90';
      case 'desktop':
      default:
        return 'scale-100';
    }
  };

  // Sample template content
  const templateContent = (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className={`relative px-4 ${viewMode === 'mobile' ? 'py-8' : 'py-16'} text-center`}>
          <h1 className={`font-bold mb-4 ${viewMode === 'mobile' ? 'text-3xl' : 'text-5xl'}`}>
            GROW YOUR COMPANY
          </h1>
          <p className={`mb-2 ${viewMode === 'mobile' ? 'text-lg' : 'text-xl'}`}>with marketing</p>
          <p className={`mb-8 ${viewMode === 'mobile' ? 'text-lg' : 'text-xl'}`}>strategies that work</p>
          <p className="text-sm opacity-90">Benefit from our tried and tested approach</p>
          <p className="text-xs mt-8 opacity-75">MGD Digital Co.</p>
        </div>
      </div>

      {/* Partnership Section */}
      <div className={`bg-blue-500 text-white px-4 ${viewMode === 'mobile' ? 'py-8' : 'py-16'}`}>
        <div className={`max-w-4xl mx-auto ${viewMode === 'mobile' ? 'block' : 'flex items-center gap-8'}`}>
          <div className={`bg-white rounded-lg overflow-hidden flex-shrink-0 ${
            viewMode === 'mobile' ? 'w-full h-48 mb-6' : 'w-48 h-64'
          }`}>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="w-24 h-24 bg-gray-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className={`font-bold mb-6 ${viewMode === 'mobile' ? 'text-2xl' : 'text-4xl'}`}>
              We partner with you to drive business growth.
            </h2>
            <p className={`opacity-90 ${viewMode === 'mobile' ? 'text-base' : 'text-lg'}`}>
              This text block gives a brief overview of your company. Share your philosophy, vision, or mission here.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className={`px-4 bg-gray-50 ${viewMode === 'mobile' ? 'py-8' : 'py-16'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`font-bold text-blue-600 mb-8 ${viewMode === 'mobile' ? 'text-2xl' : 'text-4xl'}`}>
            Dive into our services
          </h2>
          <div className={`gap-6 ${
            viewMode === 'mobile' ? 'grid grid-cols-1' : 
            viewMode === 'tablet' ? 'grid grid-cols-1' : 
            'grid md:grid-cols-2'
          }`}>
            {[
              { title: 'Social Media', desc: 'Enhance your online presence with our comprehensive social media management services.' },
              { title: 'Content Marketing', desc: 'Create engaging content that resonates with your audience and drives conversions.' },
              { title: 'SEO Optimization', desc: 'Improve your search rankings and increase organic traffic to your website.' },
              { title: 'Digital Strategy', desc: 'Develop comprehensive digital strategies tailored to your business goals.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className={`font-semibold text-blue-600 mb-4 ${viewMode === 'mobile' ? 'text-xl' : 'text-2xl'}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <button className="text-blue-600 font-medium hover:underline">Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className={`px-4 bg-blue-600 text-white text-center ${viewMode === 'mobile' ? 'py-8' : 'py-16'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`font-bold mb-6 ${viewMode === 'mobile' ? 'text-2xl' : 'text-4xl'}`}>
            Ready to get started?
          </h2>
          <p className={`mb-8 opacity-90 ${viewMode === 'mobile' ? 'text-lg' : 'text-xl'}`}>
            Contact us today to discuss how we can help grow your business.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2024 MGD Digital Co. All rights reserved.</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto h-screen flex flex-col bg-gray-800/10 backdrop-blur-md rounded-lg border border-gray-200/20 shadow-xl mt-8">
      {/* Header with Device Selection and Action Buttons */}
      <div className="px-6 py-4 flex items-center justify-between relative border-b border-gray-200/20">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()} 
          className="absolute left-6 top-5 flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        <h2 className="text-xl font-semibold text-white mx-auto">Template Preview</h2>
        
        <div className="flex items-center gap-4">
          {/* Device Toggle Buttons */}
          <div className="flex bg-gray-800/30 rounded-lg p-1">
            <button
              onClick={() => setViewMode('desktop')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'desktop'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Monitor size={16} />
              Desktop
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'tablet'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Tablet size={16} />
              Tablet
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'mobile'
                  ? 'bg-white/10 text-white shadow-sm'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Smartphone size={16} />
              Mobile
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
              Edit Template
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
              Use This Template
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Preview Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-center min-h-full">
          {/* Device Frame */}
          <div className={`bg-white/95 backdrop-blur-sm rounded-lg shadow-xl ring-1 ring-white/20 overflow-hidden ${getScaleClass()} transition-all duration-300`} 
               style={getViewportStyles()}>
            {/* Browser Bar (only for desktop) */}
            {viewMode === 'desktop' && (
              <div className="bg-gray-200 px-4 py-2 flex items-center gap-2 border-b">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-3 py-1 text-sm text-gray-600">
                    https://example.com/template-preview
                  </div>
                </div>
              </div>
            )}
            
            {/* Template Content */}
            <div className="w-full">
              {templateImage ? (
                <img 
                  src={templateImage} 
                  alt="Template Preview" 
                  className="w-full h-auto block"
                />
              ) : (
                templateContent
              )}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default TemplatePreview;