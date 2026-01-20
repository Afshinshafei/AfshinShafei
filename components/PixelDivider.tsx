interface PixelDividerProps {
  variant?: 'green' | 'amber' | 'cyan'
}

export default function PixelDivider({ variant = 'green' }: PixelDividerProps) {
  const colorClasses = {
    green: 'bg-retro-green',
    amber: 'bg-retro-amber',
    cyan: 'bg-retro-cyan',
  }

  return (
    <div className="flex items-center justify-center my-6">
      <div className={`h-1 w-16 ${colorClasses[variant]}`}></div>
      <div className={`h-2 w-2 mx-2 ${colorClasses[variant]}`}></div>
      <div className={`h-1 w-16 ${colorClasses[variant]}`}></div>
    </div>
  )
}
