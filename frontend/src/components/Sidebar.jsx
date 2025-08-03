import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Hammer,
  Type,
  Volume2,
  Zap,
  Palette,
  Lightbulb,
  Users,
  BookOpen,
  Code
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Build');
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = useMemo(() => [
    { name: 'Build', icon: Hammer, path: '/build' },
    { name: 'Name', icon: Type, path: '/name' },
    { name: 'Typography', icon: Type, path: '/typography' },
    { name: 'Tone', icon: Volume2, path: '/tone' },
    { name: 'Logo', icon: Zap, path: '/logo' },
    { name: 'Canvas', icon: Palette, path: '/canvas' },
    { name: 'Inspiration', icon: Lightbulb, path: '/inspiration' },
    { name: 'My Brands', icon: Users, path: '/my-brands' },
    { name: 'Guide', icon: BookOpen, path: '/guide' },
    { name: 'API', icon: Code, path: '/api' }
  ], []);

  // Update active item based on current route
  useEffect(() => {
    const currentItem = sidebarItems.find(item => item.path === location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.name);
    } else if (location.pathname === '/' || location.pathname === '/home') {
      setActiveItem('Home');
    }
  }, [location.pathname, sidebarItems]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (name, path) => {
    setActiveItem(name);
    navigate(path);
  };

  return (
    <div
      className={`bg-white transition-all duration-300 ease-in-out relative h-screen border-r border-gray-800/10 backdrop-blur-sm rounded-tr-[34px] rounded-br-[34px] ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed ? (
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#5543E8]">
                <span className="text-white font-bold text-sm">1b</span>
              </div>
              <span className="text-xl font-bold text-black">1base</span>
            </div>
          ) : (
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto bg-[#5543E8] cursor-pointer"
              onClick={() => navigate('/')}
            >
              <span className="text-white font-bold text-sm">1b</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-1">
        {sidebarItems.map(({ name, icon: IconComponent, path }) => (
          <button
            key={name}
            onClick={() => handleItemClick(name, path)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 ${
              activeItem === name
                ? 'bg-[#291A94] text-white'
                : 'text-black hover:bg-white/5 hover:text-zinc-700'
            }`}
          >
            <IconComponent className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">{name}</span>}
          </button>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="absolute bottom-4 left-2">
        <button
          onClick={toggleSidebar}
          className="w-10 h-10 bg-white hover:bg-gray-50 rounded-xl flex items-center justify-center transition-colors duration-200 shadow-md"
        >
          {isCollapsed ? (
            <ChevronRight className="w-6 h-6 text-gray-800" />
          ) : (
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
