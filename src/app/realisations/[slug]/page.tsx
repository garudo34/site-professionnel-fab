import { getRealisationBySlug, getAllRealisations } from '@/lib/mdx'
import { getAdjacentRealisations } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
    <div>
      <section className='bg-neutral-900 py-24 md:py-32'>
        <div className='container grid gap-12 md:grid-cols-2 items-center'>
          {/* Texte */}
          <div>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>
              {data.title}
            </h1>

            <p className='text-lg text-neutral-200/80 mb-8'>
              {data.description}
            </p>

            <div className='flex flex-wrap gap-2 text-sm'>
              {data.services?.map((service: string) => (
                <span
                  key={service}
                  className='rounded-full bg-white/10 px-4 py-1'
                >
                  {service}
                </span>
              ))}

              {data.date && (
                <span className='rounded-full bg-blue-500/15 px-4 py-1 text-blue-400'>
                  {data.date}
                </span>
              )}
            </div>
          </div>

          {/* Image */}
          <div className='relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-800'>
            <Image
              src={data.cover}
              alt={data.title}
              fill
              className='object-cover w-full h-full'
            />
          </div>
        </div>
      </section>
      <section className='bg-neutral-950 py-24 md:py-32'>
        <div className='container grid gap-8 md:grid-cols-3'>
          {[
            { title: '🎯 Problème', content: data.problem },
            { title: '💡 Solution', content: data.solution },
            { title: '🚀 Résultat', content: data.result },
          ].map(
            (item) =>
              item.content && (
                <div
                  key={item.title}
                  className='rounded-2xl bg-neutral-800 p-6'
                >
                  <h3 className='font-semibold mb-3'>{item.title}</h3>
                  <p className='text-neutral-200/80 text-sm'>{item.content}</p>
                </div>
              ),
          )}
        </div>
      </section>
      <section className='bg-neutral-900 py-24 md:py-32'>
        <div className='container'>
          <div className='prose prose-invert max-w-none bg-neutral-700/60 rounded-2xl p-8'>
            <MDXRemote source={content} />
          </div>
        </div>
      </section>
      <section className='bg-neutral-950 py-24 md:py-32'>
        <div className='container flex justify-between text-sm'>
          {prev && (
            <Link
              href={`/realisations/${prev.slug}`}
              className='hover:text-blue-400'
            >
              ← {prev.title}
            </Link>
          )}
          {next && (
            <Link
              href={`/realisations/${next.slug}`}
              className='hover:text-blue-400 ml-auto'
            >
              {next.title} →
            </Link>
          )}
        </div>
      </section>
    </div>
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
