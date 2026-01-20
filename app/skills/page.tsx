import RetroCard from '@/components/RetroCard'
import SectionTitle from '@/components/SectionTitle'
import PixelDivider from '@/components/PixelDivider'
import { skills, languages, extracurricular } from '@/data/resume'

export default function SkillsPage() {
  return (
    <div>
      <SectionTitle variant="cyan">SKILLS & EXPERTISE</SectionTitle>

      <RetroCard title=">> TECHNICAL_SKILLS" variant="green">
        <div className="space-y-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="pb-4 border-b border-retro-green/30 last:border-0">
              <h3 className="text-lg font-pixel text-retro-amber mb-3">{skillGroup.category}:</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-retro-bg border border-retro-green text-retro-green text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RetroCard>

      <PixelDivider variant="amber" />

      <RetroCard title=">> LANGUAGES" variant="amber">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center pb-3 border-b border-retro-amber/30">
              <span className="text-lg text-retro-green">{lang.name}</span>
              <span className="text-sm text-retro-cyan">{lang.proficiency}</span>
            </div>
          ))}
        </div>
      </RetroCard>

      <PixelDivider variant="cyan" />

      <RetroCard title=">> EXTRACURRICULAR_ACTIVITIES" variant="cyan">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {extracurricular.map((activity, index) => (
            <div key={index} className="flex items-center">
              <span className="text-retro-green mr-2">▸</span>
              <span className="text-lg">{activity}</span>
            </div>
          ))}
        </div>
      </RetroCard>
    </div>
  )
}
