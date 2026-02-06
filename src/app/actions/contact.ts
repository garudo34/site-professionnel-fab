'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
console.log('EMAIL ENVOYÉ VIA RESEND')

export async function sendContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    throw new Error('Formulaire incomplet')
  }

  await resend.emails.send({
    from: 'Contact <contact@fabien-peyres.fr>',
    to: 'contact@fabien-peyres.fr',
    subject: `Nouveau message de ${name}`,
    replyTo: email,
    text: message,
  })
}
