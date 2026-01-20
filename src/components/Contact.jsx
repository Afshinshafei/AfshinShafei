import React from 'react'

function Contact() {
  const references = [
    {
      name: "Francesco Cioffi",
      title: "Professor of Hydraulics and Environmental Hydraulics",
      institution: "Università di Roma 'La Sapienza'",
      address: "Via Eudossiana 18, 00184 Roma",
      tel: "+39-06-44585523",
      email: "francesco.cioffi@uniroma1.it",
      relationship: "Ph.D. Supervisor"
    },
    {
      name: "Attilio Castellarin",
      title: "Professor of Hydraulic Infrastructures, Hydrological Modeling, and Flood and Drought Risk Management",
      institution: "University of Bologna",
      address: "Viale del Risorgimento 2, Bologna",
      tel: "+39-051-209-3365",
      email: "attilio.castellarin@unibo.it",
      relationship: "Master's Thesis Supervisor"
    }
  ]

  return (
    <section className="section" id="contact">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> CONTACT <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:afshin.shafei@gmail.com" className="retro-link">
                afshin.shafei@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Mobile:</span>
              <span className="contact-value">+39-324-742-8571</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/afshin-shafei-ph-d-a92425117" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="retro-link">
                linkedin.com/in/afshin-shafei-ph-d-a92425117
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Website:</span>
              <a href="https://afshinshafei.com/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="retro-link">
                afshinshafei.com
              </a>
            </div>
          </div>

          <div className="references-section">
            <h3 className="subsection-title">References</h3>
            {references.map((ref, index) => (
              <div key={index} className="reference-item">
                <h4 className="reference-name">{ref.name}</h4>
                <p className="reference-title">{ref.title}</p>
                <p className="reference-institution">{ref.institution}</p>
                <p className="reference-detail">Address: {ref.address}</p>
                <p className="reference-detail">Tel: {ref.tel}</p>
                <p className="reference-detail">
                  Email: <a href={`mailto:${ref.email}`} className="retro-link">{ref.email}</a>
                </p>
                <p className="reference-relationship">Relationship: {ref.relationship}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
