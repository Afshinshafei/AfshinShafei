interface SectionTitleProps {
  children: React.ReactNode
  variant?: 'green' | 'amber' | 'cyan'
}

export default function SectionTitle({ children, variant = 'green' }: SectionTitleProps) {
  const colorClasses = {
    green: 'text-retro-green glow-green border-retro-green',
    amber: 'text-retro-amber glow-amber border-retro-amber',
    cyan: 'text-retro-cyan border-retro-cyan',
  }

  return (
    <h1 className={`text-3xl md:text-4xl font-pixel mb-8 pb-4 border-b-2 ${colorClasses[variant]}`}>
      {children}
    </h1>
  )
}
