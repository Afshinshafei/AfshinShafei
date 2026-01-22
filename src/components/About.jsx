import React from 'react'

function About() {
  return (
    <section className="section" id="about">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> ABOUT <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          <p className="bio-text">
            I am an Environmental Engineer and Ph.D. Researcher specialized in developing 
            next-generation Early-Warning Systems for extreme climate conditions. Currently 
            a Research Fellow at Sapienza Università di Roma, my work focuses on integrating 
            data-driven approaches, specifically Machine Learning and Deep Learning, to enhance 
            climate downscaling and flood risk management.
          </p>
          <p className="bio-text">
            Beyond academia, I serve as a Technical Adviser (AI & Emerging Technologies) for 
            AquaNRG. In this role, I bridge the gap between technical innovation and business 
            strategy, guiding executive teams on AI integration for the energy sector, including 
            CCUS, hydrogen, and geothermal markets. I specialize in translating complex data into 
            actionable insights for operational efficiency and risk assessment.
          </p>
          <p className="bio-text">
            With a strong foundation in Python, Cloud Computing (GCP), and Hydrologic Modeling, 
            I am passionate about leveraging technology to solve critical environmental challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
