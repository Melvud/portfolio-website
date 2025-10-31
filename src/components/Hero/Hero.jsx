import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js',
    'Python', 'Kotlin', 'Three.js', 'WebRTC',
    'PostgreSQL', 'Firebase', 'Docker'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-tag" variants={itemVariants}>
          Full-Stack Developer & Solutions Architect
        </motion.div>

        <motion.h1 variants={itemVariants}>
          Building the Future
          <br />
          <span className="gradient-text">One Line of Code at a Time</span>
        </motion.h1>

        <motion.p variants={itemVariants}>
          Crafting elegant, scalable digital solutions — from immersive web experiences
          and intelligent automation to real-time communication systems.
          Clean architecture, measurable impact.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div className="tech-stack" variants={itemVariants}>
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              className="tech-tag"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        onClick={() => scrollToSection('services')}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={30} />
      </motion.div>
    </section>
  )
}

export default Hero
