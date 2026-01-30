import profileImage from '../assets/profile.jpg'

function Hero() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 py-12 sm:py-16 gap-10 sm:gap-16 min-h-[70vh] relative overflow-hidden before:content-[''] before:absolute before:top-[-50%] before:right-[-50%] before:w-full before:h-full before:bg-[radial-gradient(circle,rgba(255,196,0,0.1)_0%,transparent_70%)] before:animate-float">
      <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden bg-gradient-to-br from-primary to-yellow-300 flex items-center justify-center shadow-[0_10px_40px_rgba(255,196,0,0.3)] transition-all duration-500 animate-fadeInLeft animate-float relative z-10 hover:scale-105 hover:rotate-[5deg] hover:shadow-[0_15px_50px_rgba(255,196,0,0.5)] group">
        <div className="absolute inset-[-5px] rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary bg-[length:300%_300%] animate-gradient-shift -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img src={profileImage} alt="Praveenkumar Profile" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>
      
      <div className="max-w-[500px] animate-fadeInRight relative z-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight animate-fadeInUp [animation-delay:0.2s] [animation-fill-mode:backwards]">
          Hello, I'm Praveenkumar
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold mb-5 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fadeInUp [animation-delay:0.4s] [animation-fill-mode:backwards]">
          MERN Stack Developer
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed animate-fadeInUp [animation-delay:0.6s] [animation-fill-mode:backwards]">
          Passionate about building responsive, scalable web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in creating full-stack solutions with modern UI/UX design and secure authentication systems.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
          <a href="#about" className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full text-center font-semibold text-gray-800 text-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden bg-primary hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] animate-fadeInUp [animation-delay:0.8s] [animation-fill-mode:backwards] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/30 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-600 hover:before:w-[300px] hover:before:h-[300px]">
            About Me
          </a>
          <a href="#projects" className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full text-center font-semibold text-white text-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden bg-secondary hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] animate-fadeInUp [animation-delay:1s] [animation-fill-mode:backwards] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/30 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-600 hover:before:w-[300px] hover:before:h-[300px]">
            Projects
          </a>
          <a href="#contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full text-center font-semibold text-gray-800 text-sm shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden bg-tertiary hover:translate-y-[-5px] hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] animate-fadeInUp [animation-delay:1.2s] [animation-fill-mode:backwards] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:rounded-full before:bg-white/30 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-600 hover:before:w-[300px] hover:before:h-[300px]">
            Contact
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero
