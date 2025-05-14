import React from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'ABOUT', url: '#about' },
  { name: 'EXPERIENCE', url: '#experience' },
  { name: 'PROJECTS', url: '#projects' }
]

const styles = {
  header: {
    marginBottom: '40px'
  },
  name: {
    fontSize: '48px',
    margin: '0 0 10px 0',
    color: '#e6f1ff',
    fontWeight: '600'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'normal',
    margin: '0 0 20px 0',
    color: '#e6f1ff'
  },
  subtitle: {
    fontSize: '16px',
    lineHeight: '1.5',
    maxWidth: '300px',
    color: '#8892b0',
    marginBottom: '100px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  navItem: {
    color: '#a8b2d1',
    textDecoration: 'none',
    fontSize: '14px',
    letterSpacing: '1px',
    position: 'relative',
    paddingLeft: '30px'
  },
  glitchResumeLink: {
    color: '#64ffda',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily: 'monospace',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    padding: '4px 16px',
    marginTop: '25px',
    marginLeft: '30px',
    borderRadius: '4px',
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    transition: 'border 0.2s ease'
  },
  navLine: {
    position: 'absolute',
    left: '0',
    top: '50%',
    width: '20px',
    height: '1px',
    backgroundColor: '#64ffda',
    transform: 'translateY(-50%)'
  }
}

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.name}>Tyler Durette</h1>
      <h2 style={styles.title}>Software Engineer</h2>
      <p style={styles.subtitle}>
        I build AI-powered applications and data analysis tools for sports, finance, and blockchain.
      </p>

      {/* Navigation */}
      <nav style={styles.nav}>
        {navLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            style={styles.navItem} 
            className="interactive-element"
          >
            <span style={styles.navLine}></span>
            {link.name}
          </a>
        ))}
        
        {/* Glitch Effect Resume Link - Box only on hover */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.glitchResumeLink}
          className="interactive-element"
          animate={{
            textShadow: [
              '2px 0 #ff0000, -2px 0 #00ff00',
              '-2px 0 #ff0000, 2px 0 #00ff00',
              '2px 0 #ff0000, -2px 0 #00ff00'
            ]
          }}
          whileHover={{
            border: '1px solid #64ffda',
          }}
          transition={{ duration: 0.4, repeat: Infinity }}
        >
          &lt;RESUME.TSX /&gt;
        </motion.a>
      </nav>
    </header>
  )
}

export default Header 