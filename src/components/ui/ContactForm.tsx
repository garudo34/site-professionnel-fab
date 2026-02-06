'use client'

import { useState, useTransition } from 'react'
import { sendContact } from '@/app/actions/contact'
import Spinner from '@/components/ui/Spinner'
import { track } from '@vercel/analytics'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [isPending, startTransition] = useTransition()

  function action(formData: FormData) {
    startTransition(async () => {
      try {
        await sendContact(formData)
        track('contact_form_submitted')
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
    <form action={action} className='space-y-6 max-w-xl'>
      <input
        name='name'
        required
        placeholder='Votre nom'
        className='w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white'
      />

      <input
        name='email'
        type='email'
        required
        placeholder='Votre email'
        className='w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white'
      />

      <textarea
        name='message'
        required
        rows={5}
        placeholder='Parlez-moi de votre projet'
        className='w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 text-white'
      />

      <button
        type='submit'
        disabled={isPending}
        className='inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition
                   hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed'
      >
        {isPending && <Spinner />}
        {isPending ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
    </form>
  )
}
