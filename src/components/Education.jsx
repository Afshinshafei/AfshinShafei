import React from 'react';
import { resumeData } from '../data/resume';

const Education = () => {
  return (
    <section className="container">
      <div className="arcade-card">
        <h2>[ TRAINING GROUNDS ]</h2>
        
        <div style={styles.educationSection}>
          <h3 style={styles.sectionTitle}>🎓 EDUCATION</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index} style={styles.eduItem}>
              <h3 style={styles.degree}>{edu.degree}</h3>
              <p style={styles.institution}>{edu.institution}</p>
              <p style={styles.location}>{edu.location}</p>
              <p style={styles.period}>📅 {edu.period}</p>
              {edu.details && <p style={styles.details}>{edu.details}</p>}
            </div>
          ))}
        </div>

        {resumeData.certifications && resumeData.certifications.length > 0 && (
          <div style={styles.certSection}>
            <h3 style={styles.sectionTitle}>🏆 ACHIEVEMENTS</h3>
            <div style={styles.certGrid}>
              {resumeData.certifications.map((cert, index) => (
                <div key={index} style={styles.certItem}>
                  <p style={styles.certName}>{cert.name}</p>
                  <p style={styles.certIssuer}>{cert.issuer}</p>
                  <p style={styles.certYear}>{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const styles = {
  educationSection: {
    marginBottom: '2rem',
  },
  sectionTitle: {
    marginBottom: '1.5rem',
    fontSize: 'clamp(0.8rem, 2vw, 1.1rem)',
  },
  eduItem: {
    marginBottom: '1.5rem',
    paddingBottom: '1.5rem',
    borderBottom: '1px solid rgba(0, 240, 255, 0.3)',
  },
  degree: {
    marginBottom: '0.5rem',
  },
  institution: {
    color: 'var(--neon-pink)',
    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
    marginBottom: '0.3rem',
  },
  location: {
    color: 'var(--neon-purple)',
    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
    marginBottom: '0.3rem',
  },
  period: {
    color: 'var(--neon-yellow)',
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    marginBottom: '0.5rem',
  },
  details: {
    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
    fontStyle: 'italic',
  },
  certSection: {
    marginTop: '2rem',
  },
  certGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1rem',
  },
  certItem: {
    background: 'rgba(189, 0, 255, 0.1)',
    padding: '1rem',
    borderRadius: '8px',
    border: '2px solid var(--neon-purple)',
  },
  certName: {
    color: 'var(--neon-pink)',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
  },
  certIssuer: {
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    marginBottom: '0.3rem',
  },
  certYear: {
    color: 'var(--neon-yellow)',
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
  },
};

export default Education;
