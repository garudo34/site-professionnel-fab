import Link from 'next/link'
import Container from '@/components/ui/Container'

export default function CTA() {
  return (
    <Container className='py-24 space-y-24 text-center'>
      <h2 className='text-3xl font-semibold tracking-tight mb-6'>
        Vous avez un projet web ?
      </h2>
      <p className='text-xl text-muted-foreground mb-10'>
        Discutons de votre besoin et voyons comment le concrétiser.
      </p>

      <Link
        href='/contact'
        className='inline-block bg-black text-white px-8 py-4 rounded-xl text-lg'
      >
        Discutons de votre projet
      </Link>
    </Container>
  )
}
