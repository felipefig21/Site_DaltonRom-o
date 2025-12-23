import { useEffect } from 'react'
import './Lightbox.css'

function Lightbox({ artwork, onClose, onNext, onPrev }) {
  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // Navegar com setas do teclado
  useEffect(() => {
    const handleArrows = (e) => {
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleArrows)
    return () => window.removeEventListener('keydown', handleArrows)
  }, [onNext, onPrev])

  // Prevenir scroll do body quando lightbox está aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Fechar">
        ✕
      </button>

      <button className="lightbox-nav lightbox-prev" onClick={(e) => {
        e.stopPropagation()
        onPrev()
      }} aria-label="Anterior">
        ‹
      </button>

      <button className="lightbox-nav lightbox-next" onClick={(e) => {
        e.stopPropagation()
        onNext()
      }} aria-label="Próximo">
        ›
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-image-container">
          <img 
            src={artwork.image} 
            alt={artwork.title}
            className="lightbox-image"
          />
        </div>

        <div className="lightbox-info">
          <h2 className="lightbox-title">{artwork.title}</h2>
          <div className="lightbox-details">
            <p><strong>Ano:</strong> {artwork.year}</p>
            <p><strong>Técnica:</strong> {artwork.technique}</p>
            <p><strong>Dimensões:</strong> {artwork.dimensions}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lightbox
