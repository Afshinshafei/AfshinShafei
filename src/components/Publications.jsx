import React from 'react'

function Publications() {
  const publications = [
    {
      authors: "Shafei, A.; Cioffi, F.",
      title: "High-Resolution Early Warning Systems Using DL: Part I - Elevation-Integrated Temperature and Precipitation SRGAN Downscaling (E-TePS)",
      journal: "Preprints",
      year: "2024",
      volume: "2024081420",
      url: "https://doi.org/10.20944/preprints202408.1420.v1"
    },
    {
      authors: "Shafei, A.; Cioffi, F.",
      title: "High-Resolution Early Warning Systems Using DL: Part II - Combining FourCastNet and E-TePS for High-Resolution Climate Forecasting",
      journal: "Preprints",
      year: "2024",
      volume: "2024081322",
      url: "https://doi.org/10.20944/preprints202408.1322.v1"
    }
  ]

  return (
    <section className="section" id="publications">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> PUBLICATIONS <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          {publications.map((pub, index) => (
            <div key={index} className="publication-item">
              <p className="publication-text">
                {pub.authors} {pub.title}. <em>{pub.journal}</em> <strong>{pub.year}</strong>, {pub.volume}.
              </p>
              <a href={pub.url} target="_blank" rel="noopener noreferrer" className="retro-link">
                {pub.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
