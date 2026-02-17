export default function ProjectsSection() {

  const projects = [
    {
      title: "Smart Farming Assistant",
      desc: "IoT + Web based smart farming solution for monitoring crops, soil and environment.",
      tech: ["React", "Node", "MongoDB", "IoT", "Tailwind"],
      live: "#",
      github: "#",
      details: "#"
    },
    {
      title: "Water Quality Monitoring System",
      desc: "Sensor-based real-time water quality monitoring and analytics platform.",
      tech: ["React", "Express", "MongoDB", "Sensors", "API"],
      live: "#",
      github: "#",
      details: "#"
    },
    {
      title: "Developer Portfolio",
      desc: "Personal portfolio website showcasing projects, skills and experience.",
      tech: ["React", "Tailwind", "Vite"],
      live: "#",
      github: "#",
      details: "#"
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-28 relative overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute top-32 left-24 w-[420px] h-[420px] bg-cyan-500/10 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-32 right-24 w-[420px] h-[420px] bg-purple-500/10 blur-[200px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative p-7 rounded-2xl 
              border border-white/10
              bg-gradient-to-br from-black via-gray-900 to-black
              transition-all duration-500
              hover:border-purple-400/40
              hover:shadow-[0_0_50px_rgba(168,85,247,0.25)]"
            >

              {/* Inner Glow Layer */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-purple-500/10 blur-xl"
              ></div>

              <div className="relative z-10 flex flex-col h-full">

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white 
                group-hover:text-purple-400 transition">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full 
                      border border-purple-400/30 
                      text-purple-300 
                      bg-purple-500/10 
                      backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex flex-wrap gap-3">

                  {/* Live */}
                  <a
                    href={p.live}
                    className="flex-1 text-center px-4 py-2 rounded-lg 
                    bg-gradient-to-r from-cyan-400 to-purple-500
                    text-black text-sm font-semibold
                    hover:scale-105 
                    hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]
                    transition"
                  >
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={p.github}
                    className="flex-1 text-center px-4 py-2 rounded-lg 
                    border border-purple-400/50 
                    text-purple-400 text-sm font-semibold
                    hover:bg-purple-500 hover:text-black 
                    hover:scale-105 
                    transition"
                  >
                    GitHub
                  </a>

                  {/* Details */}
                  <a
                    href={p.details}
                    className="w-full text-center px-4 py-2 rounded-lg 
                    border border-white/20 
                    text-gray-300 text-sm
                    hover:border-purple-400 
                    hover:text-purple-400 
                    transition"
                  >
                    View Case Study →
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
