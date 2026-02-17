import Navbar from './components/Navbar'
import HomeSection from './sections/HomeSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'



export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
     
      <ProjectsSection />
      <ContactSection />
      <Footer />
      
    </div>
  )
}
