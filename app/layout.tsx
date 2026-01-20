import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Afshin Shafei - Environmental Engineer & AI Researcher',
  description: 'Personal website of Afshin Shafei, PhD - Research Fellow at Sapienza University, specializing in AI/ML for climate systems and early warning systems.',
  keywords: ['Afshin Shafei', 'Environmental Engineering', 'AI', 'Machine Learning', 'Climate Science', 'Deep Learning'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="scanlines min-h-screen">
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            <header className="mb-8">
              <Navigation />
            </header>
            <main className="crt-effect">
              {children}
            </main>
            <footer className="mt-16 text-center text-sm text-retro-green/60 font-pixel py-8 border-t-2 border-retro-green/30">
              <p>Last updated: January 2026</p>
              <p className="mt-2">Built with Next.js & Tailwind CSS</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
