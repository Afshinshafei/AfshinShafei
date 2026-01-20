import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Research from './components/Research'
import Publications from './components/Publications'
import Conferences from './components/Conferences'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <div className="scanlines"></div>
      <div className="grid-background"></div>
      
      <Header />
      
      <main className="main-content">
        <About />
        <Experience />
        <Education />
        <Research />
        <Publications />
        <Conferences />
        <Skills />
        <Contact />
      </main>
      
      <footer className="footer">
        <p className="pixel-text">Last updated: January 2026</p>
        <p className="pixel-text-small">Made with React & retro vibes</p>
      </footer>
    </div>
  )
}

export default App
