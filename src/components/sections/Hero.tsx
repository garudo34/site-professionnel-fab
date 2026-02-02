export default function Hero() {
  return (
    <section
      id='top'
      className='relative min-h-screen flex items-center overflow-hidden bg-neutral-950 py-24 md:py-32'
    >
      {/* Background */}
      {/* Gradient top */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_top,rgba(59,130,246,0.25),transparent_60%)]'
      />

      {/* Gradient bottom */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_bottom,rgba(59,130,246,0.12),transparent_70%)]'
      />

      {/* Content */}
      <div className='container relative'>
        <div className='max-w-3xl'>
          <h1 className='text-5xl md:text-6xl font-bold leading-tight mb-6'>
            Développeur web{' '}
            <span className='relative text-blue-400'>
              freelance
              <span className='absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500/80 to-transparent' />
            </span>
          </h1>

          <p className='text-xl text-neutral-400 mb-10'>
            Sites performants,{' '}
            <span className='text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]'>
              modernes
            </span>{' '}
            et sur-mesure pour indépendants et PME.
          </p>

          <div className='flex gap-4'>
            <a
              href='#realisations'
              className='inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-medium text-white hover:bg-blue-500 transition shadow-[0_0_0_0_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)]'
            >
              Voir mes réalisations
            </a>

            <a
              href='#contact'
              className='inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-medium text-white hover:bg-blue-500 transition shadow-[0_0_0_0_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)]'
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
