
import './App.css';
import "./gradient-bg.css";
import Sidebar from './components/Sidebar';
import RightMiniSidebar from './components/RightMiniSidebar';
import PromptBar from './components/PromptBar';
import LandingPage from './Pages/LandingPage';
import TemplateSettings from './components/TemplateSettings';
import DesignEditingSidebar from './components/DesignEditingSidebar';
import DesignCanvas from './components/DesignCanvas';
import Brand from './components/Brand';
import DrawCompare from './components/DrawCompare';
import InputOutputToggle from './components/InputOutput';
import DrawingMiniSidebar from './components/DrawingMiniSidebar';
import LogoCard from './components/LogoCard';
import TemplateComponent from './components/TemplateComponent';
import TemplatePreview from './components/TemplatePreview';
import Chatbox from './components/Chatbox';
import NameMiniSidebar from './components/NameMiniSidebar';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0F0B2C] to-[#0F0B2C]">     
      <NameMiniSidebar />
      <div className="flex-1 p-6">
        {/* Your main content goes here */}
      </div>
    </div>
  )
}

export default App
