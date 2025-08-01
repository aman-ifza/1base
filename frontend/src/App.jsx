
import './App.css';
import "./gradient-bg.css";
import SidebarContainer from './components/SidebarContainer';
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


function App() {
  const handleEditLogo = () => {
    console.log('Edit logo clicked');
  };

  const handleExportLogo = () => {
    console.log('Export logo clicked');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">     
      <LogoCard
        imageUrl=""
        onEdit={handleEditLogo}
        onExport={handleExportLogo}
      />
    </div>
  )
}

export default App
