import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        
        <h2 className="footer-name">Dalton Romão </h2> 
        <p className="footer-subtitle">GRAVURAS CONTEMPORANEAS EM EDICAO LIMITADA</p>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-circle">
          <FaInstagram />
        </a>
        <a href="https://wa.me/552199448-8270" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="mailto:contato@daltonromao.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copyright">&copy; 2024 Dalton Romao - Artista. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer