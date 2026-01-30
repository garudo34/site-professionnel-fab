// components/sections/Hero.tsx

import FadeIn from '@/components/ui/FadeIn'

export default function Hero() {
  return (
    <section className='container py-32 text-center'>
      <FadeIn>
        <h1 className='text-5xl font-bold mb-6'>Développeur web freelance</h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className='text-xl text-muted-foreground mb-10'>
          J’aide les entreprises à créer des sites modernes, rapides et
          efficaces
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <a
          href='/contact'
          className='inline-block bg-black text-white px-8 py-4 rounded-xl text-lg hover:opacity-90 transition'
        >
          Discutons de votre projet
        </a>
      </FadeIn>
    </section>
  )
}
