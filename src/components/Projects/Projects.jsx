import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Play, ArrowUpRight } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const videoRefs = useRef([])
  const [playingIndex, setPlayingIndex] = useState(null)

  const projects = [
    {
      // --- ИЗМЕНЕНИЯ ЗДЕСЬ ---
      mediaUrl: '/images/site-poster.png', // Имя файла из загрузки
      mediaType: 'linkable-image',
      linkUrl: 'http://phe.tue.nl',
      layout: 'wide', // <-- НОВЫЙ КЛАСС ДЛЯ МАКЕТА
      // --- КОНЕЦ ИЗМЕНЕНИЙ ---
      title: 'PhE Society Digital Platform',
      badges: [
        { text: 'Featured', type: 'featured' },
        { text: 'Live', type: 'live' }
      ],
      icon: '🌐',
      challenge:
        'A university society needed a professional digital presence with easy content management',
      solution:
        'Built a modern JAMstack architecture with Next.js and headless Payload CMS, featuring real-time preview, automated email workflows, and an intuitive admin panel. Non-technical team members can now independently manage all content.',
      result:
        'Eliminated developer dependency for content updates, reduced publishing time from days to minutes, and improved member engagement with automated communications.',
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
      // --- БОТ ---
      mediaUrl: '/images/phe-bot-mockup.jpg',
      mediaType: 'image',
      layout: 'tall-image',
      title: 'PhE Community Bot & Admin Platform',
      // ... (остальной код)
      badges: [{ text: 'Complex System', type: 'featured' }],
      icon: '🤖',
      challenge:
        'Managing 200+ community members manually — tracking mentorships, organizing networking events, and sending multi-channel notifications was consuming 10+ hours weekly.',
      solution:
        'Engineered an intelligent Telegram bot with a built-in admin panel (Telegram Mini App), automated matching algorithms for networking ("Random Coffee"), mentorship pairing, and multi-channel notification system (Telegram + Email). Implemented FSM-based onboarding and secure TMA authentication.',
      result:
        'Reduced admin workload, facilitated 50+ successful mentor matches, enabled 100+ networking connections, and increased member engagement.',
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
      // --- МЕССЕНДЖЕР ---
      mediaUrl: '/videos/messenger-demo.mp4',
      posterUrl: '/images/messenger-poster.jpg',
      mediaType: 'video',
      layout: 'tall-image',
      title: 'Full-Stack Android Messenger',
      badges: [
        { text: 'Featured', type: 'featured' },
        { text: 'Portfolio', type: 'live' }
      ],
      icon: '📞',
      challenge:
        'To build a complete, production-ready Android messenger, demonstrating expertise in modern native development (Kotlin/Compose), complex backend services (Firebase/TypeScript), and real-time communication (WebRTC).',
      solution:
        'Developed a full-stack solution featuring 1-on-1 WebRTC video/audio calls and a real-time chat. The backend (Firebase Cloud Functions in TypeScript) handles signaling, push notifications (FCM), and robust call management, including multi-device hangup logic, call timeouts, and seamless video upgrade requests. The app is 100% Kotlin & Jetpack Compose, supporting media sharing, voice messages, read receipts, and in-app updates.',
      result:
        'A high-performance, scalable messenger app that serves as a professional portfolio piece, showcasing a deep, end-to-end understanding of modern, complex mobile application architecture.',
      tech: [
        'Kotlin',
        'Jetpack Compose',
        'WebRTC',
        'Firebase (Full Stack)',
        'Cloud Functions (TypeScript)',
        'Firestore',
        'FCM',
        'Coroutines & Flow'
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
      // --- АНАЛИЗАТОР ---
      mediaUrl: '/videos/chess-demo.mp4',
      posterUrl: '/images/chess-poster.jpg',
      mediaType: 'video',
      layout: 'tall-image',
      title: 'Chess Analysis for Android', // From README
      badges: [{ text: 'Native Android', type: 'featured' }], // From README
      icon: '♟️',
      challenge:
        'Players needed a fast, powerful analysis tool that works offline on their phone. Simple PGN viewers lack deep analysis, and web-based tools require an internet connection and have server costs.',
      solution:
        'Developed a 100% native Android app using Kotlin and Jetpack Compose. Analysis is performed locally on-device via a Stockfish 17.1 engine. The app imports Chess.com/Lichess or PGN games, generates a full report (Moves Classification, Accuracy, Perfomance).',
      result:
        'A high-performance mobile tool providing deep game analysis. The app functions entirely offline with no server costs and features a rich, interactive UI with a custom board, evaluation bar, and a real-time "Variation Mode".',
      tech: [
        'Kotlin',
        'Jetpack Compose',
        'MVVM',
        'Stockfish (WASM)',
        'Room',
        'Coroutines & Flow',
        'Retrofit',
        'Firebase'
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

  const handlePlayClick = (index) => {
    if (playingIndex !== null && videoRefs.current[playingIndex]) {
      videoRefs.current[playingIndex].pause()
    }
    if (videoRefs.current[index]) {
      videoRefs.current[index].play()
      setPlayingIndex(index)
    }
  }

  const handleVideoClick = (index) => {
    if (playingIndex === index && videoRefs.current[index]) {
      videoRefs.current[index].pause()
      setPlayingIndex(null)
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
              className="project-card" // Убрал доп. класс отсюда
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              {/* --- ИЗМЕНЕНИЕ: Добавил класс сюда --- */}
              <div
                className={`project-grid ${
                  project.layout === 'wide' ? 'project-grid-wide' : ''
                } ${
                  project.layout === 'tall-image' ? 'project-grid-tall-image' : ''
                }`}
              >
                <div className="project-image">
                  {project.mediaUrl ? (
                    project.mediaType === 'video' ? (
                      <>
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src={project.mediaUrl}
                          poster={project.posterUrl}
                          className="project-media"
                          playsInline
                          onEnded={() => setPlayingIndex(null)}
                          onClick={() => handleVideoClick(index)}
                        />
                        {playingIndex !== index && (
                          <button
                            className="play-button"
                            onClick={() => handlePlayClick(index)}
                            aria-label="Play video"
                          >
                            <Play size={48} />
                          </button>
                        )}
                      </>
                    ) : project.mediaType === 'image' ? (
                      <img
                        src={project.mediaUrl}
                        alt={project.title}
                        className="project-media"
                      />
                    ) : project.mediaType === 'linkable-image' ? (
                      <a
                        href={project.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-linkable-image"
                        aria-label={`Visit live site for ${project.title}`}
                      >
                        <img
                          src={project.mediaUrl}
                          alt={project.title}
                          className="project-media"
                        />
                        <div className="project-image-overlay">
                          <ArrowUpRight size={48} />
                          <span>Visit Live Site</span>
                        </div>
                      </a>
                    ) : null
                  ) : (
                    <>
                      <div className="project-placeholder">{project.icon}</div>
                      <div className="shimmer"></div>
                    </>
                  )}
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