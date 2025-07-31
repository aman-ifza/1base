import React, { useState } from 'react';
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

  const sidebarItems = [
    { name: 'Build', icon: Hammer },
    { name: 'Name', icon: Type },
    { name: 'Typography', icon: Type },
    { name: 'Tone', icon: Volume2 },
    { name: 'Logo', icon: Zap },
    { name: 'Canvas', icon: Palette },
    { name: 'Inspiration', icon: Lightbulb },
    { name: 'My Brands', icon: Users },
    { name: 'Guide', icon: BookOpen },
    { name: 'API', icon: Code }
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  return (
    <div
      className={`bg-white shadow-lg transition-all duration-300 ease-in-out relative h-screen ${
        isCollapsed ? 'w-16' : 'w-64'
      } rounded-tr-[34px] rounded-br-[34px]`}
    >
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {!isCollapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#5543E8]">
                <span className="text-white font-bold text-sm">1b</span>
              </div>
              <span className="text-xl font-bold text-gray-900">1base</span>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto bg-[#5543E8]">
              <span className="text-white font-bold text-sm">1b</span>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="p-4 space-y-1">
        {sidebarItems.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => handleItemClick(name)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
              activeItem === name
                ? 'bg-[#291A94] text-white'
                : 'text-gray-700 hover:bg-[#5543E8] hover:text-white'
            }`}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">{name}</span>}
          </button>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="absolute bottom-4 left-4">
        <button
          onClick={toggleSidebar}
          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors duration-200"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
