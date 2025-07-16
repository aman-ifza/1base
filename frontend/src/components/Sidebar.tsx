import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0v6m0 0H7m6 0h6" /></svg>
  ) },
  { to: '/brand-generator', label: 'Generator', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
  ) },
  { to: '/playground', label: 'Play', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" /></svg>
  ) },
  { to: '/assets', label: 'Assets', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="7" width="18" height="13" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3v4M8 3v4" /></svg>
  ) },
  { to: '/style-guide', label: 'Styles', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
  ) },
];

interface SidebarProps {
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
}

export default function Sidebar({ isCollapsed, onCollapsedChange }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside 
        className={`hidden md:flex fixed top-0 left-0 h-full ${
          isCollapsed ? 'w-16' : 'w-48'
        } bg-white flex-col items-center py-6 shadow-lg z-40 transition-all duration-300`}
      >
        <div className="flex items-center justify-between w-full px-4 mb-8">
          <div className={`flex items-center gap-2 ${isCollapsed ? 'justify-center w-full' : ''}`}>
            <span className="text-[#3F27FA] text-2xl font-extrabold">1</span>
            {!isCollapsed && <span className="text-[#3F27FA] text-xl font-bold">base</span>}
          </div>
          <button
            onClick={() => onCollapsedChange(!isCollapsed)}
            className="text-gray-400 hover:text-gray-600 transition p-1"
          >
            {isCollapsed ? '→' : '←'}
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-4 w-full px-2">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center py-2 px-3 rounded-lg transition ${
                  isActive 
                    ? 'bg-[#3F27FA] text-white' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-[#3F27FA]'
                }`
              }
              title={isCollapsed ? item.label : undefined}
            >
              <span className="w-6 h-6">{item.icon}</span>
              {!isCollapsed && (
                <span className="ml-3 text-sm font-bold tracking-wide">{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-40">
        <div className="flex justify-around items-center">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center py-2 px-3 rounded-lg transition ${
                  isActive 
                    ? 'bg-[#3F27FA] text-white' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-[#3F27FA]'
                }`
              }
            >
              <span className="mb-1">{item.icon}</span>
              <span className="text-[10px] font-bold tracking-wide">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
} 