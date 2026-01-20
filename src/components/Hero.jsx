import React from 'react';
import { resumeData } from '../data/resume';

const Hero = () => {
  return (
    <section className="container">
      <div className="arcade-card">
        <h2>[ PLAYER PROFILE ]</h2>
        <div style={styles.profile}>
          <div style={styles.avatarSection}>
            <div style={styles.avatar}>
              <div style={styles.pixelAvatar}>
                <div style={styles.pixel}></div>
                <div style={styles.pixel}></div>
                <div style={styles.pixel}></div>
                <div style={styles.pixel}></div>
              </div>
            </div>
            <p style={styles.title}>{resumeData.personal.title}</p>
            <p style={styles.location}>📍 {resumeData.personal.location}</p>
          </div>
          <div style={styles.summary}>
            <p>{resumeData.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  profile: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
  avatarSection: {
    textAlign: 'center',
  },
  avatar: {
    width: '150px',
    height: '150px',
    margin: '0 auto 1rem',
    border: '3px solid var(--neon-pink)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 16, 240, 0.1)',
    boxShadow: '0 0 20px var(--neon-pink)',
  },
  pixelAvatar: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    padding: '20px',
  },
  pixel: {
    width: '30px',
    height: '30px',
    background: 'var(--neon-cyan)',
    boxShadow: '0 0 10px var(--neon-cyan)',
  },
  title: {
    fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
    color: 'var(--neon-pink)',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  location: {
    fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
    color: 'var(--neon-purple)',
  },
  summary: {
    padding: '1rem',
  },
};

export default Hero;
