import SectionTitle from '../ui/SectionTitle'

export default function About() {
  return (
    <section
      id='about'
      className='relative bg-neutral-950 py-24 md:py-32 overflow-hidden'
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_top,rgba(59,130,246,0.25),transparent_60%)]'
      />

      <div className='container relative max-w-3xl'>
        {/* Header */}
        <SectionTitle>A Propos</SectionTitle>

        <p className='text-lg text-neutral-400'>
          J’accompagne indépendants et PME dans la création de sites rapides,
          élégants et faciles à maintenir. Spécialisé en{' '}
          <span className='text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]'>
            Next.js, React et performance
          </span>
          .
        </p>
      </div>
    </section>
  )
}
