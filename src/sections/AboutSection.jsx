export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-24 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/25 blur-[160px] rounded-full"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-purple-400/10 blur-[140px] rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Anjali Patil</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              A passionate <span className="text-white font-semibold">Full Stack Developer</span> who loves building
              scalable, secure and high-performance web applications.  
              I focus on clean architecture, modern UI systems, and real-world problem solving through technology.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              I believe in writing <span className="text-cyan-400">clean code</span>, designing 
              <span className="text-purple-400"> beautiful interfaces</span>, and continuously upgrading my 
              skills with modern technologies and industry practices.
            </p>

            {/* Personality Tags */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Problem Solver",
                "Quick Learner",
                "Team Player",
                "Creative Thinker",
                "Tech Enthusiast",
                "Growth Mindset"
              ].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-sm rounded-full border border-purple-500/30 
                             text-purple-300 hover:bg-purple-500/10 
                             hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] 
                             transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-6">

            {[
              { val: "15+", label: "Projects Built" },
              { val: "10+", label: "Technologies" },
              { val: "100%", label: "Learning Mindset" },
              { val: "∞", label: "Growth Potential" },
            ].map((item, i) => (
              <div key={i}
                className="p-6 rounded-xl border border-purple-500/20 bg-gray-950
                hover:shadow-[0_0_35px_rgba(168,85,247,0.35),0_0_35px_rgba(34,211,238,0.25)]
                transition"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {item.val}
                </h3>
                <p className="text-gray-400 mt-2">{item.label}</p>
              </div>
            ))}

          </div>

        </div>

        {/* Workflow */}
        <div className="mt-28 relative">

          <h3 className="text-3xl font-semibold text-center mb-16">
            Development <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Workflow</span>
          </h3>

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-24 bottom-0 w-[2px] 
            bg-gradient-to-b from-purple-400/60 via-cyan-400/30 to-transparent 
            hidden md:block"></div>

          <div className="space-y-8 md:space-y-16">


            {[
              { title: "Discovery", desc: "Understanding the problem, user needs, business goals, and technical feasibility.", side: "left", step: "01" },
              { title: "Architecture", desc: "Designing system structure, database models, APIs, and scalable architecture.", side: "right", step: "02" },
              { title: "Development", desc: "Building frontend, backend, integrations, and core business logic.", side: "left", step: "03" },
              { title: "UI/UX Design", desc: "Creating clean interfaces, accessibility, responsiveness, and visual consistency.", side: "right", step: "04" },
              { title: "Deployment", desc: "CI/CD pipelines, hosting, production setup, and performance optimization.", side: "left", step: "05" },
              { title: "Scaling", desc: "Monitoring, optimization, feature upgrades, and long-term scalability.", side: "right", step: "06" }
            ].map((item, i) => (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row items-center ${
                  item.side === "left" ? "md:justify-start" : "md:justify-end"
                }`}
              >

                {/* Content Card */}
                <div
                  className={`w-full md:w-[45%] p-6 rounded-xl border border-purple-500/25 bg-gray-950
                  hover:shadow-[0_0_40px_rgba(168,85,247,0.35),0_0_30px_rgba(34,211,238,0.25)]
                  transition
                  ${item.side === "left" ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
                >
                  <h4 className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    STEP {item.step}
                  </h4>
                  <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-5 h-5 rounded-full 
                    bg-gradient-to-r from-cyan-400 to-purple-400 
                    shadow-[0_0_25px_rgba(168,85,247,0.6),0_0_25px_rgba(34,211,238,0.6)]">
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}
