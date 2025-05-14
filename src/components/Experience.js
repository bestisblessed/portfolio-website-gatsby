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
    date: 'Mar 2023 — PRESENT',
    title: 'DevOps Engineer',
    company: 'Booz Allen Hamilton',
    companyUrl: '#',
    description: 'Implementing DevOps practices and managing cloud infrastructure to support government and commercial clients. Working with containerization, CI/CD pipelines, and infrastructure as code to streamline application deployment and management.',
    skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD', 'Terraform']
  },
  {
    date: 'Aug 2021 — Mar 2023',
    title: 'DevOps Engineer',
    company: 'RRAI',
    companyUrl: '#',
    description: 'Architected and implemented cloud-based solutions using modern DevOps practices. Automated infrastructure deployment and application delivery pipelines, resulting in improved reliability and faster release cycles.',
    skills: ['Cloud Infrastructure', 'GitOps', 'Containerization', 'Automation', 'Monitoring']
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