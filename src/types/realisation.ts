export type RealisationFrontmatter = {
  title: string
  description: string
  cover?: string
  client?: string
  date?: string
  services?: string[]
  problem?: string
  solution?: string
  result?: string
  resultText?: string
}

export type Realisation = RealisationFrontmatter & {
  slug: string
}
