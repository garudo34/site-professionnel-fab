import { getRealisationBySlug, getAllRealisations } from '@/lib/mdx'
import { getAdjacentRealisations } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'

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
  const { prev, next } = getAdjacentRealisations(slug)

  return (
    <Container className='py-24 space-y-24'>
      {/* HERO */}
      <header className='space-y-4 max-w-3xl'>
        {/* <SectionTitle>{data.title}</SectionTitle> */}
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
        <div className='rounded-2xl border bg-white p-6 transition hover:shadow-lg'>
          <h3 className='text-xl font-semibold mb-2'>🎯 Problème</h3>
          <p>{data.problem}</p>
        </div>

        <div className='rounded-2xl border bg-white p-6 transition hover:shadow-lg'>
          <h3 className='text-xl font-semibold mb-2'>💡 Solution</h3>
          <p>{data.solution}</p>
        </div>

        <div className='rounded-2xl border bg-white p-6 transition hover:shadow-lg'>
          <h3 className='text-xl font-semibold mb-2'>🚀 Résultat</h3>
          <p>{data.result}</p>
        </div>
      </section>

      <div className='prose prose-neutral max-w-3xl'>
        <MDXRemote source={content} />
      </div>

      <nav className='mt-24 grid grid-cols-1 md:grid-cols-2 gap-8'>
        {prev ? (
          <a
            href={`/realisations/${prev.slug}`}
            className='group rounded-2xl border bg-white p-6 transition hover:shadow-lg'
          >
            <span className='text-sm text-muted-foreground'>
              ← Projet précédent
            </span>
            <h3 className='mt-2 text-xl font-semibold group-hover:underline'>
              {prev.title}
            </h3>
          </a>
        ) : (
          <div />
        )}

        {next ? (
          <a
            href={`/realisations/${next.slug}`}
            className='group rounded-2xl border bg-white p-6 transition hover:shadow-lg text-right '
          >
            <span className='text-sm text-muted-foreground'>
              Projet suivant →
            </span>
            <h3 className='mt-2 text-xl font-semibold group-hover:underline'>
              {next.title}
            </h3>
          </a>
        ) : (
          <div />
        )}
      </nav>

      <section className='space-y-16 rounded-3xl border bg-white  transition hover:shadow-lg py-16 text-center'>
        <h2 className='text-3xl font-semibold tracking-tight mb-4'>
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
    </Container>
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
