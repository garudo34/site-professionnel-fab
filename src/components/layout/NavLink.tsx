'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({ href, children, className }: Props) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx(
        'transition hover:text-black',
        isActive ? 'text-black font-semibold' : 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Link>
  )
}
