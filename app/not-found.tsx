import Link from 'next/link'
import RetroCard from '@/components/RetroCard'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <RetroCard variant="amber" className="max-w-2xl">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-pixel text-retro-green glow-green">404</h1>
          <h2 className="text-2xl font-pixel text-retro-amber">PAGE NOT FOUND</h2>
          <p className="text-lg text-retro-text">
            The page you are looking for does not exist in this dimension.
          </p>
          <div className="pt-6">
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-retro-bg border-2 border-retro-green text-retro-green font-pixel hover:bg-retro-green hover:text-retro-bg transition-all duration-200"
            >
              &lt; RETURN HOME /&gt;
            </Link>
          </div>
        </div>
      </RetroCard>
    </div>
  )
}
