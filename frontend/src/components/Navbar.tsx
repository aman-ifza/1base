import { useState } from 'react';

interface NavbarProps {
  isSidebarCollapsed: boolean;
}

export default function Navbar({ isSidebarCollapsed }: NavbarProps) {
  return (
    <header className={`fixed top-0 ${isSidebarCollapsed ? 'md:left-16' : 'md:left-48'} left-0 right-0 h-16 md:h-20 bg-[#3F27FA] flex items-center justify-between px-4 md:px-12 shadow-lg z-30 transition-all duration-300`}>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <span className="text-white text-2xl md:text-3xl font-extrabold md:hidden">1</span>
        <span className="text-white/90 text-xl md:text-2xl font-bold md:hidden">base</span>
      </div>
      {/* User Actions */}
      <div className="flex items-center gap-4 md:gap-8">
        <button className="px-4 md:px-6 py-1.5 md:py-2 text-white/90 hover:text-white font-semibold transition rounded-lg hover:bg-white/10">
          Login
        </button>
        <button className="px-4 md:px-6 py-1.5 md:py-2 bg-white text-[#3F27FA] font-semibold rounded-lg hover:bg-white/90 transition">
          Sign Up
        </button>
        <button className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition">
          ⚙️
        </button>
      </div>
    </header>
  );
} 