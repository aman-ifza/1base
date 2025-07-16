import { useState } from 'react';

interface ColorPickerProps {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  onChange: (colors: Partial<ColorPickerProps['colors']>) => void;
}

interface ColorSwatch {
  id: keyof ColorPickerProps['colors'];
  label: string;
  description: string;
}

const colorSwatches: ColorSwatch[] = [
  {
    id: 'primary',
    label: 'Primary Color',
    description: 'Main brand color used for key elements and CTAs'
  },
  {
    id: 'secondary',
    label: 'Secondary Color',
    description: 'Supporting color for accents and secondary elements'
  },
  {
    id: 'accent',
    label: 'Accent Color',
    description: 'Highlight color for special elements and interactions'
  },
  {
    id: 'background',
    label: 'Background Color',
    description: 'Main background color for your brand materials'
  },
  {
    id: 'text',
    label: 'Text Color',
    description: 'Primary color for text content'
  }
];

const predefinedPalettes = [
  {
    name: 'Modern Purple',
    colors: {
      primary: '#3F27FA',
      secondary: '#FF6B6B',
      accent: '#4ECDC4',
      background: '#FFFFFF',
      text: '#1A1A1A'
    }
  },
  {
    name: 'Ocean Breeze',
    colors: {
      primary: '#2196F3',
      secondary: '#4CAF50',
      accent: '#FFC107',
      background: '#F5F5F5',
      text: '#212121'
    }
  },
  {
    name: 'Sunset Warm',
    colors: {
      primary: '#FF5722',
      secondary: '#FF9800',
      accent: '#FFEB3B',
      background: '#FAFAFA',
      text: '#333333'
    }
  }
];

export default function ColorPicker({ colors, onChange }: ColorPickerProps) {
  const [activeColor, setActiveColor] = useState<keyof ColorPickerProps['colors']>('primary');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ [activeColor]: e.target.value });
  };

  const applyPalette = (palette: typeof predefinedPalettes[0]) => {
    onChange(palette.colors);
  };

  return (
    <div className="space-y-6">
      {/* Color Swatches */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Brand Colors</h3>
        <div className="grid gap-3">
          {colorSwatches.map(swatch => (
            <button
              key={swatch.id}
              onClick={() => setActiveColor(swatch.id)}
              className={`w-full p-3 rounded-lg border transition ${
                activeColor === swatch.id
                  ? 'border-[#3F27FA] bg-[#3F27FA]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg shadow-sm border border-gray-200"
                  style={{ backgroundColor: colors[swatch.id] }}
                />
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-900">{swatch.label}</p>
                  <p className="text-sm text-gray-500">{colors[swatch.id]}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Color Input */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700">
          {colorSwatches.find(s => s.id === activeColor)?.label}
        </label>
        <input
          type="color"
          value={colors[activeColor]}
          onChange={handleColorChange}
          className="w-full h-10 rounded-lg cursor-pointer"
        />
        <p className="text-sm text-gray-500">
          {colorSwatches.find(s => s.id === activeColor)?.description}
        </p>
      </div>

      {/* Predefined Palettes */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Predefined Palettes</h3>
        <div className="grid gap-2">
          {predefinedPalettes.map(palette => (
            <button
              key={palette.name}
              onClick={() => applyPalette(palette)}
              className="w-full p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition"
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {Object.values(palette.colors).map((color, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 rounded-full shadow-sm border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="flex-1 text-left text-sm font-medium text-gray-700">
                  {palette.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Color Harmony Tips */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Color Tips</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Use your primary color for main actions and branding</li>
          <li>• Secondary colors should complement, not compete</li>
          <li>• Ensure sufficient contrast for accessibility</li>
          <li>• Test your colors in different contexts</li>
        </ul>
      </div>
    </div>
  );
} 