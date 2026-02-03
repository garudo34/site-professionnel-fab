import SectionTitle from '@/components/ui/SectionTitle'

export default function AboutSection() {
  return (
    <section
      id='about'
      className='relative bg-neutral-950 py-24 md:py-32 overflow-hidden'
    >
      {/* Gradient top */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0
        bg-[radial-gradient(700px_circle_at_top,rgba(59,130,246,0.16),transparent_60%)]'
      />

      {/* Gradient bottom */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0
        bg-[radial-gradient(600px_circle_at_bottom,rgba(59,130,246,0.1),transparent_70%)]'
      />

      {/* Content */}
      <div className='container relative grid gap-16 md:grid-cols-2 items-center'>
        {/* Texte */}
        <div>
          <SectionTitle subtitle='Quelques mots sur moi'>À propos</SectionTitle>

          <p className='text-lg text-neutral-200/80 mb-6'>
            Développeur web freelance, j’accompagne indépendants et PME dans la
            création de sites performants, modernes et pensés pour convertir.
          </p>

          <p className='text-neutral-200/70'>
            J’accorde une attention particulière à la performance, à
            l’expérience utilisateur et à la qualité du code, afin de livrer des
            projets fiables et évolutifs.
          </p>
        </div>

        {/* Carte profil */}
        <div className='rounded-2xl bg-neutral-800 border border-white/15 p-8'>
          <h3 className='text-xl font-semibold mb-6'>
            Fabien — Développeur web
          </h3>

          <ul className='space-y-4 text-sm text-neutral-200/80'>
            <li>• +10 ans d’expérience en développement web</li>
            <li>• Spécialisé React / Next.js</li>
            <li>• Approche orientée performance & UX</li>
            <li>• Communication claire et transparente</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
