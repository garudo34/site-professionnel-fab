import Image from 'next/image'
import Link from 'next/link'
import { getAllRealisations } from '@/lib/mdx'
import SectionTitle from '../ui/SectionTitle'

export default function Projects() {
  const realisations = getAllRealisations().slice(0, 3)
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
            <Link
              key={r.slug}
              href={`/realisations/${r.slug}`}
              className='group rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 transition overflow-hidden'
            >
              {/* Cover */}
              {r.cover && (
                <div className='relative h-48'>
                  <Image
                    src={r.cover}
                    alt={r.title}
                    fill
                    className='object-cover'
                  />
                </div>
              )}

              {/* Content */}
              <div className='p-6 space-y-4'>
                <h3 className='text-xl font-semibold'>{r.title}</h3>

                <p className='text-sm text-neutral-400'>{r.description}</p>

                {/* Badges */}
                <div className='flex flex-wrap gap-2 pt-2'>
                  {r.client && (
                    <span className='rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300'>
                      {r.client}
                    </span>
                  )}
                  {r.date && (
                    <span className='rounded-full bg-white/5 px-3 py-1 text-xs text-neutral-300'>
                      {r.date}
                    </span>
                  )}
                  {r.services?.[0] && (
                    <span className='rounded-full bg-blue-600/10 px-3 py-1 text-xs text-blue-400'>
                      {r.services[0]}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <span className='inline-flex items-center gap-2 text-sm text-blue-400 pt-4 group-hover:underline'>
                  Voir le projet →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
