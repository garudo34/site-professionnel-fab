// components/layout/Header.tsx

import Link from 'next/link'
import NavLink from '@/components/layout/NavLink'

export default function Header() {
  return (
    <header className='sticky top-0 z-50 border-b bg-white/80 backdrop-blur'>
      <div className='container h-16 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='font-bold text-lg'>
          TonNom.dev
        </Link>

        {/* Navigation */}
        <nav className='flex items-center gap-8 text-sm'>
          <NavLink href='/services'>Services</NavLink>
          <NavLink href='/realisations'>Réalisations</NavLink>
          <NavLink href='/a-propos'>À propos</NavLink>
          <NavLink href='/contact' className='font-medium'>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
