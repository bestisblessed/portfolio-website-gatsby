import React from 'react'

const styles = {
  section: {
    marginBottom: '100px'
  },
  sectionHeading: {
    fontSize: '24px',
    marginBottom: '40px',
    color: '#ccd6f6',
    fontWeight: '600'
  },
  project: {
    marginBottom: '50px'
  },
  projectContent: {
    flex: 1
  },
  projectTitle: {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#ccd6f6',
    display: 'flex',
    alignItems: 'center'
  },
  projectLink: {
    color: '#64ffda',
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '7px'
  },
  paragraph: {
    color: '#8892b0',
    fontSize: '16px',
    lineHeight: '1.7',
    maxWidth: '700px'
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '20px',
    gap: '10px'
  },
  skillTag: {
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    color: '#64ffda',
    padding: '5px 10px',
    borderRadius: '3px',
    fontSize: '12px'
  },
  arrow: {
    marginLeft: '5px',
    fontSize: '18px'
  }
}

const projectsData = [
  {
    title: 'Music Streaming App',
    url: 'https://example.com',
    description: 'A web application for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended songs based on your existing playlists.',
    skills: ['React', 'Styled Components', 'Express', 'Spotify API']
  },
  {
    title: 'Personal Blog',
    url: 'https://example.com',
    description: 'A minimal, dark theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, and npm.',
    skills: ['Gatsby', 'MDX', 'GraphQL']
  },
  {
    title: 'E-commerce Platform',
    url: 'https://example.com',
    description: 'A fully functional e-commerce platform built with modern web technologies. Features include product browsing, cart management, user authentication, and payment processing.',
    skills: ['Next.js', 'Redux', 'Stripe', 'MongoDB']
  }
]

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.sectionHeading}>PROJECTS</h2>
      
      {projectsData.map((project, index) => (
        <div key={index} style={styles.project}>
          <div style={styles.projectContent}>
            <div style={styles.projectTitle}>
              {project.title}
              <a href={project.url} style={styles.projectLink}>
                <span style={styles.arrow}>↗</span>
              </a>
            </div>
            <p style={styles.paragraph}>{project.description}</p>
            <div style={styles.skillTags}>
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} style={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Projects 