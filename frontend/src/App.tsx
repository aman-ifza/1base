import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import PromptsCard from './components/PromptsCard';
import ProgressBar from './components/ProgressBar';

// Placeholder components for each page
const Home = () => <div className="p-8 bg-card min-h-[80vh]">Home/Landing Page</div>;
const Dashboard = () => <div className="p-8 bg-card min-h-[80vh]">User Dashboard</div>;
const BrandGenerator = () => <div className="p-8 bg-card min-h-[80vh]">Brand DNA Generator</div>;
const Playground = () => <div className="p-8 bg-card min-h-[80vh]">Brand Playground (Manual Editing)</div>;
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
      {/* Progress bar placeholder (will only show on full journey pages) */}
      {/* TODO: Conditionally render based on route */}
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
      {/* Prompts card placeholder (will be added to each page) */}
      <PromptsCard />
    </Router>
  );
}

export default App;
