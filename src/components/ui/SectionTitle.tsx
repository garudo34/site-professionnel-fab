type SectionTitleProps = {
  children: React.ReactNode
  subtitle?: string
}

export default function SectionTitle({
  children,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16">
      <h2 className="relative mb-4 inline-block text-3xl font-bold md:text-4xl">
        {children}

        {/* underline glow */}
        <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 to-transparent" />
      </h2>

      {subtitle && (
        <p className="mb-4 text-sm tracking-wider text-blue-400 uppercase">
          {subtitle}
        </p>
      )}
    </div>
  )
}
