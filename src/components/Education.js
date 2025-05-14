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
  education: {
    display: 'flex',
    marginBottom: '50px'
  },
  educationDate: {
    width: '120px',
    color: '#a8b2d1',
    fontSize: '14px'
  },
  educationContent: {
    flex: 1
  },
  schoolName: {
    fontSize: '18px',
    marginBottom: '5px',
    color: '#ccd6f6',
    fontWeight: '500'
  },
  degree: {
    color: '#8892b0',
    fontSize: '16px',
    marginBottom: '5px'
  },
  activities: {
    color: '#8892b0',
    fontSize: '14px',
    lineHeight: '1.6',
    fontStyle: 'italic'
  }
}

const educationData = [
  {
    school: 'James Madison University',
    degree: 'Bachelor of Science - BS, Integrated Science and Technology',
    date: '2017 — 2021',
    activities: 'Activities and societies: ISAT Honor Society, Sigma Phi Epsilon'
  },
  {
    school: 'Herndon High School',
    degree: 'Advanced Diploma',
    date: 'Sep 2013 — Jun 2017',
    activities: 'Activities and societies: Men\'s Varsity Lacrosse Captain'
  }
]

const Education = () => {
  return (
    <section id="education" style={styles.section}>
      <h2 style={styles.sectionHeading}>EDUCATION</h2>
      
      {educationData.map((edu, index) => (
        <div key={index} style={styles.education}>
          <div style={styles.educationDate}>{edu.date}</div>
          <div style={styles.educationContent}>
            <div style={styles.schoolName}>{edu.school}</div>
            <div style={styles.degree}>{edu.degree}</div>
            <div style={styles.activities}>{edu.activities}</div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Education 