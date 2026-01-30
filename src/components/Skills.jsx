function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Tailwind CSS', 'Responsive UI']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Database Design', 'CRUD Operations']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Razorpay Integration']
    }
  ]

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 bg-white relative overflow-hidden animate-on-scroll before:content-[''] before:absolute before:bottom-[-100px] before:right-[-100px] before:w-[400px] before:h-[400px] before:bg-[radial-gradient(circle,rgba(125,227,227,0.1)_0%,transparent_70%)] before:rounded-full" id="skills">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-800">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl border-l-4 border-primary transition-all duration-400 relative overflow-hidden hover:translate-x-2.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:border-l-[6px] before:content-[''] before:absolute before:top-[-50%] before:right-[-50%] before:w-[200px] before:h-[200px] before:bg-[radial-gradient(circle,rgba(255,196,0,0.1)_0%,transparent_70%)] before:transition-all before:duration-500 hover:before:top-[-20%] hover:before:right-[-20%] hover:before:scale-150">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-gray-800 relative z-10">{category.title}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5 relative z-10">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm text-gray-700 shadow-[0_2px_5px_rgba(0,0,0,0.05)] transition-all duration-300 cursor-pointer relative overflow-hidden hover:translate-y-[-3px] hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,196,0,0.3)] before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-primary before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all before:duration-400 before:-z-10 hover:before:w-[200px] hover:before:h-[200px] hover:text-gray-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
