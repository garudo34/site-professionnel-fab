export default function AboutPage() {
  return (
    <section className='container py-20 space-y-24 max-w-4xl'>
      {/* Hero */}
      <header className='text-center'>
        <h1 className='text-4xl font-bold mb-6'>
          Un développeur web freelance au service de vos objectifs
        </h1>
        <p className='text-xl text-muted-foreground'>
          Des sites web utiles, performants et orientés résultats.
        </p>
      </header>

      {/* Qui je suis */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Qui je suis</h2>
        <p>
          Je suis développeur web freelance, spécialisé dans la création de
          sites vitrines modernes et efficaces pour les entrepreneurs, TPE et
          PME.
        </p>
        <p>
          Mon rôle ne se limite pas au développement : je vous accompagne dans
          la conception d’un site qui soutient réellement votre activité.
        </p>
      </section>

      {/* Vision */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Ma vision</h2>
        <p>
          Un bon site web doit être clair, rapide et utile. Chaque projet est
          pensé pour répondre à un objectif précis, sans complexité inutile.
        </p>
      </section>

      {/* Méthode */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Ma méthode de travail</h2>
        <ol className='space-y-2 list-decimal list-inside'>
          <li>Analyse de vos besoins</li>
          <li>Proposition claire et adaptée</li>
          <li>Conception et développement</li>
          <li>Mise en ligne et validation</li>
          <li>Suivi et accompagnement</li>
        </ol>
      </section>

      {/* Valeurs */}
      <section className='space-y-4'>
        <h2 className='text-2xl font-semibold'>Mes valeurs</h2>
        <ul className='space-y-2'>
          <li>
            <strong>Clarté</strong> – vous comprenez chaque étape
          </li>
          <li>
            <strong>Fiabilité</strong> – respect des délais
          </li>
          <li>
            <strong>Qualité</strong> – un site propre et maintenable
          </li>
          <li>
            <strong>Humain</strong> – une relation simple et directe
          </li>
        </ul>
      </section>

      {/* CTA */}
      <div className='text-center'>
        <a
          href='/contact'
          className='inline-block bg-black text-white px-8 py-4 rounded-xl text-lg'
        >
          Parlons de votre projet
        </a>
      </div>
    </section>
  )
}
