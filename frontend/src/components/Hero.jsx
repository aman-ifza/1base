import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from "../assets/hero.jpg"; // Adjust the path as necessary

const Hero = () => {
  const navigate = useNavigate();

  return (
   <section className="w-full bg-[#171568] px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="text-white max-w-xl space-y-6 md:text-left text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            One Foundation, Total Control
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate('/build')}
              className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-md transition duration-300"
            >
              GET STARTED →
            </button>
          </div>
        </div>
        
        {/* Optional: Placeholder for right-side image */}

         <div className="hidden md:block">
          <img src={hero} alt="hero" className="max-w-md" />
        </div> 
      </div>
    </section>
  );
}

export default Hero;