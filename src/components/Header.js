import React from 'react'

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
          <a key={index} href={link.url} style={styles.navItem}>
            <span style={styles.navLine}></span>
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header 