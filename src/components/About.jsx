function About() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 bg-gray-50 relative overflow-hidden animate-on-scroll before:content-[''] before:absolute before:top-0 before:left-[-100px] before:w-[300px] before:h-[300px] before:bg-[radial-gradient(circle,rgba(255,196,0,0.1)_0%,transparent_70%)] before:rounded-full" id="about">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-800">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 sm:gap-10 items-start">
          <div>
            <h3 className="text-xl sm:text-2xl mb-4 sm:mb-5 text-gray-800 relative inline-block after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-12 after:h-0.5 after:bg-primary after:rounded">
              Executive Summary
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-3 sm:mb-4">
              Detail-oriented and highly motivated MERN Stack Developer with hands-on experience in building responsive, scalable web applications using MongoDB, Express.js, React.js, and Node.js. Strong foundation in RESTful APIs, JWT authentication, and modern UI development.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-3 sm:mb-4">
              Proven ability to deliver full-stack projects including ecommerce and rental platforms with payment integration. Eager to contribute to fast-paced development teams and continuously enhance technical skills.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-5">
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center transition-all duration-400 relative overflow-hidden hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0_8px_25px_rgba(255,196,0,0.3)] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,196,0,0.2)] before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full group">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 transition-transform duration-300 group-hover:scale-110">
                3+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center transition-all duration-400 relative overflow-hidden hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0_8px_25px_rgba(255,196,0,0.3)] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,196,0,0.2)] before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full group">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 transition-transform duration-300 group-hover:scale-110">
                2025
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Expected Graduation</div>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center transition-all duration-400 relative overflow-hidden hover:translate-y-[-8px] hover:scale-105 hover:shadow-[0_8px_25px_rgba(255,196,0,0.3)] before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-[rgba(255,196,0,0.2)] before:to-transparent before:transition-[left] before:duration-500 hover:before:left-full group">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1 transition-transform duration-300 group-hover:scale-110">
                100%
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
