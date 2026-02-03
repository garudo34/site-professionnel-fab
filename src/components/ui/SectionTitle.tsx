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
      <h2 className='relative inline-block text-3xl md:text-4xl font-bold mb-4'>
        {children}

        {/* underline glow */}
        <span className='absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-transparent' />
      </h2>

      {subtitle && (
        <p className='text-sm uppercase tracking-wider text-blue-400 mb-4'>
          {subtitle}
        </p>
      )}
    </div>
  )
}
