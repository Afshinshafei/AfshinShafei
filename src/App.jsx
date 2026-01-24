import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Research from './components/Research'
import Publications from './components/Publications'
import Conferences from './components/Conferences'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="app">
      <div className="scanlines"></div>
      <div className="grid-background"></div>
      
      <Header />
      
      <nav className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button 
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button 
          className={`tab-button ${activeTab === 'experiences' ? 'active' : ''}`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button 
          className={`tab-button ${activeTab === 'hobby-projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('hobby-projects')}
        >
          Hobby Projects
        </button>
      </nav>
      
      <main className="main-content">
        {activeTab === 'about' && (
          <>
            <About />
            <Contact />
          </>
        )}
        
        {activeTab === 'experiences' && (
          <>
            <Experience />
            <Skills />
          </>
        )}
        
        {activeTab === 'hobby-projects' && (
          <>
            <Projects />
          </>
        )}
        
        {activeTab === 'education' && (
          <>
            <Education />
            <Research />
            <Publications />
            <Conferences />
          </>
        )}
      </main>
      
      <footer className="footer">
        <p className="pixel-text">Last updated: January 2026</p>
        <p className="pixel-text-small">Made with React & retro vibes</p>
      </footer>
    </div>
  )
}

export default App
