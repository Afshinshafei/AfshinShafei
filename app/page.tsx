import RetroCard from '@/components/RetroCard'
import SectionTitle from '@/components/SectionTitle'
import PixelDivider from '@/components/PixelDivider'
import { personalInfo, summary, fieldsOfInterest } from '@/data/resume'

export default function Home() {
  return (
    <div>
      <SectionTitle>ABOUT</SectionTitle>

      <RetroCard title=">> PERSONAL_INFO" variant="green">
        <div className="space-y-2 text-lg">
          <p><span className="text-retro-amber">Name:</span> {personalInfo.name}</p>
          <p><span className="text-retro-amber">Location:</span> {personalInfo.location}</p>
          <p><span className="text-retro-amber">Email:</span> <a href={`mailto:${personalInfo.email}`} className="text-retro-cyan hover:underline">{personalInfo.email}</a></p>
          <p><span className="text-retro-amber">Phone:</span> {personalInfo.phone}</p>
          <p><span className="text-retro-amber">LinkedIn:</span> <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-retro-cyan hover:underline">Profile</a></p>
          <p><span className="text-retro-amber">Website:</span> <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-retro-cyan hover:underline">{personalInfo.website}</a></p>
        </div>
      </RetroCard>

      <PixelDivider variant="amber" />

      <RetroCard title=">> PROFESSIONAL_SUMMARY" variant="amber">
        <p className="text-lg leading-relaxed whitespace-pre-line">{summary}</p>
      </RetroCard>

      <PixelDivider variant="cyan" />

      <RetroCard title=">> FIELDS_OF_INTEREST" variant="cyan">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {fieldsOfInterest.map((field, index) => (
            <div key={index} className="flex items-center">
              <span className="text-retro-green mr-2">▸</span>
              <span className="text-lg">{field}</span>
            </div>
          ))}
        </div>
      </RetroCard>

      <div className="mt-12 text-center">
        <div className="inline-block border-2 border-retro-green bg-retro-surface px-8 py-4">
          <p className="font-pixel text-retro-green text-sm">
            &lt; WELCOME TO MY DIGITAL SPACE /&gt;
          </p>
        </div>
      </div>
    </div>
  )
}
