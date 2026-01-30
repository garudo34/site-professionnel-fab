import Link from 'next/link'
import { getAllRealisations } from '@/lib/mdx'
import FadeIn from '@/components/ui/FadeIn'
import Image from 'next/image'
import RealisationCard from '@/components/realisations/RealisationCard'

export default function RealisationsPage() {
  const realisations = getAllRealisations()
  return (
    <section className='bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]'>
      <div className='container py-20'>
        {/* Titre */}
        <h1 className='text-4xl font-bold mb-10 relative inline-block'>
          Réalisations
          <span className='absolute left-0 -bottom-2 h-[3px] w-1/3 bg-black' />
        </h1>
        {/* Grille */}
        <div className='grid gap-8 sm:grid-cols-2 xl:grid-cols-3'>
          {realisations.map((r, i) => (
            <RealisationCard key={r.slug} r={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
