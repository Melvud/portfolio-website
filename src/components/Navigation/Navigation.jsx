import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navigation.css'

const Navigation = () => {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 0) {
        setHidden(false)
        return
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className="navigation"
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="nav-content">
        <motion.div
          className="logo"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ivan Silantev
        </motion.div>

        <ul className="nav-links">
          <li>
            <a onClick={() => scrollToSection('services')}>Services</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>

        <motion.button
          className="cta-button"
          onClick={() => scrollToSection('contact')}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default Navigation
