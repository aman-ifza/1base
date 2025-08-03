import React from 'react';
import Sidebar from '../components/Sidebar';
import Brand from '../components/Brand';

// Import brand images from additional images folder
import baseImage from '../additional images/1base.png';
import nvidiaImage from '../additional images/nvidia.png';
import appleImage from '../additional images/apple.png';

const MyBrands = () => {
  const brandData = [
    {
      id: 1,
      name: "1base",
      description: "Created via 1BASE",
      logo: baseImage,
      backgroundColor: "from-blue-600 to-gray-800"
    },
    {
      id: 2,
      name: "Nvidia",
      description: "Created via 1BASE",
      logo: nvidiaImage,
      backgroundColor: "from-green-600 to-gray-800"
    },
    {
      id: 3,
      name: "Apple",
      description: "Created via 1BASE",
      logo: appleImage,
      backgroundColor: "from-gray-800 to-black"
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className="flex-shrink-0">
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Scrollable Brand Cards Container with Glass Background */}
        <div className="flex-1 overflow-y-auto p-8 pt-16 pb-16 flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl">
              <div className="space-y-10">
                {brandData.map((brand) => (
                  <Brand 
                    key={brand.id}
                    name={brand.name}
                    description={brand.description}
                    logo={brand.logo}
                    backgroundColor={brand.backgroundColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBrands;
