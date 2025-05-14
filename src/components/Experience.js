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
    title: 'Senior Frontend Engineer, Accessibility',
    company: 'TechCorp',
    companyUrl: 'https://example.com',
    description: 'Build and maintain critical components used to construct TechCorp\'s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    skills: ['JavaScript', 'TypeScript', 'React', 'Storybook']
  },
  {
    date: '2019 — 2023',
    title: 'Lead Engineer',
    company: 'DesignStudio',
    companyUrl: 'https://example.com',
    description: 'Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including startups, educational institutions, and non-profits. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
    skills: ['React', 'Next.js', 'CSS', 'Node.js']
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