export default function Navbar(){
  return(
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto flex justify-between p-4">
        <h1 className="text-cyan-400 font-bold">Anjali</h1>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}