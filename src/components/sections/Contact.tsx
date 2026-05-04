import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from '@/components/ui/ContactForm'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-900 py-24 md:py-32"
    >
      {/* Gradient top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_top,rgba(59,130,246,0.2),transparent_60%)]"
      />

      {/* Gradient bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_bottom,rgba(59,130,246,0.12),transparent_70%)]"
      />

      {/* Content */}
      <div className="relative container grid items-center gap-16 md:grid-cols-2">
        {/* Texte */}
        <div>
          <SectionTitle subtitle="Discutons de votre projet">
            Contact
          </SectionTitle>

          <p className="mb-6 text-lg text-neutral-200/80">
            Vous avez un projet, une idée ou une question ? Je vous réponds
            rapidement pour échanger sur vos besoins.
          </p>

          <p className="text-neutral-200/70">
            Que ce soit pour une création, une refonte ou une optimisation, je
            vous accompagne avec une approche claire et pragmatique.
          </p>
        </div>

        {/* Carte contact */}
        <div className="rounded-2xl border border-white/15 bg-neutral-800 p-8">
          <h3 className="mb-6 text-xl font-semibold">Me contacter</h3>

          <p className="mb-6 text-sm text-neutral-200/80">
            Décrivez-moi brièvement votre projet, je vous répondrai dans les
            meilleurs délais.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
