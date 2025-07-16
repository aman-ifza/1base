interface LogoCustomizerProps {
  logo: {
    text: string;
    icon: string | null;
    style: 'minimal' | 'modern' | 'classic' | 'bold';
    layout: 'icon-left' | 'icon-top' | 'text-only';
  };
  onChange: (logo: Partial<LogoCustomizerProps['logo']>) => void;
}

const logoStyles = [
  {
    id: 'minimal' as const,
    label: 'Minimal',
    description: 'Clean and simple design with focus on typography'
  },
  {
    id: 'modern' as const,
    label: 'Modern',
    description: 'Contemporary style with geometric elements'
  },
  {
    id: 'classic' as const,
    label: 'Classic',
    description: 'Timeless design with traditional elements'
  },
  {
    id: 'bold' as const,
    label: 'Bold',
    description: 'Strong and impactful design that stands out'
  }
];

const logoLayouts = [
  {
    id: 'icon-left' as const,
    label: 'Icon Left',
    description: 'Icon placed to the left of text'
  },
  {
    id: 'icon-top' as const,
    label: 'Icon Top',
    description: 'Icon stacked above text'
  },
  {
    id: 'text-only' as const,
    label: 'Text Only',
    description: 'Typography-focused without icon'
  }
];

const defaultIcons = [
  {
    id: 'geometric',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="currentColor"
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"
        />
      </svg>
    )
  },
  {
    id: 'abstract',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          fill="white"
          d="M8 12l4-4 4 4-4 4-4-4z"
        />
      </svg>
    )
  },
  {
    id: 'minimal',
    svg: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
      </svg>
    )
  }
];

export default function LogoCustomizer({
  logo,
  onChange
}: LogoCustomizerProps) {
  const handleTextChange = (value: string) => {
    onChange({ text: value });
  };

  const handleStyleChange = (value: typeof logo.style) => {
    onChange({ style: value });
  };

  const handleLayoutChange = (value: typeof logo.layout) => {
    onChange({ layout: value });
  };

  const getLogoPreviewClasses = () => {
    const baseClasses = 'transition-all duration-300 ';
    const styleClasses = {
      minimal: 'font-light tracking-wide',
      modern: 'font-semibold tracking-normal',
      classic: 'font-serif tracking-normal',
      bold: 'font-black tracking-tight'
    };
    return baseClasses + styleClasses[logo.style];
  };

  return (
    <div className="space-y-8">
      {/* Logo Text */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Logo Text
        </label>
        <input
          type="text"
          value={logo.text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Enter your brand name"
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3F27FA]/20 focus:border-[#3F27FA]"
        />
      </div>

      {/* Logo Style */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Logo Style
        </label>
        <div className="grid grid-cols-2 gap-3">
          {logoStyles.map(style => (
            <button
              key={style.id}
              onClick={() => handleStyleChange(style.id)}
              className={`p-3 rounded-lg border text-left transition ${
                logo.style === style.id
                  ? 'border-[#3F27FA] bg-[#3F27FA]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <p className="font-medium text-gray-900">{style.label}</p>
              <p className="text-xs text-gray-500 mt-1">{style.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Logo Layout */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Logo Layout
        </label>
        <div className="grid grid-cols-3 gap-3">
          {logoLayouts.map(layout => (
            <button
              key={layout.id}
              onClick={() => handleLayoutChange(layout.id)}
              className={`p-3 rounded-lg border text-center transition ${
                logo.layout === layout.id
                  ? 'border-[#3F27FA] bg-[#3F27FA]/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="h-12 flex items-center justify-center text-gray-400">
                {layout.id === 'icon-left' && (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-current rounded" />
                    <div className="w-12 h-1 bg-current rounded" />
                  </div>
                )}
                {layout.id === 'icon-top' && (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-4 h-4 bg-current rounded" />
                    <div className="w-12 h-1 bg-current rounded" />
                  </div>
                )}
                {layout.id === 'text-only' && (
                  <div className="w-16 h-1 bg-current rounded" />
                )}
              </div>
              <p className="text-xs font-medium text-gray-900 mt-2">{layout.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Icon Selection */}
      {logo.layout !== 'text-only' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Icon Style
          </label>
          <div className="grid grid-cols-3 gap-3">
            {defaultIcons.map(icon => (
              <button
                key={icon.id}
                onClick={() => onChange({ icon: icon.id })}
                className={`p-4 rounded-lg border aspect-square transition ${
                  logo.icon === icon.id
                    ? 'border-[#3F27FA] bg-[#3F27FA]/5 text-[#3F27FA]'
                    : 'border-gray-200 hover:border-gray-300 text-gray-400'
                }`}
              >
                {icon.svg}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Logo Preview */}
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Preview</h3>
        <div className="p-8 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
          <div
            className={`flex ${
              logo.layout === 'icon-top'
                ? 'flex-col items-center gap-4'
                : 'items-center gap-3'
            }`}
          >
            {logo.layout !== 'text-only' && logo.icon && (
              <div className="w-12 h-12 text-[#3F27FA]">
                {defaultIcons.find(i => i.id === logo.icon)?.svg}
              </div>
            )}
            <span
              className={`text-2xl text-gray-900 ${getLogoPreviewClasses()}`}
            >
              {logo.text || 'Your Brand'}
            </span>
          </div>
        </div>
      </div>

      {/* Logo Design Tips */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Logo Design Tips</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Keep it simple and memorable</li>
          <li>• Ensure it works in different sizes</li>
          <li>• Consider black & white versions</li>
          <li>• Maintain consistent proportions</li>
        </ul>
      </div>
    </div>
  );
} 