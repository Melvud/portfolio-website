import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Github, Send } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formData
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:ivsilan2005@gmail.com?subject=${subject}&body=${body}`
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? Let's discuss how we can bring it to life
          </motion.p>
        </div>

        <div className="contact-container">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Get In Touch</h3>
                <div className="contact-methods">
                  <motion.a
                    href="mailto:ivsilan2005@gmail.com"
                    className="contact-method"
                    whileHover={{ x: 5 }}
                  >
                    <div className="contact-icon">
                      <Mail size={24} />
                    </div>
                    <div className="contact-text">
                      <p>Email</p>
                      <p>ivsilan2005@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/Melvud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                    whileHover={{ x: 5 }}
                  >
                    <div className="contact-icon">
                      <Github size={24} />
                    </div>
                    <div className="contact-text">
                      <p>GitHub</p>
                      <p>@Melvud</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://t.me/Melvud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method"
                    whileHover={{ x: 5 }}
                  >
                    <div className="contact-icon">
                      <Send size={24} />
                    </div>
                    <div className="contact-text">
                      <p>Telegram</p>
                      <p>@Melvud</p>
                    </div>
                  </motion.a>
                </div>

                <div className="response-time">
                  <p>
                    <strong>Response Time:</strong> Usually within 24 hours
                  </p>
                </div>
              </div>

              <div className="contact-form-container">
                <h3>Quick Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-button"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
