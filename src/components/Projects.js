import React from 'react'
import './Projects.css'

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
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">PROJECTS</h2>
      
      {projectsData.map((project, index) => (
        <a 
          key={index} 
          className="project-item"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} - ${project.description}`}
        >
          <div className="project-content">
            <div className="project-title">
              {project.title}
              <span className="project-link">
                <span className="project-arrow">↗</span>
              </span>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-skills">
              {project.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="project-skill">{skill}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}

export default Projects 