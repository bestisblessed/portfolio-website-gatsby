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
    justifyContent: 'center',
    marginLeft: '10px',
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    backgroundColor: 'rgba(100, 255, 218, 0.1)',
    transition: 'all 0.2s ease'
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
    fontSize: '16px'
  }
}

const projectsData = [
  {
    title: 'NFL-AI',
    url: 'https://nfl-ai.streamlit.app/',
    description: 'NFL data analysis website designed for advanced sports handicappers. Features interactive visualization tools, AI-driven insights, and comprehensive statistical analysis to help users make more informed decisions.',
    skills: ['Python', 'Streamlit', 'AI', 'Data Analysis', 'Jupyter Notebook']
  },
  {
    title: 'MMA-AI',
    url: 'https://mma-ai.streamlit.app/',
    description: 'UFC/MMA data analysis platform with AI report generation and fight prediction capabilities. Built for advanced sports handicappers to analyze fighter statistics, matchup histories, and generate predictive insights.',
    skills: ['Python', 'Streamlit', 'AI', 'Data Analysis', 'Jupyter Notebook']
  },
  {
    title: 'The Fight Predictor Agent',
    url: 'https://github.com/bestisblessed/the-fight-predictor-agent',
    description: 'Automated AI agent designed for professional fight analysis. Currently deployed on Twitter, this bot analyzes upcoming fights, fighter statistics, and provides predictive insights for the fighting community.',
    skills: ['Python', 'AI', 'Twitter API', 'Machine Learning']
  },
  {
    title: 'Trading Bots',
    url: 'https://github.com/bestisblessed/trading-bots-public',
    description: 'Collection of Solana and Base chain scripts for building trading bots. These tools provide the building blocks for automated cryptocurrency trading systems with various strategies and risk management techniques.',
    skills: ['Shell', 'Blockchain', 'Solana', 'Base', 'Trading']
  },
  {
    title: 'Odds Monitoring',
    url: 'https://github.com/bestisblessed/odds-monitoring',
    description: 'Odds monitoring scripts for NFL, NCAAF, UFC, and more from various books designed to run in cron jobs throughout the day. These tools help track betting lines and identify value opportunities across different markets.',
    skills: ['Python', 'Jupyter Notebook', 'Data Scraping', 'Cron Jobs']
  },
  {
    title: 'AI Templates',
    url: 'https://github.com/bestisblessed/ai-templates',
    description: 'Various templates for different use cases of the OpenAI API (mostly assistants) designed to help beginners get started. A collection of boilerplate code and examples to accelerate AI application development.',
    skills: ['OpenAI API', 'Python', 'AI', 'Templates']
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
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={styles.projectLink}
                className="project-link"
              >
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