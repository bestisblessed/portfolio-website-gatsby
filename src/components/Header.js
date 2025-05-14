import React, { useState } from 'react'

const navLinks = [
  { name: 'ABOUT', url: '#about' },
  { name: 'EXPERIENCE', url: '#experience' },
  { name: 'PROJECTS', url: '#projects' }
]

const styles = {
  header: {
    marginBottom: '40px',
    maxWidth: '90%'
  },
  name: {
    fontSize: '56px',
    margin: '0 0 10px 0',
    color: '#e6f1ff',
    fontWeight: '600'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'normal',
    margin: '0 0 20px 0',
    color: '#e6f1ff'
  },
  subtitle: {
    fontSize: '18px',
    lineHeight: '1.5',
    maxWidth: '300px',
    color: '#8892b0',
    marginBottom: '60px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px'
  },
  navItem: {
    color: '#a8b2d1',
    textDecoration: 'none',
    fontSize: '18px',
    letterSpacing: '1.2px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s ease'
  },
  navText: {
    transition: 'transform 0.3s ease',
    display: 'inline-block'
  },
  navLine: {
    position: 'relative',
    width: '24px',
    height: '2px',
    backgroundColor: '#64ffda',
    marginRight: '12px',
    transition: 'width 0.3s ease'
  },
  navLineHover: {
    width: '70px'
  }
}

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  
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
            style={{
              ...styles.navItem,
              color: hoveredItem === index ? '#e6f1ff' : '#a8b2d1'
            }}
            className="interactive-element"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span style={{
              ...styles.navLine,
              width: hoveredItem === index ? '70px' : '24px'
            }}></span>
            <span style={styles.navText}>
              {link.name}
            </span>
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header