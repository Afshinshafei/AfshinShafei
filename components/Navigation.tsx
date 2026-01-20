'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/', label: 'HOME' },
  { href: '/education', label: 'EDUCATION' },
  { href: '/experience', label: 'EXPERIENCE' },
  { href: '/research', label: 'RESEARCH' },
  { href: '/publications', label: 'PUBLICATIONS' },
  { href: '/skills', label: 'SKILLS' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="mb-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-pixel text-retro-green glow-green mb-4">
          AFSHIN SHAFEI
        </h1>
        <p className="text-sm md:text-lg text-retro-amber font-mono">
          Ph.D. in Environmental Engineering
        </p>
      </div>
      
      <div className="border-2 border-retro-green bg-retro-surface p-4 shadow-retro">
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    px-3 py-2 text-xs md:text-sm font-pixel border-2 inline-block
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-retro-green text-retro-bg border-retro-green shadow-retro'
                        : 'bg-retro-bg text-retro-green border-retro-green/50 hover:border-retro-green hover:shadow-retro'
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
