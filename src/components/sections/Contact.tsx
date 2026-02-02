export default function Contact() {
  return (
    // <section id='contact' className='relative py-32 overflow-hidden'>
    <section
      id='contact'
      className='relative bg-neutral-900 py-24 md:py-32 overflow-hidden'
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_top,rgba(59,130,246,0.25),transparent_60%)]'
      />

      <div className='container relative'>
        <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-16 text-center'>
          <h2 className='relative z-10 text-4xl font-bold mb-6'>
            Un projet en tête ?
          </h2>

          <p className='relative z-10 mb-10 text-lg text-neutral-400'>
            Discutons ensemble de la meilleure solution pour votre activité.
          </p>

          <div className='relative z-10 flex justify-center gap-4'>
            <a
              href='mailto:contact@ton-email.fr'
              className='inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-medium text-white hover:bg-blue-500 transition'
            >
              Me contacter
            </a>

            <a
              href='#realisations'
              className='inline-flex items-center justify-center rounded-xl border border-white/10 px-8 py-4 text-neutral-300 hover:bg-white/5 transition'
            >
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
