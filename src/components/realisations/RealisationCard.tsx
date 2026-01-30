import Link from 'next/link'
import Image from 'next/image'
import { Realisation } from '@/types/realisation'

export default function RealisationCard({ r }: { r: Realisation }) {
  return (
    <Link
      key={r.slug}
      href={`/realisations/${r.slug}`}
      className='group relative flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white dark:bg-neutral-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-black/30'
    >
      {/* IMAGE COVER */}
      {r.cover && (
        <div className='relative mb-6 aspect-[16/10] overflow-hidden rounded-xl'>
          <Image
            src={r.cover}
            alt={r.title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      )}

      {/* BADGES */}
      <div className='mb-3 flex flex-wrap gap-2 text-xs'>
        {r.result && (
          <span className='rounded-full bg-black px-3 py-1 font-semibold text-white'>
            {r.result}
          </span>
        )}

        {r.client && (
          <span className='rounded-full bg-neutral-100 px-3 py-1 text-muted-foreground'>
            {r.client}
          </span>
        )}

        {r.date && (
          <span className='rounded-full bg-neutral-100 px-3 py-1 text-muted-foreground'>
            {r.date}
          </span>
        )}

        {r.services?.map((service) => (
          <span
            key={service}
            className='rounded-full bg-black/5 px-3 py-1 font-medium text-black'
          >
            {service}
          </span>
        ))}
      </div>

      {/* CONTENU */}
      <div>
        <h2 className='text-xl font-semibold mb-3'>{r.title}</h2>
        <p className='text-sm text-muted-foreground leading-relaxed'>
          {r.description}
        </p>
      </div>
      {/* CTA */}
      <span className='mt-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-black transition'>
        Voir le projet
        <span className='transition-transform duration-300 group-hover:translate-x-1'>
          →
        </span>
      </span>
      {/* TRAIT SIGNATURE */}
      <div className='relative overflow-hidden rounded-b-2xl h-[2px] mt-6'>
        <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full' />
      </div>
    </Link>
  )
}
