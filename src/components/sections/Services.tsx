import { Monitor, ShoppingCart, Rocket, RefreshCcw } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

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

      <div className='container relative'>
        {/* Header */}
        <div className='mb-16 max-w-2xl'>
          <SectionTitle subtitle='Des solutions adaptées à vos besoins réels'>
            Services
          </SectionTitle>
        </div>

        {/* Grid */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {/* Service 1 */}
          <div className='rounded-2xl border border-white/10 bg-neutral-900/50 p-8 text-center'>
            <div className='mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-xl '>
              <Monitor className='h-10 w-10 text-blue-400 mb-6' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Site vitrine</h3>
            <p className='text-sm text-neutral-400'>
              Présentez votre activité avec un site rapide, clair et
              professionnel.
            </p>
          </div>

          {/* Service 2 */}
          <div className='rounded-2xl border border-white/10 bg-neutral-900/50 p-8 text-center'>
            <div className='mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-xl '>
              <ShoppingCart className='h-10 w-10 text-blue-400 mb-6' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>E-commerce</h3>
            <p className='text-sm text-neutral-400'>
              Des boutiques modernes, performantes et faciles à gérer.
            </p>
          </div>

          {/* Service 3 */}
          <div className='rounded-2xl border border-white/10 bg-neutral-900/50 p-8 text-center'>
            <div className='mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-xl '>
              <Rocket className='h-10 w-10 text-blue-400 mb-6' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Application web</h3>
            <p className='text-sm text-neutral-400'>
              Outils sur-mesure adaptés à vos besoins métier.
            </p>
          </div>

          {/* Service 4 */}
          <div className='rounded-2xl border border-white/10 bg-neutral-900/50 p-8 text-center'>
            <div className='mx-auto mb-1 flex h-14 w-14 items-center justify-center rounded-xl '>
              <RefreshCcw className='h-10 w-10 text-blue-400 mb-6' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>
              Refonte & optimisation
            </h3>
            <p className='text-sm text-neutral-400'>
              Amélioration des performances, du design et du SEO.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
