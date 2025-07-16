import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import PromptsCard from './components/PromptsCard';
import ProgressBar from './components/ProgressBar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

// Placeholder components for each page
const Home = () => (
  <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 relative overflow-hidden">
    {/* Hero Section */}
    <div className="w-full max-w-4xl text-center mt-16 mb-8 z-10">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">One foundation.<br />Total control.</h1>
      <p className="text-lg md:text-xl text-purple-100 mb-8">An all-in-one setup for creative brand automation, built to grow with your business. Everything you need, under one roof, with one trusted partner.</p>
    </div>
    {/* Project Start Card */}
    <div className="w-full max-w-md bg-card rounded-2xl shadow-2xl p-8 flex flex-col gap-4 z-10">
      <h2 className="text-2xl font-bold text-primary mb-2">Start Your Project</h2>
      <input className="rounded-lg border border-purple-200 px-4 py-2 mb-2 bg-white/80" placeholder="Name*" />
      <input className="rounded-lg border border-purple-200 px-4 py-2 mb-2 bg-white/80" placeholder="Company Email*" />
      <input className="rounded-lg border border-purple-200 px-4 py-2 mb-2 bg-white/80" placeholder="Phone number*" />
      <textarea className="rounded-lg border border-purple-200 px-4 py-2 mb-2 bg-white/80" placeholder="I'd like to talk about..." rows={2} />
      <button className="bg-primary text-white font-semibold py-2 rounded-lg hover:bg-primary-dark transition">Request Your Consultation</button>
    </div>
    {/* Quick Actions */}
    <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4 mt-12 z-10">
      <div className="bg-card rounded-xl p-6 flex flex-col items-center w-64 shadow-lg">
        <span className="text-primary font-bold text-lg mb-2">Full Brand Journey</span>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">Start Now</button>
      </div>
      <div className="bg-card rounded-xl p-6 flex flex-col items-center w-64 shadow-lg">
        <span className="text-primary font-bold text-lg mb-2">Just Need a Logo?</span>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">Logo Tool</button>
      </div>
      <div className="bg-card rounded-xl p-6 flex flex-col items-center w-64 shadow-lg">
        <span className="text-primary font-bold text-lg mb-2">Only a Color Palette?</span>
        <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition">Palette Tool</button>
      </div>
    </div>
    {/* Upload Section */}
    <div className="w-full max-w-2xl bg-card rounded-xl p-6 mt-12 flex flex-col items-center shadow-lg z-10">
      <span className="text-primary font-bold text-lg mb-2">Upload Images or Wireframes</span>
      <input type="file" className="mb-2" multiple />
      <p className="text-sm text-gray-700">Upload images, sketches, or wireframes to inspire your brand generation.</p>
    </div>
    {/* Background Accent */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/80 via-purple-700/60 to-purple-500/40 pointer-events-none z-0" />
  </div>
);

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
