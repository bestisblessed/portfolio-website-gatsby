// Step 1: Import React
import * as React from 'react'
import { useEffect, useState } from 'react'
import './global.css'

import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
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
      </div>
    </div>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Tyler Durette | Software Engineer</title>

// Step 3: Export your component
export default IndexPage
