export default function ContactSection() {
  return (
    <section id="contact" className="relative min-h-screen bg-black text-white px-6 py-24 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
        </h2>

        {/* Glass Card */}
        <div className="relative p-8 md:p-10 rounded-2xl 
          bg-white/5 backdrop-blur-xl 
          border border-white/10
          shadow-[0_0_60px_rgba(168,85,247,0.15)]">

          {/* Neon Border Glow */}
          <div className="absolute inset-0 rounded-2xl 
            border border-purple-500/20 
            shadow-[0_0_40px_rgba(168,85,247,0.25)] pointer-events-none">
          </div>

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-400">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 rounded-lg 
                  bg-black/60 
                  border border-cyan-500/30 
                  focus:outline-none 
                  focus:border-purple-500/60 
                  focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                  transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 rounded-lg 
                  bg-black/60 
                  border border-cyan-500/30 
                  focus:outline-none 
                  focus:border-purple-500/60 
                  focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                  transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full mt-2 p-3 rounded-lg 
                  bg-black/60 
                  border border-cyan-500/30 
                  focus:outline-none 
                  focus:border-purple-500/60 
                  focus:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                  transition resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-black
                bg-gradient-to-r from-cyan-400 to-purple-500
                hover:scale-[1.02]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.5)]
                transition-all duration-300"
            >
              Send Message 
            </button>

          </form>

          {/* Footer Text */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Let’s build something <span className="text-purple-400">amazing</span> together ✨
          </p>

        </div>
      </div>
    </section>
  )
}
