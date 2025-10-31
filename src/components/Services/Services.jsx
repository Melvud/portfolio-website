import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      icon: '🌐',
      title: 'Modern Web Applications',
      description:
        'High-performance, responsive web apps built with React, Next.js, and cutting-edge technologies. From concept to deployment with SEO optimization and analytics.',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind']
    },
    {
      icon: '🤖',
      title: 'Intelligent Telegram Bots',
      description:
        'Custom automation solutions with admin panels, payment integration, and multi-channel notifications. FSM-based workflows for complex user interactions.',
      tags: ['Python', 'Aiogram', 'PostgreSQL', 'WebApp']
    },
    {
      icon: '📱',
      title: 'Native Android Apps',
      description:
        'Production-ready Android applications with Jetpack Compose, real-time features, offline functionality, and seamless cloud integration.',
      tags: ['Kotlin', 'Compose', 'WebRTC', 'Firebase']
    },
    {
      icon: '⚡',
      title: 'Backend & Real-Time Systems',
      description:
        'Scalable REST APIs, WebSocket servers, microservices architecture, and real-time data processing with asyncio and event-driven design.',
      tags: ['Node.js', 'Python', 'PostgreSQL', 'Redis']
    },
    {
      icon: '🎨',
      title: 'Interactive 3D Experiences',
      description:
        'Immersive web experiences using Three.js, WebGL, and creative coding. From data visualizations to product showcases.',
      tags: ['Three.js', 'WebGL', 'GSAP', 'Canvas']
    },
    {
      icon: '🔧',
      title: 'DevOps & Optimization',
      description:
        'CI/CD pipelines, Docker containerization, performance audits, and code optimization. Making your applications faster and more reliable.',
      tags: ['Docker', 'CI/CD', 'Optimization', 'Security']
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What I Bring to the Table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            End-to-end solutions designed to solve real problems and deliver
            measurable results
          </motion.p>
        </div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="service-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
