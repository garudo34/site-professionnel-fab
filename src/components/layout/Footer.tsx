import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function Footer() {
  return (
    <footer className='border-t bg-muted/40 mt-24'>
      <Container className='py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between text-sm text-muted-foreground'>
        {/* Branding */}
        <p className='text-base'>
          © {new Date().getFullYear()} TonNom.dev — Tous droits réservés
        </p>

        {/* Navigation secondaire */}
        <nav className='flex gap-6'>
          <Link
            href='/mentions-legales'
            className='hover:text-black transition'
          >
            Mentions légales
          </Link>
          <Link href='/contact' className='hover:text-black transition'>
            Contact
          </Link>
        </nav>
      </Container>
    </footer>
  )
}
