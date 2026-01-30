import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tonnom.dev'

  return [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/services`, priority: 0.8 },
    { url: `${baseUrl}/realisations`, priority: 0.8 },
    { url: `${baseUrl}/a-propos`, priority: 0.6 },
    { url: `${baseUrl}/contact`, priority: 0.6 },
  ]
}
