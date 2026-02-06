import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='border-t border-white/10 bg-neutral-950/80 backdrop-blur'>
      <div className='container py-8'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 text-sm'>
          {/* Left */}
          <p className='text-xs'>
            © {new Date().getFullYear()} Fabien Peyres — Développeur web
            freelance — sites modernes et performants
          </p>

          {/* Social */}
          <div className='flex gap-6'>
            <Link
              href='https://linkedin.com'
              target='_blank'
              className='transition hover:text-blue-500'
            >
              <Linkedin size={18} />
            </Link>

            <Link
              href='https://github.com'
              target='_blank'
              className='transition hover:text-blue-500'
            >
              <Github size={18} />
            </Link>
          </div>

          {/* Right */}
          <div className='flex gap-6'>
            <Link
              href='/mentions-legales'
              className='hover:text-white transition'
            >
              Mentions légales
            </Link>

            <a
              href='mailto:contact@fabien.dev'
              className='hover:text-white transition'
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
