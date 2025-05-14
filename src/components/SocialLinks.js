import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa'

const styles = {
  socialLinks: {
    display: 'flex',
    gap: '20px',
    marginTop: 'auto',
    paddingBottom: '40px'
  },
  socialIcon: {
    color: '#a8b2d1',
    fontSize: '24px',
    transition: 'color 0.3s ease-in-out',
    cursor: 'pointer',
  },
  socialIconHover: {
    color: '#64ffda'
  },
  socialLink: {
    textDecoration: 'none'
  }
}

// Social links
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/bestisblessed', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tyler-durette-43b54317a/', icon: 'linkedin' },
  { name: 'YouTube', url: 'https://www.youtube.com/@drty6818', icon: 'youtube' },
  { name: 'Instagram', url: 'https://www.instagram.com/tylerdurette1/#', icon: 'instagram' }
]

const SocialIcon = ({ name }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const iconStyle = {
    ...styles.socialIcon,
    ...(isHovered ? styles.socialIconHover : {})
  }

  return (
    <span 
      style={iconStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name === 'github' && <FaGithub />}
      {name === 'linkedin' && <FaLinkedin />}
      {name === 'instagram' && <FaInstagram />}
      {name === 'youtube' && <FaYoutube />}
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