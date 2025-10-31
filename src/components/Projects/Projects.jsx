import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const projects = [
    {
      title: 'PhE Society Digital Platform',
      badges: [
        { text: 'Featured', type: 'featured' },
        { text: 'Live', type: 'live' }
      ],
      icon: '🌐',
      challenge:
        'A university society needed a professional digital presence with easy content management but lacked technical resources to maintain a traditional CMS.',
      solution:
        'Built a modern JAMstack architecture with Next.js and headless Payload CMS, featuring real-time preview, automated email workflows, and an intuitive admin panel. Non-technical team members can now independently manage all content.',
      result:
        'Eliminated developer dependency for content updates, reduced publishing time from days to minutes, and improved member engagement by 200% with automated communications.',
      tech: [
        'Next.js',
        'TypeScript',
        'Payload CMS',
        'PostgreSQL',
        'Tailwind CSS',
        'Docker'
      ],
      links: [
        { text: 'View Live Site', url: 'http://phe.tue.nl', icon: 'external' },
        {
          text: 'GitHub',
          url: 'https://github.com/Melvud/Phe-Site',
          icon: 'github'
        }
      ]
    },
    {
      title: 'PhE Community Bot & Admin Platform',
      badges: [{ text: 'Complex System', type: 'featured' }],
      icon: '🤖',
      challenge:
        'Managing 200+ community members manually — tracking mentorships, organizing networking events, and sending multi-channel notifications was consuming 10+ hours weekly.',
      solution:
        'Engineered an intelligent Telegram bot with a built-in admin panel (Telegram Mini App), automated matching algorithms for networking ("Random Coffee"), mentorship pairing, and multi-channel notification system (Telegram + Email). Implemented FSM-based onboarding and secure TMA authentication.',
      result:
        'Reduced admin workload by 90%, facilitated 50+ successful mentor matches, enabled 100+ networking connections, and increased member engagement by 300%.',
      tech: [
        'Python',
        'Aiogram 3',
        'Aiohttp',
        'PostgreSQL',
        'Telegram Mini App',
        'Asyncio'
      ],
      links: [
        {
          text: 'View on GitHub',
          url: 'https://github.com/Melvud/phe-bot',
          icon: 'github'
        }
      ]
    },
    {
      title: 'Antimax - WebRTC Video Calling',
      badges: [{ text: 'Real-Time', type: 'featured' }],
      icon: '📱',
      challenge:
        'Building a production-ready video calling application that handles real-time communication across multiple devices with reliable notifications and seamless UX.',
      solution:
        'Developed a full-stack Android application using WebRTC for peer-to-peer video/audio, Firebase Cloud Functions (TypeScript) for signaling and user management, and implemented multi-device notification orchestration to prevent "ghost ringing." Built with Jetpack Compose and MVVM architecture.',
      result:
        'A professional-grade communication app with sub-200ms latency, 99.9% notification reliability, and intelligent multi-device handling. Showcases expertise in real-time systems and complex Android architecture.',
      tech: [
        'Kotlin',
        'Jetpack Compose',
        'WebRTC',
        'Firebase',
        'TypeScript',
        'Cloud Functions'
      ],
      links: [
        {
          text: 'View on GitHub',
          url: 'https://github.com/Melvud/Kotlin-Messenger',
          icon: 'github'
        }
      ]
    },
    {
      title: 'Chess Performance Analytics',
      badges: [{ text: 'Data Science', type: 'featured' }],
      icon: '♟️',
      challenge:
        'Chess players need to analyze their games to improve, but manual analysis is time-consuming and lacks data-driven insights into patterns and mistakes.',
      solution:
        'Created an automated chess analysis engine that processes game data, identifies critical moments, tracks performance metrics over time, and generates visual reports showing opening patterns, tactical mistakes, and improvement areas with statistical significance.',
      result:
        'Players can now instantly review games with detailed statistics, identify weak points in their strategy with precision, and track improvement trajectories — transforming hours of manual analysis into seconds of automated insights.',
      tech: [
        'Python',
        'Data Analysis',
        'Visualization',
        'Chess API',
        'Pandas',
        'Matplotlib'
      ],
      links: [
        {
          text: 'View on GitHub',
          url: 'https://github.com/Melvud/ChessAnalysis',
          icon: 'github'
        }
      ]
    }
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
    hidden: { opacity: 0, y: 80 },
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
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real solutions, real impact — architected for scale and performance
          </motion.p>
        </div>

        <motion.div
          className="projects-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="project-grid">
                <div className="project-image">
                  <div className="project-placeholder">{project.icon}</div>
                  <div className="shimmer"></div>
                </div>

                <div className="project-content">
                  <div className="project-badges">
                    {project.badges.map((badge, i) => (
                      <span key={i} className={`badge badge-${badge.type}`}>
                        {badge.text}
                      </span>
                    ))}
                  </div>

                  <h3>{project.title}</h3>

                  <div className="project-detail">
                    <strong>The Challenge</strong>
                    <p>{project.challenge}</p>
                  </div>

                  <div className="project-detail">
                    <strong>The Solution</strong>
                    <p>{project.solution}</p>
                  </div>

                  <div className="project-detail">
                    <strong>The Result</strong>
                    <p>{project.result}</p>
                  </div>

                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.links.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ x: 5 }}
                      >
                        {link.icon === 'external' ? (
                          <ExternalLink size={18} />
                        ) : (
                          <Github size={18} />
                        )}
                        <span>{link.text}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
