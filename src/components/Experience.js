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
  experience: {
    display: 'flex',
    marginBottom: '50px'
  },
  experienceDate: {
    width: '120px',
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
    alignItems: 'center',
    fontWeight: '500'
  },
  experienceCompany: {
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

const experienceData = [
  {
    date: '2023 — PRESENT',
    title: 'AI Applications Developer',
    company: 'Self-Employed',
    companyUrl: 'https://github.com/bestisblessed',
    description: 'Develop AI-powered applications and data analysis tools for sports, finance, and blockchain. Create and maintain multiple web applications for NFL and UFC/MMA data analysis. Design and implement automated trading bots for cryptocurrency markets.',
    skills: ['Python', 'AI', 'Machine Learning', 'Streamlit', 'Data Science']
  },
  {
    date: '2022 — PRESENT',
    title: 'Sports Analytics Developer',
    company: 'The Fight Predictor',
    companyUrl: 'https://github.com/bestisblessed/the-fight-predictor-agent',
    description: 'Created an automated AI agent designed for professional fight analysis. Built and deployed data analysis tools for sports handicappers, focusing on UFC/MMA and NFL. Implemented machine learning models for predictive analytics in sports.',
    skills: ['Python', 'AI', 'Data Analytics', 'Jupyter Notebook', 'Twitter API']
  },
  {
    date: '2021 — PRESENT',
    title: 'Blockchain Developer',
    company: 'Trading Bots',
    companyUrl: 'https://github.com/bestisblessed/trading-bots-public',
    description: 'Developed various trading bots and blockchain scripts for Solana and Base chains. Created monitoring scripts for odds tracking across various sports books. Implemented automated trading strategies for cryptocurrency markets.',
    skills: ['Shell', 'Blockchain', 'Solana', 'Base', 'Trading Algorithms']
  }
]

const Experience = () => {
  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.sectionHeading}>EXPERIENCE</h2>
      
      {experienceData.map((job, index) => (
        <div key={index} style={styles.experience}>
          <div style={styles.experienceDate}>{job.date}</div>
          <div style={styles.experienceContent}>
            <div style={styles.experienceTitle}>
              {job.title}
              <span style={styles.experienceCompany}>
                · {job.company} <span style={styles.arrow}>↗</span>
              </span>
            </div>
            <p style={styles.paragraph}>{job.description}</p>
            <div style={styles.skillTags}>
              {job.skills.map((skill, skillIndex) => (
                <span key={skillIndex} style={styles.skillTag}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Experience 