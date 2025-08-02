import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

const TypographyPreview = ({ 
  fontFamily = "Fira Code & Work Sans",
  primaryFont = "Fira Code",
  secondaryFont = "Work Sans"
}) => {
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

  // Typography content with various font sizes and styles
  const typographyContent = (
    <div className="bg-white pt-8 px-8 pb-8" style={{ fontFamily: secondaryFont + ', sans-serif' }}>
      
      {/* Headings Section */}
      <div className="mb-12">
        <h1 className="text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: primaryFont + ', monospace' }}>
          Overlaid the jeepers uselessly twice
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </p>
      </div>

      {/* Medium Headings */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: primaryFont + ', monospace' }}>
          On deer horse aboard tritely yikes and much
        </h2>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
        </p>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of <span className="text-blue-600 underline">Alphabet Village</span> and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.
        </p>
      </div>

      {/* Smaller Headings */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: primaryFont + ', monospace' }}>
          Overlaid the jeepers uselessly much excluding
        </h3>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with <span className="text-blue-600">Longe and Parole</span> and dragged her into their agency, where they abused her for their projects again and again. And if she hasn't been rewritten, then they are still using her.
        </p>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
      </div>

      {/* List Section */}
      <div className="mb-12">
        <h4 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: primaryFont + ', monospace' }}>
          According a funnily until pre-set or arrogant well cheerful
        </h4>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="text-base text-gray-600">The Big Oxmox advised her not to do so, because there were thousands of bad Commas</li>
          <li className="text-base text-gray-600">Wild Question Marks and devious Semikoli, but the <span className="font-semibold">Little Blind Text</span> didn't listen</li>
          <li className="text-base text-gray-600">She packed her seven versalia, put her initial into the belt and made herself on the way</li>
        </ul>
        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.
        </p>
      </div>

      {/* Quote Section */}
      <div className="mb-12 bg-gray-50 p-8 rounded-lg border-l-4 border-blue-600">
        <blockquote className="text-xl italic text-gray-700 mb-4" style={{ fontFamily: primaryFont + ', monospace' }}>
          "Silent delightfully including because before one up barring chameleon"
        </blockquote>
        <cite className="text-sm text-gray-500">— Typography Sample</cite>
      </div>

      {/* Small Text Section */}
      <div className="mb-12">
        <h5 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: primaryFont + ', monospace' }}>
          Slapped cozy a that lightheartedly and far
        </h5>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          The copy warned the <span className="font-semibold">Little Blind Text</span>, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">
          But nothing the copy said could convince her and so it didn't take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects <span className="underline">again and again</span>.
        </p>
      </div>

      {/* Font Showcase */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 border rounded-lg">
          <h6 className="text-lg font-bold mb-4 text-gray-900" style={{ fontFamily: primaryFont + ', monospace' }}>
            Primary Font: {primaryFont}
          </h6>
          <div className="space-y-2">
            <p className="text-3xl font-bold" style={{ fontFamily: primaryFont + ', monospace' }}>Heading Large</p>
            <p className="text-xl font-semibold" style={{ fontFamily: primaryFont + ', monospace' }}>Heading Medium</p>
            <p className="text-lg font-medium" style={{ fontFamily: primaryFont + ', monospace' }}>Heading Small</p>
            <p className="text-base" style={{ fontFamily: primaryFont + ', monospace' }}>Body Text Regular</p>
          </div>
        </div>
        
        <div className="bg-white p-6 border rounded-lg">
          <h6 className="text-lg font-bold mb-4 text-gray-900" style={{ fontFamily: secondaryFont + ', sans-serif' }}>
            Secondary Font: {secondaryFont}
          </h6>
          <div className="space-y-2">
            <p className="text-3xl font-bold" style={{ fontFamily: secondaryFont + ', sans-serif' }}>Heading Large</p>
            <p className="text-xl font-semibold" style={{ fontFamily: secondaryFont + ', sans-serif' }}>Heading Medium</p>
            <p className="text-lg font-medium" style={{ fontFamily: secondaryFont + ', sans-serif' }}>Heading Small</p>
            <p className="text-base" style={{ fontFamily: secondaryFont + ', sans-serif' }}>Body Text Regular</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Typography Preview • {fontFamily} • Sample Text Layout
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto h-screen flex flex-col bg-gray-800/10 backdrop-blur-md rounded-lg border border-gray-200/20 shadow-xl mt-8">
      {/* Header with Device Selection and Action Buttons */}
      <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200/20">
        {/* Back Button */}
        <button 
          onClick={() => window.history.back()} 
          className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back
        </button>
        <h2 className="text-xl font-semibold text-white">Typography Preview</h2>
        
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
              Edit Typography
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg">
              Use This Typography
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Preview Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-center h-full">
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
                    https://example.com/typography-preview
                  </div>
                </div>
              </div>
            )}
            
            {/* Typography Content */}
            <div className="w-full overflow-auto h-[600px]">
              {typographyContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyPreview;
