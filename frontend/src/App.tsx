import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import PromptsCard from './components/PromptsCard';
import ProgressBar from './components/ProgressBar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import BrandDNAGenerator from './components/BrandDNAGenerator';
import BrandPlayground from './components/BrandPlayground';

// Placeholder components for each page
const Home = () => (
  <div className="w-full flex flex-col items-center justify-start py-4 md:py-8 px-3 md:px-4 font-sans">
    <div className="w-full max-w-7xl">
      {/* Welcome Section */}
      <div className="text-center mb-6 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold text-[#3F27FA] mb-2">Welcome to 1base Branding</h1>
        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">Create, manage, and perfect your brand identity with our AI-powered tools and expert guidance.</p>
      </div>
      
      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        <FeatureCard
          title="Brand Generator"
          description="AI-powered brand concept generation for your business"
          to="/brand-generator"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>}
        />
        <FeatureCard
          title="Brand Playground"
          description="Safe environment to experiment with your brand"
          to="/playground"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" /></svg>}
        />
        <FeatureCard
          title="Assets Library"
          description="Centralized hub for all your brand assets"
          to="/assets"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" /></svg>}
        />
        <FeatureCard
          title="Style Guide"
          description="Your brand's complete design system"
          to="/style-guide"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>}
        />
        <FeatureCard
          title="Upload Inspiration"
          description="Use existing designs to inspire your brand"
          to="#"
          icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12" /></svg>}
          upload
        />
        {/* Quick Start Card */}
        <div className="bg-[#3F27FA] rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 md:gap-4 shadow-xl transition hover:bg-[#3F27FA]/95">
          <div className="text-white text-sm md:text-base">
            <h3 className="font-semibold text-lg md:text-xl text-white mb-2">Quick Start Guide</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Generate your brand concept</li>
              <li>Customize in playground</li>
              <li>Export brand assets</li>
              <li>Share with your team</li>
            </ul>
          </div>
          <button className="mt-2 w-full px-4 py-2 bg-white text-[#3F27FA] rounded-lg font-semibold transition hover:bg-white/90 text-sm md:text-base">
            Start Tutorial
          </button>
        </div>
      </div>
    </div>
  </div>
);

// FeatureCard component for dashboard grid
interface FeatureCardProps {
  title: string;
  description: string;
  to: string;
  icon: React.ReactNode;
  upload?: boolean;
}

function FeatureCard({ title, description, to, icon, upload }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 md:gap-4 transition hover:shadow-lg border border-gray-100 group">
      <div className="text-[#3F27FA]">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold text-[#3F27FA] group-hover:text-[#3F27FA] transition">{title}</h3>
      <p className="text-sm md:text-base text-gray-600 text-center font-medium">{description}</p>
      {upload ? (
        <label className="mt-2 w-full px-4 py-2 bg-[#3F27FA] hover:bg-[#3F27FA]/90 text-white rounded-lg font-semibold transition cursor-pointer text-center text-sm md:text-base">
          Upload Files
          <input type="file" className="hidden" multiple />
        </label>
      ) : (
        <NavLink 
          to={to} 
          className="mt-2 w-full px-4 py-2 bg-[#3F27FA] hover:bg-[#3F27FA]/90 text-white rounded-lg font-semibold transition text-center text-sm md:text-base"
        >
          Open
        </NavLink>
      )}
    </div>
  );
}

const Dashboard = () => <div className="p-8 bg-card min-h-[80vh]">User Dashboard</div>;
const BrandGenerator = () => <BrandDNAGenerator />;
const Playground = () => <BrandPlayground />;
const Assets = () => <div className="p-8 bg-card min-h-[80vh]">Brand Assets Library</div>;
const StyleGuide = () => <div className="p-8 bg-card min-h-[80vh]">Brand Style Guide</div>;
const Login = () => <div className="p-8 bg-card min-h-[80vh]">Login</div>;
const Signup = () => <div className="p-8 bg-card min-h-[80vh]">Signup</div>;
const NotFound = () => <div className="p-8 bg-card min-h-[80vh]">404 - Page Not Found</div>;

function App() {
  const [progress] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <Router>
      <Sidebar isCollapsed={isSidebarCollapsed} onCollapsedChange={setIsSidebarCollapsed} />
      <Navbar isSidebarCollapsed={isSidebarCollapsed} />
      <div className={`${isSidebarCollapsed ? 'md:pl-16' : 'md:pl-48'} pt-16 md:pt-20 pb-20 md:pb-0 min-h-screen bg-gray-50 transition-all duration-300`}>
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
