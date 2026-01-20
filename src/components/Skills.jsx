import React from 'react'

function Skills() {
  const computerSkills = {
    "Software": ["LaTeX", "QGIS", "AQUASIM", "WordPress", "SWMM", "EPANET", "Adobe Perimeter Pro", "Microsoft Office"],
    "Cloud Computing": ["Google Cloud Platform (GCP)", "Google Colab"],
    "Programming Language": ["Python", "JavaScript", "Swift"]
  }

  const languages = [
    { language: "English", proficiency: "Fluent", details: "IELTS 7.5 (Listening 9, Reading 7.5, Writing 6, Speaking 6.5)" },
    { language: "Azerbaijani", proficiency: "Native or Bilingual", details: "Mother Tongue" },
    { language: "Farsi", proficiency: "Native or Bilingual", details: "Fluent" },
    { language: "Turkish", proficiency: "Professional Working", details: "Fluent" },
    { language: "Arabic", proficiency: "Elementary", details: "Basic" },
    { language: "Italian", proficiency: "Elementary", details: "Basic" }
  ]

  const extracurricular = ["Web design", "iOS app design", "Web app design", "DJing"]

  return (
    <section className="section" id="skills">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> SKILLS <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          <div className="skills-section">
            <h3 className="subsection-title">Computer Skills</h3>
            {Object.entries(computerSkills).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h4 className="skill-category-title">{category}:</h4>
                <div className="skills-list">
                  {skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">Languages</h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <span className="language-name">{lang.language}</span>
                  <span className="language-proficiency">{lang.proficiency}</span>
                  <span className="language-details">{lang.details}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="subsection-title">Extracurricular Activities</h3>
            <div className="skills-list">
              {extracurricular.map((activity, idx) => (
                <span key={idx} className="skill-tag activity-tag">{activity}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
