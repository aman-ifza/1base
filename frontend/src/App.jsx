
import React, { useState } from 'react';
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

function App() {

  return (
    <div>     
      <LogoEditor />
    </div>
  )
}

export default App
