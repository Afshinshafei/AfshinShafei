import React from 'react';
import { resumeData } from '../data/resume';

const Experience = () => {
  return (
    <section className="container">
      <div className="arcade-card">
        <h2>[ QUEST LOG ]</h2>
        <div className="timeline">
          {resumeData.experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <h3 style={styles.jobTitle}>{job.title}</h3>
              <p style={styles.company}>
                {job.company} | {job.location}
              </p>
              <p style={styles.period}>📅 {job.period}</p>
              <ul style={styles.responsibilities}>
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  jobTitle: {
    marginBottom: '0.5rem',
  },
  company: {
    color: 'var(--neon-pink)',
    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
    marginBottom: '0.5rem',
  },
  period: {
    color: 'var(--neon-yellow)',
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    marginBottom: '1rem',
  },
  responsibilities: {
    marginTop: '1rem',
    paddingLeft: '1rem',
  },
};

export default Experience;
