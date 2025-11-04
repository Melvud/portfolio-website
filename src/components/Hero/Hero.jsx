import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  // Этот массив навыков мы обновили в прошлый раз
  const techStack = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'PHP', 'HTML', 'CSS', 'Kotlin', 'Java',
    'Android SDK', 'WordPress', 'Telegram API', 'WhatsApp API', 'Three.js',
    'WebRTC', 'PostgreSQL', 'Firebase', 'Git', 'Docker'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

        {/* --- ИЗМЕНЕНИЯ ЗДЕСЬ --- */}
        <motion.h1 variants={itemVariants}>
          Ivan Silantev
          <br />
          <span className="gradient-text hero-subtitle">
            Building Websites, Bots & Android Apps
          </span>
        </motion.h1>
        {/* --- КОНЕЦ ИЗМЕНЕНИЙ --- */}

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

      
    </section>
  )
}

export default Hero