import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  const closeMenu = () => {
    setMenuOpen(false)
  }
  
  // Determinar se está na home
  const isHome = location.pathname === '/'
  const isGallery = location.pathname === '/galeria'
  const isEmEspaco = location.pathname === '/em-espaco'

  return (
    <>
      <header className={`header ${scrolled && !isGallery && !isEmEspaco ? 'header-scrolled' : ''} ${!isHome && !isGallery && !isEmEspaco ? 'header-solid' : ''} ${isGallery || isEmEspaco ? 'header-black' : ''}`}>
        <div className="header-container">
          <Link to="/" className="artist-name-link">
            <h1 className="artist-name">DALTON ROMÃO</h1>
          </Link>
          
          <div className="header-actions">
            <a href="#contato" className="contact-btn">
              <span>Contato</span>
            </a>
            
            <button className="menu-btn" onClick={toggleMenu} aria-label="Menu">
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
              <span className="menu-icon"></span>
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  )
}

export default Header

