type SectionTitleProps = {
  children: React.ReactNode
  subtitle?: string
}

export default function SectionTitle({
  children,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className='mb-16'>
      <h2 className='relative inline-block text-4xl md:text-5xl font-bold'>
        {children}

        {/* underline glow */}
        <span className='absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-transparent' />
      </h2>

      {subtitle && <p className='mt-6 text-neutral-400 max-w-xl'>{subtitle}</p>}
    </div>
  )
}
