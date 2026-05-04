import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Method from '@/components/sections/Method'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className="flex-1 pt-16">
      <Hero />
      <Projects />
      <Services />
      <Method />
      <About />
      <Contact />
    </main>
  )
}
