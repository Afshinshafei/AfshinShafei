import React from 'react'

function Projects() {
  const projects = [
    {
      name: "SkyVibe AI",
      type: "iOS Application",
      status: "Published",
      period: "2025",
      appStoreLink: "https://apps.apple.com/it/app/skyvibe-ai/id6745758172?l=en-GB",
      description: [
        "Developed and published a full-featured iOS application using Swift and SwiftUI, showcasing expertise in modern iOS development practices.",
        "Implemented AI-powered features to enhance user experience, demonstrating proficiency in integrating machine learning capabilities into mobile applications.",
        "Successfully navigated the complete App Store submission process, including adherence to Apple's Human Interface Guidelines and App Store Review Guidelines.",
        "Managed the entire development lifecycle from concept to deployment, including UI/UX design, backend integration, and performance optimization."
      ],
      technologies: ["Swift", "SwiftUI", "iOS SDK", "AI Integration"]
    },
    {
      name: "Smart Wardrobe Assistant",
      type: "iOS Application",
      status: "Beta Development",
      period: "2025 - Present",
      description: [
        "Currently developing an innovative iOS app that leverages AI to provide personalized outfit recommendations based on user's wardrobe collection.",
        "Implementing advanced image recognition and machine learning algorithms to analyze clothing items and suggest coordinated outfits.",
        "Designing an intuitive user interface for wardrobe organization, allowing users to easily catalog and manage their clothing items.",
        "Focusing on creating a seamless user experience that combines practical wardrobe management with AI-powered fashion intelligence.",
        "Applying best practices in iOS development, including Core Data for local storage, CoreML for on-device AI processing, and modern SwiftUI patterns."
      ],
      technologies: ["Swift", "SwiftUI", "CoreML", "Vision Framework", "Core Data"]
    }
  ]

  return (
    <section className="section" id="projects">
      <div className="arcade-card">
        <h2 className="section-title">
          <span className="pixel-bracket">[</span> iOS PROJECTS <span className="pixel-bracket">]</span>
        </h2>
        <div className="section-content">
          <div className="bio-text" style={{ marginBottom: '2rem' }}>
            Beyond my research in environmental engineering, I am passionate about iOS development and creating
            innovative mobile applications. I have hands-on experience building native iOS apps using Swift and SwiftUI,
            integrating AI capabilities, and delivering user-focused solutions to the App Store.
          </div>
          
          {projects.map((project, index) => (
            <div key={index} className="experience-item project-item">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{project.name}</h3>
                  <p className="experience-org">{project.type}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="experience-period">{project.period}</span>
                  <div style={{ marginTop: '0.5rem' }}>
                    <span className={`status-badge ${project.status === 'Published' ? 'status-published' : 'status-beta'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              
              {project.appStoreLink && (
                <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                  <a 
                    href={project.appStoreLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="app-store-link"
                  >
                    View on App Store →
                  </a>
                </div>
              )}
              
              <div className="experience-description">
                {project.description.map((desc, idx) => (
                  <p key={idx} className="bio-text">{desc}</p>
                ))}
              </div>
              
              <div className="project-technologies">
                <h4 className="skill-category-title">Technologies:</h4>
                <div className="skills-list">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="skill-tag tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
