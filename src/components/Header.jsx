import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex justify-between items-center px-6 md:px-10 py-6 animate-fadeInUp sticky top-0 bg-white/95 backdrop-blur-md z-50 shadow-md">
      <div className="flex items-center gap-3 animate-slideInLeft">
        <span className="w-3 h-3 bg-primary rounded-full inline-block animate-pulse-slow shadow-lg shadow-primary/50"></span>
        <div className="flex flex-col md:flex-row md:items-center md:gap-3">
          <span className="text-lg md:text-xl font-bold text-gray-800 hover:text-primary transition-colors duration-300 cursor-pointer">
            Praveenkumar
          </span>
          <span className="text-xs md:text-sm text-gray-600 font-medium tracking-wider">
            MERN STACK DEVELOPER
          </span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 animate-slideInRight">
        <a 
          href="#about" 
          className="text-gray-700 text-base font-medium relative hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full group"
        >
          <span className="relative">
            About
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
        <a 
          href="#skills" 
          className="text-gray-700 text-base font-medium relative hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full group"
        >
          <span className="relative">
            Skills
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
        <a 
          href="#projects" 
          className="text-gray-700 text-base font-medium relative hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full group"
        >
          <span className="relative">
            Projects
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
        <a 
          href="#education" 
          className="text-gray-700 text-base font-medium relative hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full group"
        >
          <span className="relative">
            Education
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </a>
        <a 
          href="#contact" 
          className="px-6 py-2.5 bg-primary text-gray-800 font-semibold rounded-full hover:bg-yellow-500 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
        >
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center group"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Navigation */}
      <div className={`absolute top-full left-0 w-full bg-white/98 backdrop-blur-md shadow-lg md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
        <nav className="flex flex-col p-6 gap-4">
          <a 
            href="#about" 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 text-base font-medium py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 border-l-4 border-transparent hover:border-primary"
          >
            About
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 text-base font-medium py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 border-l-4 border-transparent hover:border-primary"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 text-base font-medium py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 border-l-4 border-transparent hover:border-primary"
          >
            Projects
          </a>
          <a 
            href="#education" 
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 text-base font-medium py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 border-l-4 border-transparent hover:border-primary"
          >
            Education
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="text-center py-3 px-6 bg-primary text-gray-800 font-semibold rounded-full hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 mt-2"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
