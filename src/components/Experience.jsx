import React from 'react'

function Experience() {
  const experiences = [
    {
      title: "Research Fellow",
      organization: "Sapienza Università di Roma",
      location: "Rome, Latium, Italy",
      period: "January 2025 - Present",
      description: []
    },
    {
      title: "Technical Adviser (AI & Emerging Technologies)",
      organization: "AquaNRG: Environmental and Energy Tech Company",
      location: "",
      period: "January 2017 - Present",
      description: [
        "Expert Guidance to CEO and Executive Team: Provide expert guidance to the CEO and executive team on AI, machine learning, and emerging technologies shaping the energy and environmental sectors. Advise on data-driven decision-making for business strategy, operations, and technology investments. Identify market opportunities for AI-driven solutions in oil and gas, CCUS (carbon capture, utilization, and storage), hydrogen, and geothermal energy.",
        "Technology Trends & Competitive Intelligence: Continuously monitor and assess breakthroughs in AI, geospatial analytics, and energy transition technologies. Evaluate the impact of AI-driven automation, digital twin technology, and predictive analytics on AquaNRG's core business areas. Provide insights on competitor strategies and emerging disruptors in the energy and environmental technology space.",
        "AI & Data Analytics Implementation: Guide the development and integration of AI models to enhance subsurface analytics, risk assessments, and operational efficiency. Advise on AI applications for predictive maintenance, geologic storage optimization, and carbon credit modeling. Ensure scalability, accuracy, and regulatory compliance in AI-driven solutions."
      ]
    }
  ]

  return (
    <section className="section" id="experience">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> EXPERIENCE <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-org">{exp.organization}</p>
              {exp.location && <p className="experience-location">{exp.location}</p>}
              {exp.description.length > 0 && (
                <div className="experience-description">
                  {exp.description.map((desc, idx) => (
                    <p key={idx} className="bio-text">{desc}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
