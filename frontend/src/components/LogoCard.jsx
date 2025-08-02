import React from 'react';

const LogoCard = ({ 
  name = "Logo Name",
  subtitle = "",
  backgroundColor = "from-purple-600 to-blue-600",
  logoType = "text",
  textColor = "white",
  onEdit,
  onExport 
}) => {

  const renderLogo = () => {
    switch (logoType) {
      case 'text':
        return (
          <div className="flex flex-col items-center justify-center text-center">
            <div className={`text-2xl font-bold ${textColor === 'white' ? 'text-white' : 'text-black'} mb-1`}>
              {name.includes(' ') ? (
                <>
                  <div>{name.split(' ')[0]}</div>
                  <div className="text-sm font-normal tracking-widest">
                    {name.split(' ').slice(1).join(' ')}
                  </div>
                </>
              ) : (
                <div>{name}</div>
              )}
            </div>
            {subtitle && (
              <div className={`text-xs tracking-widest ${textColor === 'white' ? 'text-white' : 'text-black'} opacity-80`}>
                {subtitle}
              </div>
            )}
          </div>
        );
      
      case 'icon':
        return (
          <div className="flex flex-col items-center justify-center text-center">
            {/* Generic icon/symbol placeholder */}
            <div className={`w-16 h-16 ${textColor === 'white' ? 'bg-white' : 'bg-black'} rounded-lg mb-3 flex items-center justify-center`}>
              {name === 'ChainBrand' && (
                <div className="text-purple-600 text-2xl font-bold">⚡</div>
              )}
              {name === 'OPENSIGNAL' && (
                <div className="text-blue-600 text-3xl">📡</div>
              )}
              {name === 'GINYARD PHONE' && (
                <div className="text-green-400 text-2xl">📱</div>
              )}
              {name === 'CreativeHub' && (
                <div className="text-orange-600 text-2xl">🎨</div>
              )}
              {name === 'TechFlow' && (
                <div className="text-cyan-500 text-2xl">⚙️</div>
              )}
              {name === 'NeoVault' && (
                <div className="text-red-400 text-2xl">🔒</div>
              )}
              {!['ChainBrand', 'OPENSIGNAL', 'GINYARD PHONE', 'CreativeHub', 'TechFlow', 'NeoVault'].includes(name) && (
                <div className="text-gray-600 text-2xl">●</div>
              )}
            </div>
            <div className={`text-lg font-bold ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
              {name}
            </div>
            {subtitle && (
              <div className={`text-xs tracking-widest ${textColor === 'white' ? 'text-white' : 'text-black'} opacity-80 mt-1`}>
                {subtitle}
              </div>
            )}
          </div>
        );

      case 'abstract':
        return (
          <div className="flex flex-col items-center justify-center text-center">
            {/* Abstract shape */}
            <div className="w-20 h-20 mb-3 flex items-center justify-center">
              {name === 'ABSTRACT SPIN' && (
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full transform rotate-45 relative">
                  <div className="absolute inset-2 bg-white rounded-full transform -rotate-45"></div>
                </div>
              )}
              {name === 'EcoFlow' && (
                <div className="w-16 h-16 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full"></div>
                  <div className="absolute inset-2 bg-gradient-to-tr from-green-400 to-emerald-400 rounded-full"></div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <div className="text-green-600 text-lg">🌱</div>
                  </div>
                </div>
              )}
              {!['ABSTRACT SPIN', 'EcoFlow'].includes(name) && (
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full transform rotate-45 relative">
                  <div className="absolute inset-2 bg-white rounded-full transform -rotate-45"></div>
                </div>
              )}
            </div>
            <div className={`text-lg font-bold ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
              {name}
            </div>
            {subtitle && (
              <div className={`text-xs tracking-widest ${textColor === 'white' ? 'text-white' : 'text-black'} opacity-80 mt-1`}>
                {subtitle}
              </div>
            )}
          </div>
        );

      case 'mascot':
        return (
          <div className="flex flex-col items-center justify-center text-center">
            {/* Mascot placeholder */}
            <div className="w-20 h-20 mb-3 flex items-center justify-center">
              <div className={`text-4xl ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
                👹
              </div>
            </div>
            <div className={`text-lg font-bold ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
              {name}
            </div>
            {subtitle && (
              <div className={`text-xs tracking-widest ${textColor === 'white' ? 'text-white' : 'text-black'} opacity-80 mt-1`}>
                {subtitle}
              </div>
            )}
          </div>
        );

      case 'geometric':
        return (
          <div className="flex flex-col items-center justify-center text-center">
            {/* Geometric shape */}
            <div className="w-20 h-20 mb-3 flex items-center justify-center">
              {name === 'DataCore' && (
                <div className="relative">
                  <div className={`w-16 h-16 ${textColor === 'white' ? 'border-white' : 'border-black'} border-4 transform rotate-45`}></div>
                  <div className={`absolute inset-4 ${textColor === 'white' ? 'bg-white' : 'bg-black'} transform rotate-45`}></div>
                </div>
              )}
              {name === 'Quantum' && (
                <div className="relative">
                  <div className={`w-16 h-16 ${textColor === 'white' ? 'border-white' : 'border-black'} border-4 rounded-full`}></div>
                  <div className={`absolute inset-2 ${textColor === 'white' ? 'border-white' : 'border-black'} border-2 rounded-full`}></div>
                  <div className={`absolute inset-6 ${textColor === 'white' ? 'bg-white' : 'bg-black'} rounded-full`}></div>
                </div>
              )}
              {!['DataCore', 'Quantum'].includes(name) && (
                <div className={`w-16 h-16 ${textColor === 'white' ? 'border-white' : 'border-black'} border-4 transform rotate-45 relative`}>
                  <div className={`absolute inset-2 ${textColor === 'white' ? 'bg-white' : 'bg-black'} transform -rotate-45`}></div>
                </div>
              )}
            </div>
            <div className={`text-lg font-bold ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
              {name}
            </div>
            {subtitle && (
              <div className={`text-xs tracking-widest ${textColor === 'white' ? 'text-white' : 'text-black'} opacity-80 mt-1`}>
                {subtitle}
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center justify-center text-center">
            <div className={`text-xl font-bold ${textColor === 'white' ? 'text-white' : 'text-black'}`}>
              {name}
            </div>
            {subtitle && (
              <div className={`text-xs tracking-widest ${textColor === 'white' ? 'text-white' : 'text-black'} opacity-80 mt-1`}>
                {subtitle}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="relative w-full group">
      {/* Main card container */}
      <div className={`w-full h-64 bg-gradient-to-r ${backgroundColor} rounded-lg overflow-hidden shadow-lg`}>
        {/* Logo content */}
        <div className="w-full h-full flex items-center justify-center p-6">
          {renderLogo()}
        </div>

        {/* Hover overlay with actions - initially hidden, appears on hover */}
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="bg-white py-3 px-4">
            <div className="flex justify-between items-center">
              <button
                onClick={onEdit}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                Edit Logo
              </button>
              <button
                onClick={onExport}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;
