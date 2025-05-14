// Step 1: Import React
import * as React from 'react'
import './global.css'

import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import SocialLinks from '../components/SocialLinks'

// Step 2: Define your component
const navLinks = [
  { name: 'ABOUT', url: '#about' },
  { name: 'EXPERIENCE', url: '#experience' },
  { name: 'PROJECTS', url: '#projects' }
]

// Social links
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'CodePen', url: 'https://codepen.io', icon: 'codepen' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' }
]

// CSS styles
const styles = {
  body: {
    backgroundColor: '#0a192f',
    color: '#e6f1ff',
    fontFamily: 'sans-serif',
    margin: 0,
    padding: '0 150px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    paddingTop: '80px',
    marginBottom: '40px'
  },
  name: {
    fontSize: '48px',
    margin: '0 0 10px 0',
    color: '#e6f1ff'
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
    maxWidth: '500px',
    color: '#8892b0'
  },
  nav: {
    display: 'flex',
    marginTop: '30px'
  },
  navItem: {
    marginRight: '30px',
    color: '#a8b2d1',
    textDecoration: 'none',
    fontSize: '14px'
  },
  section: {
    marginBottom: '80px'
  },
  sectionHeading: {
    fontSize: '20px',
    marginBottom: '20px',
    color: '#ccd6f6'
  },
  paragraph: {
    color: '#8892b0',
    fontSize: '16px',
    lineHeight: '1.5',
    maxWidth: '700px'
  },
  highlight: {
    color: '#64ffda'
  },
  experience: {
    display: 'flex',
    marginBottom: '30px'
  },
  experienceDate: {
    width: '150px',
    color: '#a8b2d1',
    fontSize: '14px'
  },
  experienceContent: {
    flex: 1
  },
  experienceTitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#ccd6f6',
    display: 'flex',
    alignItems: 'center'
  },
  experienceCompany: {
    color: '#64ffda',
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '7px'
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '15px',
    gap: '10px'
  },
  skillTag: {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
    padding: '5px 10px',
    borderRadius: '3px',
    fontSize: '12px'
  },
  socialLinks: {
    display: 'flex',
    gap: '20px',
    marginTop: '50px'
  },
  socialIcon: {
    color: '#a8b2d1',
    fontSize: '20px'
  },
  arrow: {
    marginLeft: '5px',
    fontSize: '18px'
  }
}

const SocialIcon = ({ name }) => {
  return (
    <span style={styles.socialIcon}>
      {name === 'github' && '□'}
      {name === 'linkedin' && '□'}
      {name === 'codepen' && '□'}
      {name === 'instagram' && '□'}
      {name === 'other' && '□'}
    </span>
  )
}

const IndexPage = () => {
  return (
    <div className="container">
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
export const Head = () => <title>John Smith | Front End Engineer</title>

// Step 3: Export your component
export default IndexPage
