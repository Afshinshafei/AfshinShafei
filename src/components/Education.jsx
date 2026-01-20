import React from 'react'

function Education() {
  const education = [
    {
      year: "2025",
      degree: "Research Fellow",
      institution: "Sapienza University of Rome",
      location: "Rome, Italy"
    },
    {
      year: "2024",
      degree: "Ph.D. in Environmental and Hydraulic Engineering",
      institution: "Sapienza University of Rome",
      location: "Rome, Italy",
      details: "Research Title: Designing an Early-Warning System to Forecast Extreme Climate Conditions Using Data-Driven Approaches with Machine-Learning and Deep-Learning Methods",
      supervisor: "Supervisor: Professor Francesco Cioffi"
    },
    {
      year: "2021",
      degree: "Master of Science in Environmental Engineering",
      institution: "University of Bologna",
      location: "Bologna, Italy",
      details: "Thesis title: Geomorphological characterization of fluvial flood hazard across the island of Oahu, Hawaii",
      supervisor: "Supervisor: Professor Attilio Castellarin"
    },
    {
      year: "2018",
      degree: "Master of Science in Civil Engineering and Architecture",
      institution: "Istanbul Technical University",
      location: "Istanbul, Turkey"
    },
    {
      year: "2015",
      degree: "Bachelor of Science in Civil Engineering",
      institution: "Azad University of Shabestar",
      location: "Tabriz, Iran"
    }
  ]

  return (
    <section className="section" id="education">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> EDUCATION <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{edu.year}</div>
                <div className="timeline-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}, {edu.location}</p>
                  {edu.details && <p className="education-details">{edu.details}</p>}
                  {edu.supervisor && <p className="education-supervisor">{edu.supervisor}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
