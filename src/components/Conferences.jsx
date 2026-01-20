import React from 'react'

function Conferences() {
  const conferences = [
    {
      name: "SISC2025, Salerno, Italy",
      title: "Enhancing Early-Warning Systems for Climate Extremes in Developing Countries Using Machine Learning Models and High-Resolution Datasets"
    },
    {
      name: "EGU Leonardo 2025 Conference on Earth's Hydrological Cycle 2025, Bologna, Italy",
      title: "Integrating HPC, AI, and Big Data for Enhanced Early-Warning Systems in Hydrological Extremes: Insights from Ghana's Tree Crop Sector"
    },
    {
      name: "AGU2024, Washington DC, USA",
      title: "Enhancing Early-Warning Systems for Climate Extremes in Developing Countries Using Machine Learning Models and High-Resolution Datasets",
      note: "(Abstract accepted for oral presentation, Visa denied)"
    },
    {
      name: "PhD Days 2023, Matera, Italy",
      title: "Introducing an Enhanced Early-Warning System Focused on Downscaling Models Using Deep Learning Methods"
    },
    {
      name: "EGU2024, Vienna, Austria",
      title: "Designing an Early-Warning System to Forecast Extreme Climate Conditions Using Data-Driven Approaches with Machine-Learning and Deep-Learning Methods"
    },
    {
      name: "IDRA24, Parma, Italy",
      title: "Developing an Early-Warning System for Predicting Extreme Climate Conditions Using Data-Driven Machine Learning and Deep Learning Techniques"
    }
  ]

  return (
    <section className="section" id="conferences">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> CONFERENCES <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          {conferences.map((conf, index) => (
            <div key={index} className="conference-item">
              <h3 className="conference-name">{conf.name}</h3>
              <p className="conference-title">{conf.title}</p>
              {conf.note && <p className="conference-note">{conf.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Conferences
