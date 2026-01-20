import RetroCard from '@/components/RetroCard'
import SectionTitle from '@/components/SectionTitle'
import { education } from '@/data/resume'

export default function EducationPage() {
  return (
    <div>
      <SectionTitle>EDUCATION</SectionTitle>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <RetroCard 
            key={index} 
            variant={index % 3 === 0 ? 'green' : index % 3 === 1 ? 'amber' : 'cyan'}
          >
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <h3 className="text-xl font-pixel text-retro-green mb-2 md:mb-0">{edu.degree}</h3>
                <span className="text-retro-amber font-pixel text-sm">[{edu.year}]</span>
              </div>
              
              <p className="text-lg">
                <span className="text-retro-cyan">▸</span> {edu.institution}
              </p>
              <p className="text-retro-text/80">
                <span className="text-retro-amber">Location:</span> {edu.location}
              </p>
              
              {edu.thesis && (
                <div className="mt-4 pt-4 border-t border-retro-green/30">
                  <p className="text-retro-amber mb-2">Thesis:</p>
                  <p className="text-retro-text italic">{edu.thesis}</p>
                </div>
              )}
              
              {edu.supervisor && (
                <p className="text-retro-text/80">
                  <span className="text-retro-amber">Supervisor:</span> {edu.supervisor}
                </p>
              )}
            </div>
          </RetroCard>
        ))}
      </div>
    </div>
  )
}
