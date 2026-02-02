import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Method from '@/components/sections/Method'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main className='pt-16 flex-1'>
      <Hero />
      <Projects />
      <Services />
      <Method />
      <About />
      <Contact />
    </main>
  )
}
