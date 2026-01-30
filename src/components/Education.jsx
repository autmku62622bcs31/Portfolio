function Education() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 bg-white animate-on-scroll" id="education">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-800">Education & Training</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white p-7 sm:p-9 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-t-4 border-primary transition-all duration-400 relative overflow-hidden hover:translate-y-[-10px] hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] before:content-[''] before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-[rgba(255,196,0,0.1)] before:to-transparent before:transition-[top] before:duration-500 hover:before:top-0 group">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-500 relative z-10 group-hover:scale-125 group-hover:rotate-[10deg]">
              🎓
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-2.5 text-gray-800 relative z-10 transition-colors duration-300 group-hover:text-primary">
              Bachelor of Computer Science
            </h3>
            <div className="text-base sm:text-lg text-gray-600 mb-1.5 sm:mb-2 font-medium relative z-10">
              Government Arts and Science College, Veerapandi, Theni
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 italic relative z-10">
              2022 – 2025
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 relative z-10">
              Comprehensive computer science education covering programming fundamentals, data structures, algorithms, and web technologies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-7 sm:p-9 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-t-4 border-tertiary transition-all duration-400 relative overflow-hidden hover:translate-y-[-10px] hover:scale-[1.02] hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] before:content-[''] before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-[rgba(255,196,0,0.1)] before:to-transparent before:transition-[top] before:duration-500 hover:before:top-0 group">
            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-500 relative z-10 group-hover:scale-125 group-hover:rotate-[10deg]">
              💻
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-2.5 text-gray-800 relative z-10 transition-colors duration-300 group-hover:text-primary">
              MERN Stack Development
            </h3>
            <div className="text-base sm:text-lg text-gray-600 mb-1.5 sm:mb-2 font-medium relative z-10">
              ZHAHI Tech Training
            </div>
            <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 italic relative z-10">
              June – Present
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 relative z-10">
              Completed hands-on training in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, with practical implementation through real-world full-stack projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
