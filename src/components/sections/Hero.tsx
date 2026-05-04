export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950 py-24 md:py-32"
    >
      {/* Background */}
      {/* Gradient top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_top,rgba(59,130,246,0.25),transparent_60%)]"
      />
      {/* Gradient bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_bottom,rgba(59,130,246,0.12),transparent_70%)]"
      />

      {/* Content */}
      <div className="relative container">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
            Développeur web{' '}
            <span className="relative text-blue-400">
              freelance
              <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500/80 to-transparent" />
            </span>
            <br />
            spécialisé en sites modernes et performants
          </h1>

          <p className="mb-10 text-xl text-neutral-400">
            J’aide les indépendants et PME à créer des sites{' '}
            <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
              rapides
            </span>
            ,{' '}
            <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">
              clairs
            </span>{' '}
            et orientés conversion.
          </p>

          <div className="grid grid-cols-1 gap-4 md:flex">
            <a
              href="#realisations"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-medium text-white shadow-[0_0_0_0_rgba(59,130,246,0.4)] transition hover:bg-blue-500 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)]"
            >
              Voir mes réalisations
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-medium text-white shadow-[0_0_0_0_rgba(59,130,246,0.4)] transition hover:bg-blue-500 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.6)]"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
