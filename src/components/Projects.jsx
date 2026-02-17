export default function Projects(){
  return(
    <section id="projects" className="p-20">
      <h2 className="text-3xl text-cyan-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {[1,2,3].map(p=> (
          <div key={p} className="border border-cyan-400/30 p-6 rounded-lg hover:shadow-cyan-500/50 hover:shadow-lg transition">
            <h3 className="text-xl">Project {p}</h3>
            <p className="text-gray-400 mt-2">Project description here</p>
          </div>
        ))}
      </div>
    </section>
  )
}