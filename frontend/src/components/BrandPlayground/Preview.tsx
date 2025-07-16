interface PreviewProps {
  brandElements: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    typography: {
      headingFont: string;
      bodyFont: string;
      scale: number;
    };
    logo: {
      text: string;
      icon: string | null;
      style: string;
      layout: string;
    };
  };
  showPreviewOptions: boolean;
}

const previewContexts = [
  {
    id: 'website',
    label: 'Website',
    icon: '🌐'
  },
  {
    id: 'mobile',
    label: 'Mobile App',
    icon: '📱'
  },
  {
    id: 'social',
    label: 'Social Media',
    icon: '📱'
  },
  {
    id: 'print',
    label: 'Print Materials',
    icon: '📄'
  }
];

export default function Preview({
  brandElements,
  showPreviewOptions
}: PreviewProps) {
  const { colors, typography, logo } = brandElements;

  const WebsitePreview = () => (
    <div className="rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div
        className="p-4"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-white text-xl font-bold">{logo.text}</span>
          </div>
          <div className="flex gap-4">
            <span className="text-white/90">Home</span>
            <span className="text-white/90">About</span>
            <span className="text-white/90">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="p-8"
        style={{ backgroundColor: colors.background }}
      >
        <h1
          className="text-3xl font-bold mb-4"
          style={{
            color: colors.text,
            fontFamily: typography.headingFont
          }}
        >
          Welcome to {logo.text}
        </h1>
        <p
          className="mb-6"
          style={{
            color: colors.text,
            fontFamily: typography.bodyFont
          }}
        >
          Experience the future of branding with our innovative platform.
        </p>
        <button
          className="px-6 py-2 rounded-lg text-white"
          style={{ backgroundColor: colors.primary }}
        >
          Get Started
        </button>
      </div>
    </div>
  );

  const MobilePreview = () => (
    <div
      className="w-64 h-[480px] rounded-3xl overflow-hidden shadow-lg mx-auto"
      style={{ backgroundColor: colors.background }}
    >
      {/* Status Bar */}
      <div className="h-6 bg-gray-900" />

      {/* App Header */}
      <div
        className="p-4"
        style={{ backgroundColor: colors.primary }}
      >
        <div className="flex items-center justify-between">
          <span className="text-white text-lg font-semibold">{logo.text}</span>
          <span className="text-white">⚙️</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div
          className="text-xl font-bold mb-4"
          style={{
            color: colors.text,
            fontFamily: typography.headingFont
          }}
        >
          Today's Updates
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="p-3 rounded-lg"
              style={{ backgroundColor: colors.primary + '10' }}
            >
              <div
                className="text-sm font-medium mb-1"
                style={{
                  color: colors.text,
                  fontFamily: typography.bodyFont
                }}
              >
                Update {i}
              </div>
              <div
                className="text-xs"
                style={{ color: colors.text + '99' }}
              >
                Latest news and updates about your brand.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SocialPreview = () => (
    <div className="space-y-4">
      {/* Social Post */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full"
              style={{ backgroundColor: colors.primary }}
            />
            <div>
              <div
                className="font-semibold"
                style={{
                  color: colors.text,
                  fontFamily: typography.headingFont
                }}
              >
                {logo.text}
              </div>
              <div className="text-sm text-gray-500">Just now</div>
            </div>
          </div>
          <p
            className="mb-4"
            style={{
              color: colors.text,
              fontFamily: typography.bodyFont
            }}
          >
            Exciting news! We're launching our new brand identity. Stay tuned for more updates! #BrandEvolution #Design
          </p>
          <div
            className="aspect-video rounded-lg"
            style={{ backgroundColor: colors.primary + '20' }}
          />
        </div>
      </div>
    </div>
  );

  const PrintPreview = () => (
    <div className="space-y-4">
      {/* Business Card */}
      <div
        className="w-96 h-52 rounded-lg shadow-lg p-6"
        style={{ backgroundColor: colors.background }}
      >
        <div
          className="text-2xl font-bold mb-4"
          style={{
            color: colors.primary,
            fontFamily: typography.headingFont
          }}
        >
          {logo.text}
        </div>
        <div
          className="text-sm mb-6"
          style={{
            color: colors.text,
            fontFamily: typography.bodyFont
          }}
        >
          Transforming brands with innovation
        </div>
        <div
          className="text-sm"
          style={{
            color: colors.text + '99',
            fontFamily: typography.bodyFont
          }}
        >
          contact@{logo.text.toLowerCase()}.com<br />
          +1 (555) 123-4567<br />
          123 Brand Street, Design City
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {showPreviewOptions ? (
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Website</h3>
            <WebsitePreview />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobile App</h3>
            <MobilePreview />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h3>
            <SocialPreview />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Print Materials</h3>
            <PrintPreview />
          </div>
        </div>
      ) : (
        <WebsitePreview />
      )}
    </div>
  );
} 