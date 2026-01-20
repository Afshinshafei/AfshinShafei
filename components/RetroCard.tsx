interface RetroCardProps {
  title?: string
  children: React.ReactNode
  variant?: 'green' | 'amber' | 'cyan'
  className?: string
}

export default function RetroCard({ 
  title, 
  children, 
  variant = 'green',
  className = '' 
}: RetroCardProps) {
  const colorClasses = {
    green: 'border-retro-green text-retro-green',
    amber: 'border-retro-amber text-retro-amber',
    cyan: 'border-retro-cyan text-retro-cyan',
  }

  const glowClasses = {
    green: 'glow-green',
    amber: 'glow-amber',
    cyan: 'text-shadow-[0_0_5px_rgba(0,255,255,0.8)]',
  }

  return (
    <div className={`border-2 ${colorClasses[variant]} bg-retro-surface p-6 mb-6 shadow-retro ${className}`}>
      {title && (
        <h2 className={`text-xl md:text-2xl font-pixel mb-4 ${glowClasses[variant]}`}>
          {title}
        </h2>
      )}
      <div className="font-mono text-retro-text">
        {children}
      </div>
    </div>
  )
}
