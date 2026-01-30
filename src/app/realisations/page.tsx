import { getAllRealisations } from '@/lib/mdx'
import RealisationCard from '@/components/realisations/RealisationCard'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'

export default function RealisationsPage() {
  const realisations = getAllRealisations()
  return (
    <section className='space-y-16 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]'>
      <Container className='py-24 space-y-24'>
        {/* Titre */}
        <SectionTitle>Réalisations</SectionTitle>

        {/* Grille */}
        <div className='grid gap-8 sm:grid-cols-2 xl:grid-cols-3'>
          {realisations.map((r, i) => (
            <RealisationCard key={r.slug} r={r} />
          ))}
        </div>
      </Container>
    </section>
  )
}
