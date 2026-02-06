import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from '@/components/ui/ContactForm'

export default function Contact() {
  return (
    <section
      id='contact'
      className='relative overflow-hidden py-24 md:py-32 bg-neutral-900'
    >
      {/* Gradient top */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0
        bg-[radial-gradient(700px_circle_at_top,rgba(59,130,246,0.2),transparent_60%)]'
      />

      {/* Gradient bottom */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0
        bg-[radial-gradient(600px_circle_at_bottom,rgba(59,130,246,0.12),transparent_70%)]'
      />

      {/* Content */}
      <div className='container relative grid gap-16 md:grid-cols-2 items-center'>
        {/* Texte */}
        <div>
          <SectionTitle subtitle='Discutons de votre projet'>
            Contact
          </SectionTitle>

          <p className='text-lg text-neutral-200/80 mb-6'>
            Vous avez un projet, une idée ou une question ? Je vous réponds
            rapidement pour échanger sur vos besoins.
          </p>

          <p className='text-neutral-200/70'>
            Que ce soit pour une création, une refonte ou une optimisation, je
            vous accompagne avec une approche claire et pragmatique.
          </p>
        </div>

        {/* Carte contact */}
        <div className='rounded-2xl bg-neutral-800 border border-white/15 p-8'>
          <h3 className='text-xl font-semibold mb-6'>Me contacter</h3>

          <p className='text-sm text-neutral-200/80 mb-6'>
            Décrivez-moi brièvement votre projet, je vous répondrai dans les
            meilleurs délais.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
