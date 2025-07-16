import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import PromptsCard from './components/PromptsCard';
import ProgressBar from './components/ProgressBar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

// Placeholder components for each page
const Home = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-16 px-6 font-sans">
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 z-10">
      {/* Brand Generator Card */}
      <FeatureCard
        title="Brand Generator"
        description="AI-powered initial brand concept generation, tailored to your business."
        to="/brand-generator"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>}
      />
      {/* Playground Card */}
      <FeatureCard
        title="Brand Playground"
        description="Experiment, iterate, and manually edit your brand assets in a safe sandbox."
        to="/playground"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" /></svg>}
      />
      {/* Assets Library Card */}
      <FeatureCard
        title="Assets Library"
        description="Access, download, and manage all your brand assets in one place."
        to="/assets"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" /></svg>}
      />
      {/* Style Guide Card */}
      <FeatureCard
        title="Style Guide"
        description="Comprehensive brand guidelines, color palettes, typography, and more."
        to="/style-guide"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>}
      />
      {/* Upload Card */}
      <FeatureCard
        title="Upload Inspiration"
        description="Upload images, sketches, or wireframes to inspire your brand generation."
        to="#"
        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" /></svg>}
        upload
      />
    </div>
  </div>
);

// FeatureCard component for dashboard grid
function FeatureCard({ title, description, to, icon, upload }: any) {
  return (
    <div className="bg-card rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center gap-4 transition transform hover:-translate-y-1 hover:shadow-2xl border border-purple-200 group">
      <div className="mb-2">{icon}</div>
      <h3 className="text-xl font-bold text-primary group-hover:text-primary-dark transition">{title}</h3>
      <p className="text-gray-700 text-center mb-4">{description}</p>
      {upload ? (
        <input type="file" className="w-full text-sm" multiple />
      ) : (
        <NavLink to={to} className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition text-sm">Open</NavLink>
      )}
    </div>
  );
}

const Dashboard = () => <div className="p-8 bg-card min-h-[80vh]">User Dashboard</div>;
const BrandGenerator = () => <div className="p-8 bg-card min-h-[80vh]">Brand DNA Generator</div>;
const Playground = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 relative overflow-hidden">
    <div className="w-full max-w-4xl bg-card rounded-2xl shadow-2xl p-8 mt-16 flex flex-col gap-6 z-10">
      <h2 className="text-3xl font-bold text-primary mb-4">Brand Playground</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Controls */}
        <div className="flex-1 flex flex-col gap-4">
          <label className="font-semibold text-primary">Logo Style</label>
          <select className="rounded-lg border border-purple-200 px-4 py-2 bg-white/80">
            <option>Minimalist</option>
            <option>Bold</option>
            <option>Playful</option>
            <option>Elegant</option>
          </select>
          <label className="font-semibold text-primary">Primary Color</label>
          <input type="color" className="w-16 h-10 rounded-lg border border-purple-200" />
          <label className="font-semibold text-primary">Typography</label>
          <select className="rounded-lg border border-purple-200 px-4 py-2 bg-white/80">
            <option>Sans-serif</option>
            <option>Serif</option>
            <option>Monospace</option>
          </select>
        </div>
        {/* Preview */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-48 h-48 bg-gradient-to-br from-primary via-primary-dark to-white rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-4xl font-extrabold text-white drop-shadow">Logo</span>
          </div>
          <span className="mt-4 text-primary font-semibold">Live Preview</span>
        </div>
      </div>
    </div>
    {/* Background Accent */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/80 via-purple-700/60 to-purple-500/40 pointer-events-none z-0" />
  </div>
);
const Assets = () => <div className="p-8 bg-card min-h-[80vh]">Brand Assets Library</div>;
const StyleGuide = () => <div className="p-8 bg-card min-h-[80vh]">Brand Style Guide</div>;
const Login = () => <div className="p-8 bg-card min-h-[80vh]">Login</div>;
const Signup = () => <div className="p-8 bg-card min-h-[80vh]">Signup</div>;
const NotFound = () => <div className="p-8 bg-card min-h-[80vh]">404 - Page Not Found</div>;

function App() {
  // Progress bar state (for full brand journey)
  const [progress] = useState(0);

  return (
    <Router>
      <Sidebar />
      <Navbar />
      <div className="pl-20 pt-16 min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500">
        <ProgressBar progress={progress} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/brand-generator" element={<BrandGenerator />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PromptsCard />
      </div>
    </Router>
  );
}

export default App;
