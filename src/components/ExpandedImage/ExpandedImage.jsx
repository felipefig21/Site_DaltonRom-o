import { useEffect } from 'react'
import './ExpandedImage.css'

function ExpandedImage({ artwork, onClose, onNext, onPrev }) {
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

  // Prevenir scroll do body quando imagem está aberta
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div className="expanded-image-overlay" onClick={onClose}>
      <button className="expanded-image-close" onClick={onClose} aria-label="Fechar">
        ✕
      </button>

      <button className="expanded-image-nav expanded-image-prev" onClick={(e) => {
        e.stopPropagation()
        onPrev()
      }} aria-label="Anterior">
        ‹
      </button>

      <button className="expanded-image-nav expanded-image-next" onClick={(e) => {
        e.stopPropagation()
        onNext()
      }} aria-label="Próximo">
        ›
      </button>

      <div className="expanded-image-container" onClick={(e) => e.stopPropagation()}>
        <img
          src={artwork.image}
          alt={artwork.title}
          className="expanded-image"
        />
      </div>
    </div>
  )
}

export default ExpandedImage
