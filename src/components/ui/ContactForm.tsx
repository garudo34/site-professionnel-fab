'use client'

import { useState, useTransition } from 'react'
import { sendContact } from '@/app/actions/contact'
import Spinner from '@/components/ui/Spinner'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [isPending, startTransition] = useTransition()

  function action(formData: FormData) {
    startTransition(async () => {
      try {
        await sendContact(formData)
        setSent(true)
      } catch {
        alert('Une erreur est survenue. Réessayez.')
      }
    })
  }

  if (sent) {
    return (
      <p className='text-green-400'>
        Merci pour votre message, je reviens vers vous rapidement.
      </p>
    )
  }

  return (
    <form action={action} className='space-y-5 sm:space-y-6 max-w-xl'>
      <select
        name='projectType'
        required
        aria-label='Type de projet'
        className='w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-4 text-neutral-400
               focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40'
      >
        <option value=''>Type de projet</option>
        <option value='site-vitrine'>Site vitrine</option>
        <option value='site-ecommerce'>Site e-commerce</option>
        <option value='application-web'>Application web</option>
        <option value='refonte'>Refonte de site</option>
        <option value='autre'>Autre</option>
      </select>

      <select
        name='budget'
        required
        aria-label='Budget estimé'
        className='w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-4 text-neutral-400
               focus:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40'
      >
        <option value=''>Budget estimé</option>
        <option value='<1000'>&lt; 1 000 €</option>
        <option value='1000-3000'>1 000 – 3 000 €</option>
        <option value='3000-5000'>3 000 – 5 000 €</option>
        <option value='5000+'>5 000 € et +</option>
      </select>

      <input
        name='name'
        required
        aria-label='Votre nom'
        placeholder='Votre nom'
        autoComplete='name'
        inputMode='text'
        className='w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-4 text-white
               placeholder:text-neutral-500
               focus:outline-none focus:ring-2 focus:ring-blue-500/40'
      />

      <input
        name='email'
        type='email'
        required
        aria-label='Votre email'
        placeholder='Votre email'
        autoComplete='email'
        inputMode='email'
        className='w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-4 text-white
               placeholder:text-neutral-500
               focus:outline-none focus:ring-2 focus:ring-blue-500/40'
      />

      <textarea
        name='message'
        required
        rows={4}
        aria-label='Message'
        placeholder='Parlez-moi de votre projet'
        className='w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-4 text-white
               placeholder:text-neutral-500
               focus:outline-none focus:ring-2 focus:ring-blue-500/40'
      />

      <button
        type='submit'
        disabled={isPending}
        className='w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl
               bg-blue-600 px-6 py-4 font-medium text-white
               transition hover:bg-blue-500
               disabled:opacity-60 disabled:cursor-not-allowed'
      >
        {isPending && <Spinner />}
        {isPending ? 'Envoi…' : 'Envoyer'}
      </button>
    </form>
  )
}
