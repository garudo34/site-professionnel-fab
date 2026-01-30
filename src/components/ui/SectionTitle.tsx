import { ReactNode } from 'react'

export default function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className='space-y-4'>
      <h1 className='text-4xl font-semibold tracking-tight'>{children}</h1>
      <span className='block h-1 w-8 rounded-full bg-black' />
    </div>
  )
}
