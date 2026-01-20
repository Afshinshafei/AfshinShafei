import React from 'react';
import { resumeData } from '../data/resume';

const Skills = () => {
  return (
    <section className="container">
      <div className="arcade-card">
        <h2>[ POWER-UPS & ABILITIES ]</h2>
        
        <div className="skills-grid">
          <div style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>⚡ TECHNICAL</h3>
            <ul>
              {resumeData.skills.technical.map((skill, index) => (
                <li key={index} style={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>

          <div style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>🔧 TOOLS</h3>
            <ul>
              {resumeData.skills.tools.map((tool, index) => (
                <li key={index} style={styles.skillItem}>{tool}</li>
              ))}
            </ul>
          </div>

          <div style={styles.skillCategory}>
            <h3 style={styles.categoryTitle}>💫 SOFT SKILLS</h3>
            <ul>
              {resumeData.skills.soft.map((skill, index) => (
                <li key={index} style={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  skillCategory: {
    background: 'rgba(0, 240, 255, 0.05)',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '2px solid rgba(0, 240, 255, 0.3)',
  },
  categoryTitle: {
    marginBottom: '1rem',
    fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
  },
  skillItem: {
    marginBottom: '0.5rem',
    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
  },
};

export default Skills;
