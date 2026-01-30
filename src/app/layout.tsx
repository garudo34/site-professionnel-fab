import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tonnom.dev'),
  title: {
    default: 'Développeur web freelance | Sites performants & SEO',
    template: '%s | Développeur web freelance',
  },
  description:
    'Développeur web freelance spécialisé dans la création de sites vitrines modernes, rapides et optimisés SEO.',
  openGraph: {
    title: 'Développeur web freelance',
    description: 'Sites web performants, modernes et orientés résultats.',
    url: 'https://tonnom.dev',
    siteName: 'TonNom.dev',
    locale: 'fr_FR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr'>
      <body
        className={`${inter.variable} ${space.variable} min-h-screen flex flex-col`}
      >
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
