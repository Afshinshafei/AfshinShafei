import RetroCard from '@/components/RetroCard'
import SectionTitle from '@/components/SectionTitle'
import { experience } from '@/data/resume'

export default function ExperiencePage() {
  return (
    <div>
      <SectionTitle variant="amber">EXPERIENCE</SectionTitle>

      <div className="space-y-6">
        {experience.map((exp, index) => (
          <RetroCard 
            key={index} 
            variant={index % 2 === 0 ? 'green' : 'amber'}
          >
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="text-xl font-pixel text-retro-green mb-2 md:mb-0">{exp.title}</h3>
                <span className="text-retro-cyan font-pixel text-sm">[{exp.period}]</span>
              </div>
              
              <p className="text-lg text-retro-amber">{exp.organization}</p>
              <p className="text-retro-text/80">
                <span className="text-retro-cyan">▸</span> {exp.location}
              </p>
              
              <div className="mt-4 pt-4 border-t border-retro-green/30">
                <ul className="space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-retro-green mr-2 mt-1">•</span>
                      <span className="text-retro-text">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RetroCard>
        ))}
      </div>
    </div>
  )
}
