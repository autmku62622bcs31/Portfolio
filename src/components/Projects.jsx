function Projects() {
  const projects = [
    {
      title: 'E-Commerce & Rental Platform',
      tech: 'MongoDB, Express.js, React.js, Node.js, Tailwind CSS, JWT, Razorpay',
      description: [
        'Developed a full-stack e-commerce and rental platform with separate admin and customer dashboards',
        'Implemented JWT-based authentication and role-based access control for secure user management',
        'Integrated Razorpay payment gateway supporting rental duration handling, security deposits, fine calculation, and order tracking',
        'Built admin panel with complete CRUD operations, advanced search, filtering, and category-based product management',
        'Designed mobile-first responsive UI, improving usability across devices'
      ],
      color: '#ffc400'
    },
    {
      title: 'Games Information Web Application',
      tech: 'React.js, External API Integration',
      description: [
        'Developed a dynamic web application displaying real-time game data including genres, release dates, and descriptions',
        'Integrated external APIs and structured reusable React components for efficient rendering',
        'Implemented a role-based login system, improving application security and access control'
      ],
      color: '#7de3e3'
    },
    {
      title: 'Sports Equipment Rental Platform',
      tech: 'HTML, CSS, Bootstrap, JavaScript',
      description: [
        'Built a fully responsive sports equipment rental website optimized for all screen sizes',
        'Designed intuitive product listings and rental flow to enhance user experience and navigation',
        'Improved page performance and layout using optimized components and clean UI structure'
      ],
      color: '#ff4c4c'
    }
  ]

  return (
    <section className="py-12 sm:py-16 px-6 sm:px-10 bg-gray-50 relative animate-on-scroll" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center text-gray-800">Project Experience</h2>
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-400 relative hover:translate-y-[-8px] hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-0 before:bg-gradient-to-b before:from-primary before:to-secondary before:transition-[height] before:duration-400 hover:before:h-full group">
              <div className="p-5 sm:p-6 border-l-[5px] bg-gradient-to-br from-gray-50 to-white transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-yellow-50 group-hover:to-white" style={{ borderLeftColor: project.color }}>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-2.5 text-gray-800 transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <div className="text-xs sm:text-sm text-gray-600 italic">{project.tech}</div>
              </div>
              <ul className="p-5 sm:p-6 m-0 list-none">
                {project.description.map((feature, idx) => (
                  <li key={idx} className="py-2 sm:py-2.5 pl-5 sm:pl-6 relative text-gray-700 leading-relaxed text-sm sm:text-base">
                    <span className="absolute left-0 text-primary font-bold text-lg sm:text-xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-[360deg]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
