interface TypographySelectorProps {
  typography: {
    headingFont: string;
    bodyFont: string;
    scale: number;
  };
  onChange: (typography: Partial<TypographySelectorProps['typography']>) => void;
}

const fontOptions = {
  modern: [
    'Inter',
    'Roboto',
    'Open Sans',
    'Montserrat',
    'SF Pro Display'
  ],
  serif: [
    'Merriweather',
    'Playfair Display',
    'Lora',
    'Crimson Text',
    'Source Serif Pro'
  ],
  display: [
    'Poppins',
    'Quicksand',
    'Space Grotesk',
    'DM Sans',
    'Manrope'
  ]
};

const sampleText = {
  heading: 'Build Your Brand Identity',
  subheading: 'Create a Lasting Impression',
  body: 'Typography plays a crucial role in brand identity. Choose fonts that reflect your brand personality and ensure readability across all platforms. The right combination of fonts can create visual hierarchy and improve user experience.'
};

export default function TypographySelector({
  typography,
  onChange
}: TypographySelectorProps) {
  const handleFontChange = (
    type: 'headingFont' | 'bodyFont',
    value: string
  ) => {
    onChange({ [type]: value });
  };

  const handleScaleChange = (value: number) => {
    onChange({ scale: value });
  };

  const getFontSizeForScale = (baseSize: number) => {
    return Math.round(baseSize * typography.scale);
  };

  return (
    <div className="space-y-8">
      {/* Font Selection */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Heading Font
          </label>
          <select
            value={typography.headingFont}
            onChange={(e) => handleFontChange('headingFont', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] bg-white"
          >
            <optgroup label="Modern Sans">
              {fontOptions.modern.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </optgroup>
            <optgroup label="Serif">
              {fontOptions.serif.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </optgroup>
            <optgroup label="Display">
              {fontOptions.display.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Body Font
          </label>
          <select
            value={typography.bodyFont}
            onChange={(e) => handleFontChange('bodyFont', e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA] bg-white"
          >
            <optgroup label="Modern Sans">
              {fontOptions.modern.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </optgroup>
            <optgroup label="Serif">
              {fontOptions.serif.map(font => (
                <option key={font} value={font}>{font}</option>
              ))}
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type Scale ({typography.scale}x)
          </label>
          <input
            type="range"
            min={1}
            max={1.5}
            step={0.1}
            value={typography.scale}
            onChange={(e) => handleScaleChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1x</span>
            <span>1.5x</span>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="space-y-6">
        <h3 className="text-sm font-medium text-gray-900">Preview</h3>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
          <h1
            style={{
              fontFamily: typography.headingFont,
              fontSize: `${getFontSizeForScale(32)}px`,
              lineHeight: 1.2
            }}
            className="font-bold text-gray-900"
          >
            {sampleText.heading}
          </h1>
          
          <h2
            style={{
              fontFamily: typography.headingFont,
              fontSize: `${getFontSizeForScale(24)}px`,
              lineHeight: 1.3
            }}
            className="font-semibold text-gray-700"
          >
            {sampleText.subheading}
          </h2>
          
          <p
            style={{
              fontFamily: typography.bodyFont,
              fontSize: `${getFontSizeForScale(16)}px`,
              lineHeight: 1.6
            }}
            className="text-gray-600"
          >
            {sampleText.body}
          </p>
        </div>
      </div>

      {/* Typography Tips */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Typography Tips</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Use no more than 2-3 different fonts</li>
          <li>• Ensure strong contrast between heading and body fonts</li>
          <li>• Maintain consistent spacing and hierarchy</li>
          <li>• Test readability at different sizes</li>
        </ul>
      </div>
    </div>
  );
} 