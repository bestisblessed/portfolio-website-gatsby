// Step 1: Import React
import * as React from 'react'
import './global.css'

import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import SocialLinks from '../components/SocialLinks'

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
