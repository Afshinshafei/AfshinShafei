import RetroCard from '@/components/RetroCard'
import SectionTitle from '@/components/SectionTitle'
import PixelDivider from '@/components/PixelDivider'
import { publications, conferences } from '@/data/resume'

export default function PublicationsPage() {
  return (
    <div>
      <SectionTitle variant="green">PUBLICATIONS & CONFERENCES</SectionTitle>

      <RetroCard title=">> PUBLICATIONS" variant="green">
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="pb-4 border-b border-retro-green/30 last:border-0">
              <p className="text-retro-amber mb-2">{pub.authors}</p>
              <p className="text-lg mb-2">{pub.title}</p>
              <p className="text-retro-text/80 mb-2">
                <span className="text-retro-cyan">Journal:</span> {pub.journal} ({pub.year})
              </p>
              <a 
                href={pub.doi} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-retro-cyan hover:text-retro-green transition-colors underline"
              >
                {pub.doi}
              </a>
            </div>
          ))}
        </div>
      </RetroCard>

      <PixelDivider variant="amber" />

      <RetroCard title=">> CONFERENCE_PRESENTATIONS" variant="amber">
        <div className="space-y-6">
          {conferences.map((conf, index) => (
            <div key={index} className="pb-4 border-b border-retro-amber/30 last:border-0">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h4 className="text-lg font-pixel text-retro-green">{conf.name}</h4>
                <span className="text-retro-cyan text-sm">[{conf.year}]</span>
              </div>
              <p className="text-retro-amber mb-2">
                <span className="text-retro-green">▸</span> {conf.location}
              </p>
              <p className="mb-2">
                <span className="text-retro-cyan">Title:</span> {conf.presentationTitle}
              </p>
              {conf.note && (
                <p className="text-retro-text/60 italic text-sm">
                  Note: {conf.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </RetroCard>
    </div>
  )
}
