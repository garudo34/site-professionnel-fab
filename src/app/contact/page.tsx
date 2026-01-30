export default function ContactPage() {
  return (
    <section className='container py-20 max-w-3xl space-y-12'>
      {/* Hero */}
      <header className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>Parlons de votre projet</h1>
        <p className='text-xl text-muted-foreground'>
          Décrivez-moi votre besoin et je vous recontacte rapidement.
        </p>
      </header>

      {/* Texte */}
      <p className='text-center text-muted-foreground'>
        Ce premier échange est gratuit et sans engagement.
      </p>

      {/* Formulaire */}
      <form
        action='https://formspree.io/f/xxxxx'
        method='POST'
        className='space-y-6'
      >
        <div>
          <label className='block mb-1 font-medium'>Nom</label>
          <input
            type='text'
            name='name'
            required
            className='w-full border rounded-lg px-4 py-3'
          />
        </div>

        <div>
          <label className='block mb-1 font-medium'>Email</label>
          <input
            type='email'
            name='email'
            required
            className='w-full border rounded-lg px-4 py-3'
          />
        </div>

        <div>
          <label className='block mb-1 font-medium'>Type de projet</label>
          <select
            name='projectType'
            className='w-full border rounded-lg px-4 py-3'
          >
            <option>Site vitrine</option>
            <option>Refonte de site</option>
            <option>SEO / optimisation</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label className='block mb-1 font-medium'>Budget estimé</label>
          <select name='budget' className='w-full border rounded-lg px-4 py-3'>
            <option>Moins de 1 000 €</option>
            <option>1 000 – 3 000 €</option>
            <option>3 000 – 5 000 €</option>
            <option>Plus de 5 000 €</option>
          </select>
        </div>

        <div>
          <label className='block mb-1 font-medium'>Message</label>
          <textarea
            name='message'
            rows={5}
            className='w-full border rounded-lg px-4 py-3'
            placeholder='Décrivez votre projet, vos objectifs, vos délais...'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-black text-white py-4 rounded-xl text-lg'
        >
          Envoyer ma demande
        </button>
      </form>

      {/* Infos */}
      <p className='text-center text-sm text-muted-foreground'>
        Réponse sous 24 à 48h • Aucun spam • Données confidentielles
      </p>
    </section>
  )
}
