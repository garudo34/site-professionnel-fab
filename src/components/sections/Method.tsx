import SectionTitle from '@/components/ui/SectionTitle'

const steps = [
  {
    number: '01',
    title: 'Échange',
    desc: 'Compréhension de vos besoins, objectifs et contraintes.',
  },
  {
    number: '02',
    title: 'Conception',
    desc: 'Structure, UX et choix techniques adaptés.',
  },
  {
    number: '03',
    title: 'Développement',
    desc: 'Intégration rapide, propre et performante.',
  },
  {
    number: '04',
    title: 'Livraison',
    desc: 'Tests, mise en ligne et accompagnement.',
  },
]

export default function Method() {
  return (
    <section
      id="methode"
      className="relative overflow-hidden bg-neutral-900 py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_top,rgba(59,130,246,0.25),transparent_60%)]"
      />

      <div className="relative container">
        {/* Header */}

        <SectionTitle subtitle="Une approche simple et efficace pour garantir des résultats fiables.">
          Une méthode claire pour des projets efficaces
        </SectionTitle>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-white/15 bg-neutral-800 p-8 text-center"
            >
              <div className="mb-4 text-4xl font-bold text-blue-400">
                {step.number}
              </div>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-sm text-neutral-200/80">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
