import React from 'react'

function Contact() {
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
              <span className="contact-label">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/afshin-shafei-ph-d-a92425117"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-link"
              >
                linkedin.com/in/afshin-shafei-ph-d-a92425117
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
