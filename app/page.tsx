import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Experience from "./Components/Experience"
import Projects from "./Components/Projects"
import Certifications from "./Components/Certifications"
import Contact from "./Components/Contact"

export default function Home() {
  return (
    <main className="bg-black/80 backdrop-blur-sm text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}

