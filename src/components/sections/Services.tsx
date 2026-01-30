import Container from '@/components/ui/Container'

export default function Services() {
  return (
    <Container className='py-24 space-y-24'>
      <h2 className='text-3xl font-semibold tracking-tight mb-10 text-center'>
        Mes services
      </h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {[
          'Site vitrine professionnel',
          'SEO & performance',
          'Refonte & optimisation',
        ].map((service) => (
          <div
            key={service}
            className='rounded-2xl border bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg'
          >
            <h3 className='text-xl font-semibold mb-2'>{service}</h3>
            <p className='text-muted-foreground'>
              Une solution adaptée à vos objectifs business.
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}
