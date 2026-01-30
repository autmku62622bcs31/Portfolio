function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 sm:gap-10 mb-6 sm:mb-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-primary">Praveenkumar C</h3>
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            MERN Stack Developer passionate about creating innovative web solutions
          </p>
        </div>
        
        <div className="text-center md:text-left">
          <h4 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Quick Links</h4>
          <div className="flex flex-col gap-2 sm:gap-2.5">
            <a href="#about" className="text-gray-400 text-sm sm:text-base transition-colors duration-300 hover:text-primary">
              About
            </a>
            <a href="#skills" className="text-gray-400 text-sm sm:text-base transition-colors duration-300 hover:text-primary">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 text-sm sm:text-base transition-colors duration-300 hover:text-primary">
              Projects
            </a>
            <a href="#education" className="text-gray-400 text-sm sm:text-base transition-colors duration-300 hover:text-primary">
              Education
            </a>
          </div>
        </div>
        
        <div className="text-center md:text-left">
          <h4 className="text-lg sm:text-xl mb-3 sm:mb-4 text-primary">Connect</h4>
          <div className="flex flex-col gap-2 sm:gap-3">
            <a href="https://github.com/autmku62622bcs31" target="_blank" rel="noopener noreferrer" className="text-gray-400 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-primary">
              <span className="text-lg sm:text-xl">🔗</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/praveen-kumar-b8364a364" target="_blank" rel="noopener noreferrer" className="text-gray-400 flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base transition-colors duration-300 hover:text-primary">
              <span className="text-lg sm:text-xl">💼</span> LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-4 sm:pt-5 border-t border-gray-700 text-center">
        <div className="text-xs sm:text-sm text-gray-500">
          © 2025 Praveenkumar. Built with React & Vite + Tailwind CSS
        </div>
      </div>
    </footer>
  )
}

export default Footer
