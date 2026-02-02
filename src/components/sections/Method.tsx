import SectionTitle from '../ui/SectionTitle'

export default function Method() {
  return (
    <section
      id='methode'
      className='relative bg-neutral-900 py-24 md:py-32 overflow-hidden'
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_top,rgba(59,130,246,0.25),transparent_60%)]'
      />

      <div className='container relative'>
        {/* Header */}
        <div className='mb-20 max-w-2xl'>
          <SectionTitle subtitle='Une approche simple et efficace pour garantir des résultats fiables.'>
            Méthode de travail
          </SectionTitle>
        </div>

        {/* Steps */}
        <div className='relative grid gap-16 md:grid-cols-4'>
          {/* Ligne horizontale */}
          <div className='absolute top-8 left-0 right-0 hidden md:block'>
            <div className='h-px bg-white/10' />
          </div>

          {/* Step 1 */}
          <div className='relative text-center'>
            <span className='relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl font-bold text-blue-500/40'>
              01
            </span>
            <h3 className='text-lg font-semibold mb-2'>Analyse</h3>
            <p className='text-sm text-neutral-400'>
              Compréhension de vos besoins, objectifs et contraintes.
            </p>
          </div>

          {/* Step 2 */}
          <div className='relative text-center'>
            <span className='relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl font-bold text-blue-500/40'>
              02
            </span>
            <h3 className='text-lg font-semibold mb-2'>Conception</h3>
            <p className='text-sm text-neutral-400'>
              Définition de l’architecture et des choix techniques.
            </p>
          </div>

          {/* Step 3 */}
          <div className='relative text-center'>
            <span className='relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl font-bold text-blue-500/40'>
              03
            </span>
            <h3 className='text-lg font-semibold mb-2'>Développement</h3>
            <p className='text-sm text-neutral-400'>
              Implémentation propre, performante et maintenable.
            </p>
          </div>

          {/* Step 4 */}
          <div className='relative text-center'>
            <span className='relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl font-bold text-blue-500/40'>
              04
            </span>
            <h3 className='text-lg font-semibold mb-2'>Livraison</h3>
            <p className='text-sm text-neutral-400'>
              Mise en ligne, tests finaux et accompagnement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
