import React from 'react';
import { resumeData } from '../data/resume';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <div className="arcade-card" style={styles.card}>
          <h2>[ CONNECT ]</h2>
          <div style={styles.contactGrid}>
            <div style={styles.contactItem}>
              <span style={styles.icon}>📧</span>
              <a href={`mailto:${resumeData.personal.email}`} style={styles.link}>
                {resumeData.personal.email}
              </a>
            </div>
            
            {resumeData.personal.linkedin && (
              <div style={styles.contactItem}>
                <span style={styles.icon}>💼</span>
                <a 
                  href={resumeData.personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  LinkedIn Profile
                </a>
              </div>
            )}
            
            {resumeData.personal.github && (
              <div style={styles.contactItem}>
                <span style={styles.icon}>💻</span>
                <a 
                  href={resumeData.personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  GitHub Profile
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div style={styles.gameOver}>
          <p style={styles.copyright}>
            GAME CREATED {new Date().getFullYear()} | PRESS START TO CONTINUE
          </p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '2rem 0 3rem',
    marginTop: '3rem',
  },
  card: {
    textAlign: 'center',
  },
  contactGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
  },
  icon: {
    fontSize: '1.5rem',
  },
  link: {
    color: 'var(--neon-cyan)',
    textDecoration: 'none',
  },
  gameOver: {
    textAlign: 'center',
    marginTop: '3rem',
  },
  copyright: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 'clamp(0.6rem, 1.5vw, 0.8rem)',
    color: 'var(--neon-purple)',
    letterSpacing: '2px',
    textShadow: '0 0 10px var(--neon-purple)',
  },
};

export default Footer;
