export default function Skills(){
  return(
    <section id="skills" className="p-20">
      <h2 className="text-3xl text-cyan-400">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {["HTML","CSS","JS","React","Node","MongoDB","SQL","Git"].map(skill=> (
          <div key={skill} className="border border-cyan-400/30 p-4 rounded text-center">{skill}</div>
        ))}
      </div>
    </section>
  )
}