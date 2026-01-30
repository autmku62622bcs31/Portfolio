function Contact() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 bg-gradient-to-br from-primary to-yellow-300 relative overflow-hidden animate-on-scroll before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] before:animate-[rotate_20s_linear_infinite]" id="contact">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-gray-800">Get In Touch</h2>
        <p className="text-base sm:text-lg text-gray-800 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-400 relative overflow-hidden hover:translate-y-[-12px] hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-[rgba(255,196,0,0.1)] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-500 hover:before:w-[300px] hover:before:h-[300px] group">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transition-transform duration-500 relative z-10 group-hover:scale-[1.3] group-hover:rotate-[360deg]">
              📱
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-2.5 text-gray-800 relative z-10 font-semibold">Phone</h3>
            <a href="tel:8072512003" className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 relative z-10 hover:text-primary break-all">
              8072512003
            </a>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-400 relative overflow-hidden hover:translate-y-[-12px] hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-[rgba(255,196,0,0.1)] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-500 hover:before:w-[300px] hover:before:h-[300px] group">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transition-transform duration-500 relative z-10 group-hover:scale-[1.3] group-hover:rotate-[360deg]">
              📧
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-2.5 text-gray-800 relative z-10 font-semibold">Email</h3>
            <a href="mailto:praveencm329@gmail.com" className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 relative z-10 hover:text-primary break-all">
              praveencm329@gmail.com
            </a>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-400 relative overflow-hidden hover:translate-y-[-12px] hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-[rgba(255,196,0,0.1)] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-500 hover:before:w-[300px] hover:before:h-[300px] group">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transition-transform duration-500 relative z-10 group-hover:scale-[1.3] group-hover:rotate-[360deg]">
              💼
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-2.5 text-gray-800 relative z-10 font-semibold">LinkedIn</h3>
            <a href="https://www.linkedin.com/in/praveen-kumar-b8364a364" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 relative z-10 hover:text-primary">
              View Profile
            </a>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-400 relative overflow-hidden hover:translate-y-[-12px] hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-[rgba(255,196,0,0.1)] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-500 hover:before:w-[300px] hover:before:h-[300px] group">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transition-transform duration-500 relative z-10 group-hover:scale-[1.3] group-hover:rotate-[360deg]">
              🔗
            </div>
            <h3 className="text-lg sm:text-xl mb-2 sm:mb-2.5 text-gray-800 relative z-10 font-semibold">GitHub</h3>
            <a href="https://github.com/autmku62622bcs31" target="_blank" rel="noopener noreferrer" className="text-gray-600 text-xs sm:text-sm transition-colors duration-300 relative z-10 hover:text-primary">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
