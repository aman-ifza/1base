import React from 'react';
import { useNavigate } from 'react-router-dom';
import base from '../assets/base.png'; // Adjust the path as necessary

const Navbar = () => {
  const navigate = useNavigate();

  return (
     <nav className="w-full flex justify-between items-center px-6 py-3 bg-white shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={base} // Replace with actual logo path
          alt="1base logo"
          className="h-6 w-auto cursor-pointer"
          onClick={() => navigate('/')}
        />
        
      </div>

      {/* Right: Links + Button */}
      <div className="flex items-center space-x-6">
        <button 
          onClick={() => navigate('/guide')}
          className="text-lg font-bold text-gray-700 hover:text-black transition"
        >
          Guide
        </button>
        <button 
          onClick={() => navigate('/api')}
          className="text-lg font-bold text-gray-700 hover:text-black transition"
        >
          API
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-[#4128F6] hover:bg-violet-700 text-white font-bold px-4 py-2 rounded-md text-sm flex items-center space-x-1 transition"
        >
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;