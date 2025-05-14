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
  paragraph: {
    color: '#8892b0',
    fontSize: '16px',
    lineHeight: '1.7',
    maxWidth: '700px',
    marginBottom: '20px'
  },
  highlight: {
    color: '#64ffda'
  }
}

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.sectionHeading}>ABOUT</h2>
      <p style={styles.paragraph}>
        I'm a developer passionate about crafting accessible, pixel-perfect user interfaces
        that blend thoughtful design with robust engineering. My favorite work lies at the
        intersection of design and development, creating experiences that not only look great
        but are meticulously built for performance and usability.
      </p>
      <p style={styles.paragraph}>
        Currently, I'm a Senior Front-End Engineer at <span style={styles.highlight}>TechCorp</span>, specializing in
        accessibility. I contribute to the creation and maintenance of UI components that power
        TechCorp's frontend, ensuring our platform meets web accessibility standards and best
        practices to deliver an inclusive user experience.
      </p>
      <p style={styles.paragraph}>
        In the past, I've had the opportunity to develop software across a variety of
        settings — from <span style={styles.highlight}>design agencies</span> and <span style={styles.highlight}>large corporations</span> to <span style={styles.highlight}>start-ups</span> and
        <span style={styles.highlight}> small digital product studios</span>. Additionally, I also released a <span style={styles.highlight}>comprehensive
        video course</span> a few years ago, guiding learners through building a web app with
        the Spotify API.
      </p>
      <p style={styles.paragraph}>
        In my spare time, I'm usually climbing, reading, hanging out with my partner and
        two cats, or running around Hyrule searching for <span style={styles.highlight}>Korok seeds</span>.
      </p>
    </section>
  )
}

export default About 