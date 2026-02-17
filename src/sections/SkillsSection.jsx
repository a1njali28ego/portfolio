export default function SkillsSection() {

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 93 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 87 },
        { name: "MongoDB", level: 82 },
        { name: "REST APIs", level: 88 },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92 },
        { name: "Vite", level: 85 },
        { name: "Postman", level: 88 },
        { name: "VS Code", level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          A strong blend of frontend, backend, and development tools focused on building
          scalable, high-performance and modern applications.
        </p>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-3 gap-10">

          {skillGroups.map((group, gi) => (
            <div
              key={gi}
              className="p-6 rounded-2xl border border-cyan-500/30 bg-gray-950 
                         hover:shadow-[0_0_40px_rgba(34,211,238,0.35)] transition duration-300"
            >

              {/* Group Title */}
              <h3 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <div key={i}>

                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full 
                                   shadow-[0_0_15px_rgba(34,211,238,0.6)] transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Tagline */}
        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg">
            Constantly learning, evolving, and upgrading my skillset with  
            <span className="text-cyan-400 font-semibold"> modern technologies</span> 
          </p>
        </div>

      </div>
    </section>
  )
}
