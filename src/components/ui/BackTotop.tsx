import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  return (
    <a
      href='#top'
      aria-label='Retour en haut'
      className='fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-neutral-300 backdrop-blur hover:bg-neutral-800 hover:text-white transition'
    >
      <ArrowUp className='h-5 w-5' />
    </a>
  )
}
