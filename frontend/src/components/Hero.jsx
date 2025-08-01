import hero from "../assets/hero.jpg"; // Adjust the path as necessary

const Hero = () => {
  return (
   <section className="w-full bg-[#171568] px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between">
        <div className="text-white max-w-xl space-y-6 md:text-left text-center">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Learn How to Master Your Brand
          </h1>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Welcome to your go-to resource for mastering brand creation with our platform. Whether you're starting fresh or refining your identity, our essential articles cover everything from logo design and typography to layout creation and brand inspiration. Designed for all skill levels, these clear, practical guides help you understand each tool, apply branding best practices, and build consistently — all while working on real projects.
          </p>

          <div className="pt-2">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-md transition duration-300"
            >
              GET STARTED →
            </a>
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