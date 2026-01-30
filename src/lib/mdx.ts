import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Realisation, RealisationFrontmatter } from '@/types/realisation'

const realisationsDirectory = path.join(
  process.cwd(),
  'src/content/realisations',
)

export function getAllRealisations(): Realisation[] {
  return fs
    .readdirSync(realisationsDirectory)
    .filter((file) => file.endsWith('.mdx')) // 🔥 CRITIQUE
    .map((file) => {
      const slug = file.replace('.mdx', '')
      const filePath = path.join(realisationsDirectory, file)
      const { data } = matter(fs.readFileSync(filePath, 'utf-8'))

      const frontmatter = data as RealisationFrontmatter

      if (!slug) {
        throw new Error(`Slug invalide pour ${file}`)
      }

      if (!frontmatter.title || !frontmatter.description) {
        throw new Error(`Frontmatter incomplet dans ${file}`)
      }

      return {
        slug,
        ...frontmatter,
      }
    })
}

export function getRealisationBySlug(slug: string) {
  const fullPath = path.join(realisationsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return matter(fileContents)
}

export function getAdjacentRealisations(slug: string): {
  prev?: Realisation
  next?: Realisation
} {
  const all = getAllRealisations().sort(
    (a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime(),
  )

  const index = all.findIndex((r) => r.slug === slug)

  if (index === -1) return {}

  return {
    prev: all[index - 1],
    next: all[index + 1],
  }
}

export type RealisationMeta = {
  slug: string
  title: string
  description: string
  cover?: string
}
