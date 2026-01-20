import RetroCard from '@/components/RetroCard'
import SectionTitle from '@/components/SectionTitle'
import PixelDivider from '@/components/PixelDivider'
import { phdResearch } from '@/data/resume'

export default function ResearchPage() {
  return (
    <div>
      <SectionTitle variant="cyan">RESEARCH</SectionTitle>

      <RetroCard title=">> PH.D._RESEARCH" variant="cyan">
        <p className="text-lg leading-relaxed mb-6">{phdResearch}</p>
        
        <div className="mt-6 pt-6 border-t border-retro-cyan/30">
          <h3 className="text-xl font-pixel text-retro-green mb-4">Key Contributions:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-retro-amber mr-2 mt-1">▸</span>
              <span>Developed E-TEPS model using Super-Resolution Generative Adversarial Networks (SRGAN)</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-amber mr-2 mt-1">▸</span>
              <span>Integrated FourCastNet global forecasting model for enhanced predictions</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-amber mr-2 mt-1">▸</span>
              <span>Improved accuracy and spatial resolution of high-resolution climate predictions</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-amber mr-2 mt-1">▸</span>
              <span>Enabled rapid and precise forecasts of extreme weather events in Italy</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-amber mr-2 mt-1">▸</span>
              <span>Enhanced climate-related decision-making and disaster preparedness capabilities</span>
            </li>
          </ul>
        </div>
      </RetroCard>

      <PixelDivider variant="green" />

      <RetroCard title=">> RESEARCH_AREAS" variant="green">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="text-lg font-pixel text-retro-amber mb-3">Climate Science:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-retro-green mr-2">•</span>
                <span>Climate Downscaling</span>
              </li>
              <li className="flex items-start">
                <span className="text-retro-green mr-2">•</span>
                <span>Extreme Weather Events</span>
              </li>
              <li className="flex items-start">
                <span className="text-retro-green mr-2">•</span>
                <span>Temperature & Precipitation Modeling</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-lg font-pixel text-retro-amber mb-3">AI & Technology:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-retro-green mr-2">•</span>
                <span>Deep Learning Models</span>
              </li>
              <li className="flex items-start">
                <span className="text-retro-green mr-2">•</span>
                <span>Generative Adversarial Networks</span>
              </li>
              <li className="flex items-start">
                <span className="text-retro-green mr-2">•</span>
                <span>Early Warning Systems</span>
              </li>
            </ul>
          </div>
        </div>
      </RetroCard>
    </div>
  )
}
