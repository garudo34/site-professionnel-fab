'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContact(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const projectType = (formData.get('projectType') as string) || 'Non précisé'
  const budget = (formData.get('budget') as string) || 'Non précisé'

  if (!name || !email || !message) {
    throw new Error('Champs manquants')
  }

  await resend.emails.send({
    from: 'Contact <contact@fabien-peyres.fr>',
    to: 'contact@fabien-peyres.fr',
    replyTo: email,
    subject: `[Contact] ${projectType} – ${budget}`,
    text: `
Nouveau message depuis le site

Nom : ${name}
Email : ${email}

Type de projet : ${projectType}
Budget estimé : ${budget}

Message :
${message}
    `.trim(),
  })
}
