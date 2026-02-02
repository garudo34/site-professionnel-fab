'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur'>
      <div className='container flex h-16 items-center justify-between'>
        {/* Logo */}
        <Link href='#top' className='text-sm font-semibold tracking-wide'>
          Fabien<span className='text-blue-500'>.</span>dev
        </Link>

        {/* Navigation desktop */}
        <nav className='hidden md:flex items-center gap-8 text-sm text-neutral-300'>
          <a
            href='#realisations'
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full'
          >
            Réalisations
          </a>
          <a
            href='#services'
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full'
          >
            Services
          </a>
          <a
            href='#methode'
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full'
          >
            Méthode
          </a>
          <a
            href='#about'
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full'
          >
            À propos
          </a>
          <a
            href='#contact'
            className='relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full'
          >
            Contact
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden text-neutral-300 hover:text-white transition'
          aria-label='Menu'
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className='md:hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur'>
          <nav className='flex flex-col items-center gap-6 py-8 text-neutral-300'>
            <a onClick={() => setOpen(false)} href='#realisations'>
              Réalisations
            </a>
            <a onClick={() => setOpen(false)} href='#services'>
              Services
            </a>
            <a onClick={() => setOpen(false)} href='#methode'>
              Méthode
            </a>
            <a onClick={() => setOpen(false)} href='#about'>
              À propos
            </a>
            <a onClick={() => setOpen(false)} href='#contact'>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
