import React from 'react'

const styles = {
  socialLinks: {
    display: 'flex',
    gap: '20px',
    marginTop: 'auto',
    paddingBottom: '40px'
  },
  socialIcon: {
    color: '#a8b2d1',
    fontSize: '20px',
    transition: 'color 0.2s ease',
    cursor: 'pointer'
  },
  socialLink: {
    textDecoration: 'none'
  }
}

// Social links
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'CodePen', url: 'https://codepen.io', icon: 'codepen' },
  { name: 'Instagram', url: 'https://instagram.com', icon: 'instagram' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' }
]

const SocialIcon = ({ name }) => {
  return (
    <span style={styles.socialIcon}>
      {name === 'github' && '◻'}
      {name === 'linkedin' && '◻'}
      {name === 'codepen' && '◻'}
      {name === 'instagram' && '◻'}
      {name === 'twitter' && '◻'}
    </span>
  )
}

const SocialLinks = () => {
  return (
    <footer style={styles.socialLinks}>
      {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          style={styles.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
        >
          <SocialIcon name={link.icon} />
        </a>
      ))}
    </footer>
  )
}

export default SocialLinks 