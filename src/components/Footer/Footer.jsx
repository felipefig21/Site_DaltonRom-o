import { FaInstagram, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        
        <h2 className="footer-name">Dalton Romão </h2> 
        <p className="footer-subtitle">Não me interessa a imagem como ornamento. Trabalho com imagem como atrito: entre memória e ruído, <br /> entre corpo e excesso, entre presença e colapso.</p>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-circle">
          <FaInstagram />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5521994488270" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="mailto:contato@daltonromao.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-copyright">&copy; 2025 Dalton Romao - Artista. Todos os direitos reservados.</p>
    </footer>
  )
}

export default Footer