const Brand = ({ name = "1base", description = "Created on: 19/10/24", logo = "", backgroundColor = "from-purple-900 to-gray-900" }) => {
  return (
    <div className={`bg-gradient-to-r ${backgroundColor} text-white p-6 rounded-lg flex items-center justify-between min-h-24 w-full shadow-xl`}>
      {/* Logo section */}
      <div className="flex-shrink-0 w-56">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="h-16 w-auto object-contain"
        />
      </div>
      
      {/* Content section with title and date */}
      <div className="flex-1 px-6">
        <h1 className="text-2xl font-bold mb-1">{name}</h1>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
      
      {/* Right section with arrow */}
      <div className="flex items-center">
        <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors">
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Brand;