export default function Contact(){
  return(
    <section id="contact" className="p-20 text-center">
      <h2 className="text-3xl text-cyan-400">Contact</h2>
      <form className="max-w-md mx-auto mt-6 space-y-4">
        <input className="w-full p-3 bg-black border border-cyan-400/30 rounded" placeholder="Name" />
        <input className="w-full p-3 bg-black border border-cyan-400/30 rounded" placeholder="Email" />
        <textarea className="w-full p-3 bg-black border border-cyan-400/30 rounded" placeholder="Message"></textarea>
        <button className="w-full py-3 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black">Send</button>
      </form>
    </section>
  )
}