
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import NameRightMiniSidebar from './components/NameRightMiniSidebar';
import TypographyTemplate from './components/TypographyTemplate';
import TypographyPreview from './components/TypographyPreview';
import TypographySidebar from './components/TypographySidebar';
import Build from './Pages/Build';
import MyBrands from './Pages/MyBrands';
import Name from './Pages/Name';
import LogoEditor from './Pages/LogoEditor';
import GuidePage from './Pages/GuidePage';
import Logo from './Pages/Logo';
import Inspiration from './Pages/Inspiration';
import Canvas from './Pages/Canvas';
import ApiDocs from './Pages/ApiDocs';
import Typography from './Pages/Typography';
import TypographyGuide from './Pages/TypographyGuide';
import BuildGuide from './Pages/BuildGuide';
import CanvasGuide from './Pages/CanvasGuide';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          
          {/* Core Application Pages */}
          <Route path="/build" element={<Build />} />
          <Route path="/name" element={<Name />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/tone" element={<Build />} /> {/* Tone uses Build layout */}
          <Route path="/logo" element={<Logo />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/my-brands" element={<MyBrands />} />
          
          {/* Additional Pages */}
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/guide/typography" element={<TypographyGuide />} />
          <Route path="/guide/build" element={<BuildGuide />} />
          <Route path="/guide/canvas" element={<CanvasGuide />} />
          <Route path="/api" element={<ApiDocs />} />
          <Route path="/logo-editor" element={<LogoEditor />} />
          
          {/* Fallback Route */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
