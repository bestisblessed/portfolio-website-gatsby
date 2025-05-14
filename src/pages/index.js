// Step 1: Import React
import * as React from 'react'
import { useEffect, useState } from 'react'
import './global.css'

import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Projects from '../components/Projects'
import SocialLinks from '../components/SocialLinks'

const IndexPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="container">
      <div 
        className="cursor-spotlight" 
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          pointerEvents: 'none'
        }}
      ></div>
      <div className="left-column">
        <Header />
        <SocialLinks />
      </div>
      <div className="right-column">
        <About />
        <Experience />
        <Projects />
        <Education />
        <div
          style={{
            marginTop: 'auto',
            paddingBottom: '50px',
            paddingTop: '55px',
            marginRight: '50px',
            fontSize: '1rem',
            color: '#8892b0',
            letterSpacing: '0.02em',
            fontWeight: 400,
            lineHeight: 1.6,
            textAlign: 'right',
            fontStyle: 'italic',
            fontFamily: 'Courier New, Courier, monospace',
          }}
        >
          Shoutout <a href="https://github.com/bchiang7/v4" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline' }}>github.com/bchiang7/v4</a> .. love the website design
        </div>
      </div>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Tyler Durette | Software Engineer</title>

// Step 3: Export your component
export default IndexPage
