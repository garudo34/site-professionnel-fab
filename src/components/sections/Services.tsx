import { Monitor, ShoppingCart, Rocket, RefreshCcw } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

const services = [
  {
    title: 'Site vitrine',
    desc: 'Présence en ligne moderne, rapide et optimisée pour convertir.',
    icon: Monitor,
  },
  {
    title: 'E-commerce',
    desc: 'Boutiques performantes, sécurisées et faciles à gérer.',
    icon: ShoppingCart,
  },
  {
    title: 'Application web',
    desc: 'Interfaces sur-mesure avec Next.js et une UX soignée.',
    icon: Rocket,
  },
  {
    title: 'Refonte & optimisation',
    desc: 'Amélioration UX, performances et SEO de l’existant.',
    icon: RefreshCcw,
  },
]

export default function Services() {
  return (
    <section
      id='services'
      className='relative bg-neutral-950 py-24 md:py-32 overflow-hidden'
    >
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_top,rgba(59,130,246,0.25),transparent_60%)]'
      />
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_bottom,rgba(59,130,246,0.1),transparent_70%)]'
      />

      <div className='container relative'>
        {/* Header */}
        <SectionTitle subtitle='Des solutions adaptées à vos besoins réels'>
          Services
        </SectionTitle>
        {/* Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className='rounded-2xl bg-neutral-800 border border-white/15 p-8 text-center'
              >
                {/* Icon */}
                <div className='mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-xl text-blue-400'>
                  <Icon className='h-10 w-10 text-blue-400 mb-6' />
                </div>

                <h3 className='text-lg font-semibold mb-3'>{service.title}</h3>

                <p className='text-sm text-neutral-200/80'>{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
