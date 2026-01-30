import { getRealisationBySlug, getAllRealisations } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllRealisations()
    .filter((r) => typeof r.slug === 'string')
    .map((r) => ({
      slug: r.slug,
    }))
}

export default async function RealisationPage({ params }: Props) {
  const { slug } = await params

  if (!slug) {
    notFound()
  }

  const { content, data } = getRealisationBySlug(slug)

  return (
    <article className='container py-24 space-y-24'>
      {/* HERO */}

      <header className='max-w-3xl'>
        <h1 className='text-4xl font-bold mb-4'>{data.title}</h1>
        <p className='text-xl text-muted-foreground'>{data.description}</p>
      </header>

      <div className='flex flex-wrap gap-2 text-sm'>
        {data.result && (
          <span className='rounded-full bg-black px-3 py-1 text-white font-semibold'>
            {data.result}
          </span>
        )}

        {data.client && (
          <span className='rounded-full bg-neutral-100 px-3 py-1'>
            {data.client}
          </span>
        )}

        {data.date && (
          <span className='rounded-full bg-neutral-100 px-3 py-1'>
            {data.date}
          </span>
        )}

        {data.services?.map((service: string) => (
          <span key={service} className='rounded-full bg-black/5 px-3 py-1'>
            {service}
          </span>
        ))}
      </div>

      {data.cover && (
        <div className='overflow-hidden rounded-3xl border'>
          <img
            src={data.cover}
            alt={data.title}
            className='w-full object-cover'
          />
        </div>
      )}

      <section className='grid md:grid-cols-3 gap-8'>
        <div className='rounded-2xl border p-6'>
          <h3 className='font-semibold mb-2'>🎯 Problème</h3>
          <p>{data.problem}</p>
        </div>

        <div className='rounded-2xl border p-6'>
          <h3 className='font-semibold mb-2'>💡 Solution</h3>
          <p>{data.solution}</p>
        </div>

        <div className='rounded-2xl border p-6'>
          <h3 className='font-semibold mb-2'>🚀 Résultat</h3>
          <p>{data.result}</p>
        </div>
      </section>

      <div className='prose prose-neutral max-w-3xl'>
        <MDXRemote source={content} />
      </div>

      <section className='rounded-3xl border bg-neutral-50 py-16 text-center'>
        <h2 className='text-3xl font-bold mb-4'>
          Vous avez un projet similaire ?
        </h2>
        <p className='text-muted-foreground mb-8'>
          Discutons ensemble de la meilleure solution pour votre activité.
        </p>
        <a
          href='/contact'
          className='inline-block rounded-xl bg-black px-8 py-4 text-white transition hover:bg-black/90'
        >
          Parlons de votre projet
        </a>
      </section>
    </article>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!slug) {
    notFound()
  }

  const { data } = getRealisationBySlug(slug)

  return {
    title: `${data.title} | Développeur web freelance`,
    description: data.description,
  }
}
