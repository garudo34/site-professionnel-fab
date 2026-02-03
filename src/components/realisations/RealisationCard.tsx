import Link from 'next/link'
import Image from 'next/image'
import { Realisation } from '@/types/realisation'

export default function RealisationCard({ r }: { r: Realisation }) {
  return (
    <Link
      key={r.slug}
      href={`/realisations/${r.slug}`}
      className='group relative overflow-hidden flex flex-col justify-between rounded-2xl bg-neutral-800 border border-white/10 border-neutral-900  transition hover:-translate-y-1 hover:border-blue-500/40'
    >
      {/* IMAGE COVER */}
      {r.cover && (
        <div className='relative aspect-[16/10] overflow-hidden'>
          <Image
            src={r.cover}
            alt={r.title}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
          />
          {/* <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' /> */}
        </div>
      )}
      {/* Content */}
      <div className='relative p-6 bg-neutral-700/70 backdrop-blur-sm'>
        <h3 className='text-xl font-semibold text-white mb-2'>{r.title}</h3>

        <p className='text-sm text-neutral-200/80 mb-4'>{r.description}</p>

        {/* Badges */}
        <div className='flex flex-wrap gap-2 text-xs'>
          {/* {r.client && (
            <span className='rounded-full border border-white/10 px-3 py-1'>
              {r.client}
            </span>
          )}
          {r.date && (
            <span className='rounded-full border border-white/10 px-3 py-1'>
              {r.date}
            </span>
          )} */}
          {r.services?.map((service) => (
            <span
              key={service}
              className='rounded-full bg-white/10 px-3 py-1 text-white'
            >
              {service}
            </span>
          ))}
          <span className='rounded-full bg-blue-500/15 px-3 py-1 text-blue-400'>
            Concept
          </span>
          <div
            aria-hidden
            className='pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(400px_circle_at_top,rgba(59,130,246,0.18),transparent_60%)]'
          />
        </div>
      </div>
    </Link>
  )
}
