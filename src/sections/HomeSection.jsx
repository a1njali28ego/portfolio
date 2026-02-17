export default function HomeSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">

      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        {/* Purple glow */}
        <div className="absolute top-24 left-24 w-[420px] h-[420px] bg-purple-500/10 rounded-full blur-[200px]"></div>
        {/* Cyan glow */}
        <div className="absolute bottom-24 right-24 w-[420px] h-[420px] bg-cyan-500/12 rounded-full blur-[200px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Anjali Patil
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            A passionate <span className="text-cyan-400 font-semibold">Full Stack Web and Application Developer</span> crafting
            scalable, high-performance, and visually elegant web and mobile applications
            using modern technologies.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 text-sm">
            {["React", "Node.js", "MongoDB", "Tailwind", "Vite", "Express", "REST APIs"].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1 rounded-full 
                border border-white/10 
                text-gray-300 
                bg-white/5 
                backdrop-blur-md 
                hover:border-purple-400/40
                hover:text-purple-300
                hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]
                transition"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-xl 
              bg-gradient-to-r from-cyan-500 to-purple-500
              text-black font-semibold 
              hover:scale-105 
              hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] 
              transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-xl 
              border border-white/20 
              text-gray-300 
              hover:border-purple-400 
              hover:text-purple-400
              hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
              hover:scale-105 
              transition"
            >
              Contact Me
            </a>

           <a
  href="/resume_2.pdf"
  download
  className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold hover:scale-105 transition"
>
  Resume
</a>


          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 max-w-md">
            {[
              { val: "10+", label: "Projects" },
              { val: "100%", label: "Dedication" },
              { val: "∞", label: "Learning" },
            ].map((s, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-xl 
                bg-white/5 backdrop-blur-md 
                border border-white/10
                hover:border-purple-400/30
                hover:shadow-[0_0_20px_rgba(168,85,247,0.25)]
                transition"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {s.val}
                </h3>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

       {/* Right Visual */}
<div className="relative hidden md:flex justify-center items-center">

  {/* Soft Ambient Glow (Optional – keep one only) */}
  <div className="absolute w-[420px] h-[420px] rounded-full 
    bg-purple-500/10 blur-[200px] animate-pulse-slow">
  </div>

 {/* Outer Glow - Softer */}
<div className="absolute w-[470px] h-[470px] rounded-full
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
  opacity-25
  blur-[200px]">
</div>

{/* Inner Glow - Controlled */}
<div className="absolute w-[380px] h-[380px] rounded-full
  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
  opacity-35
  blur-[140px]">
</div>


  {/* Single Circular Image */}
  <div className="relative w-80 h-80 rounded-full 
    overflow-hidden
    border border-white/10
    shadow-[0_0_80px_rgba(168,85,247,0.35)]
    animate-float-slow">

    <img
      src="/images/WhatsApp Image 2026-02-16 at 1.13.41 PM.jpeg"
      alt="Anjali Patil"
      className="w-full h-full object-cover"
    />

  </div>
</div>


      </div>
    </section>
  )
}
