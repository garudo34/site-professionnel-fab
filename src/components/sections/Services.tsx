export default function Services() {
  return (
    <section className='container py-20'>
      <h2 className='text-3xl font-bold mb-10 text-center'>Mes services</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {[
          'Site vitrine professionnel',
          'SEO & performance',
          'Refonte & optimisation',
        ].map((service) => (
          <div
            key={service}
            className='border rounded-2xl p-8 transition hover:-translate-y-1 hover:shadow-lg'
          >
            <h3 className='font-semibold mb-2'>{service}</h3>
            <p className='text-muted-foreground'>
              Une solution adaptée à vos objectifs business.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
