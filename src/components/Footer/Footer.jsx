import { Mail, Github, Send } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Ivan Silantev. Crafted with React & Three.js
        </p>
        <div className="footer-links">
          <a
            href="mailto:ivsilan2005@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/Melvud"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} />
          </a>
          <a
            href="https://t.me/Melvud"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Send size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
