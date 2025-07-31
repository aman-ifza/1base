import React from 'react';
import base from '../assets/base.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
     <nav className="w-full flex justify-between items-center px-6 py-3 bg-white shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={base} // Replace with actual logo path
          alt="1base logo"
          className="h-6 w-auto"
        />
        
      </div>

      {/* Right: Links + Button */}
      <div className="flex items-center space-x-6">
        <a href="/guide" className="text-lg font-bold text-gray-700 hover:text-black transition ">
          Guide
        </a>
        <a href="/api" className="text-lg font-bold text-gray-700 hover:text-black transition">
          API
        </a>
        <a
          href="/login"
        className="bg-[#4128F6] hover:bg-violet-700 text-white font-bold px-4 py-2 rounded-md text-sm flex items-center space-x-1 transition"
        >
          
          <span>Login</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;