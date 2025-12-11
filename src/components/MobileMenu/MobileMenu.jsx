import { Link } from 'react-router-dom'
import './MobileMenu.css'

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay escuro */}
      {isOpen && (
        <div className="menu-overlay" onClick={onClose}></div>
      )}
      
      {/* Menu lateral */}
      <nav className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <ul className="menu-list">
          <li>
            <Link to="/" onClick={onClose}>HOME</Link>
          </li>
          <li>
            <Link to="/galeria" onClick={onClose}>GALERIA</Link>
          </li>
          <li>
            <Link to="/sobre" onClick={onClose}>SOBRE</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MobileMenu