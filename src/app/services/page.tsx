import Container from '@/components/ui/Container'

export const metadata = {
  title: 'Services web freelance',
  description:
    'Création de sites vitrines, refonte, SEO et accompagnement digital.',
}

export default function ServicesPage() {
  return (
    <Container className='py-24 space-y-24'>
      {/* Hero */}
      <div className='space-y-4 text-center max-w-3xl mx-auto'>
        <h1 className='text-4xl font-bold tracking-tight mb-6'>
          Des services web pensés pour faire grandir votre activité
        </h1>
        <p className='text-xl text-muted-foreground'>
          Solutions web modernes, performantes et orientées résultats.
        </p>
      </div>

      {/* Services */}
      <div className='grid md:grid-cols-2 gap-12'>
        {services.map((service) => (
          <div
            key={service.title}
            className='border bg-white p-8 transition hover:shadow-lg rounded-2xl'
          >
            <h2 className='text-3xl font-semibold tracking-tight mb-4'>
              {service.title}
            </h2>
            <p className='mb-4 text-muted-foreground'>{service.problem}</p>
            <p className='font-medium'>{service.solution}</p>
          </div>
        ))}
      </div>

      {/* Méthode */}
      <div className='text-center'>
        <h2 className='text-3xl font-semibold tracking-tight mb-8'>
          Ma méthode de travail
        </h2>
        <ol className='flex flex-col md:flex-row justify-center gap-6'>
          {[
            'Analyse',
            'Proposition',
            'Développement',
            'Mise en ligne',
            'Suivi',
          ].map((step, i) => (
            <li key={step} className='border rounded-xl px-6 py-4'>
              <span className='font-bold mr-2'>{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* CTA */}
      <div className='text-center'>
        <a
          href='/contact'
          className='inline-block bg-black text-white px-8 py-4 rounded-xl text-lg'
        >
          Discutons de votre projet
        </a>
      </div>
    </Container>
  )
}

const services = [
  {
    title: 'Création de site vitrine',
    problem: 'Vous n’avez pas de site ou il ne génère aucun contact.',
    solution:
      'Un site moderne, rapide et optimisé pour convertir vos visiteurs.',
  },
  {
    title: 'Refonte de site',
    problem: 'Votre site est lent, obsolète ou peu efficace.',
    solution: 'Une refonte orientée performance, SEO et image de marque.',
  },
  {
    title: 'SEO & visibilité',
    problem: 'Votre site existe mais personne ne le trouve.',
    solution: 'Optimisation SEO technique pour améliorer votre visibilité.',
  },
  {
    title: 'Maintenance & accompagnement',
    problem: 'Vous manquez de temps ou de compétences techniques.',
    solution: 'Un accompagnement fiable pour faire évoluer votre site.',
  },
]
