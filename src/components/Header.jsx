import React from 'react';
import { resumeData } from '../data/resume';

const Header = () => {
  return (
    <header style={styles.header}>
      <div className="container">
        <div style={styles.arcade}>
          <div style={styles.insertCoin}>
            INSERT COIN <span className="blink">_</span>
          </div>
          <h1 className="glow-text" style={styles.title}>
            {resumeData.personal.name}
          </h1>
          <p style={styles.subtitle}>{resumeData.personal.tagline}</p>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    padding: '3rem 0 2rem',
    textAlign: 'center',
    background: 'linear-gradient(180deg, rgba(189, 0, 255, 0.1) 0%, transparent 100%)',
  },
  arcade: {
    position: 'relative',
  },
  insertCoin: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 'clamp(0.6rem, 2vw, 0.8rem)',
    color: 'var(--neon-yellow)',
    textShadow: '0 0 10px var(--neon-yellow)',
    marginBottom: '1rem',
    letterSpacing: '3px',
  },
  title: {
    margin: '1rem 0',
  },
  subtitle: {
    fontFamily: 'var(--font-pixel)',
    fontSize: 'clamp(0.7rem, 2vw, 1rem)',
    color: 'var(--neon-cyan)',
    letterSpacing: '2px',
    marginTop: '0.5rem',
  },
};

export default Header;
