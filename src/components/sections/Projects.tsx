import { getAllRealisations } from '@/lib/mdx'
import SectionTitle from '../ui/SectionTitle'
import RealisationCard from '@/components/realisations/RealisationCard'

export default function Projects() {
  const realisations = getAllRealisations().slice(0, 4)
  return (
    <section
      id='realisations'
      className='relative bg-neutral-900 py-24 md:py-32 overflow-hidden '
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_top,rgba(59,130,246,0.25),transparent_60%)]'
      />

      <div className='container relative'>
        {/* Header */}
        <div className='mb-16 max-w-2xl'>
          <SectionTitle subtitle='Une sélection de projets récents réalisés pour des clients.'>
            Réalisations
          </SectionTitle>
        </div>

        {/* Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {realisations.map((r) => (
            <RealisationCard key={r.slug} r={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
