import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Lightbox from '../../components/Lightbox/Lightbox'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import { artworks } from '../../data/artworks'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import './Gallery.css'

function Gallery() {
  const [selectedArtwork, setSelectedArtwork] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Scroll to top ao montar o componente
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Ativar animações de scroll
  useScrollAnimation()

  // Abrir lightbox
  const openLightbox = (artwork, index) => {
    setSelectedArtwork(artwork)
    setCurrentIndex(index)
  }

  // Fechar lightbox
  const closeLightbox = () => {
    setSelectedArtwork(null)
  }

  // Navegar para próxima obra
  const nextArtwork = () => {
    const nextIndex = (currentIndex + 1) % artworks.length
    setCurrentIndex(nextIndex)
    setSelectedArtwork(artworks[nextIndex])
  }

  // Navegar para obra anterior
  const prevArtwork = () => {
    const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length
    setCurrentIndex(prevIndex)
    setSelectedArtwork(artworks[prevIndex])
  }

  return (
    <div className="gallery-page">
      <Header />
      
      <main className="gallery-content">
        <div className="gallery-header">
          <h1 className="gallery-page-title">As gravuras de Dalton Romão são produzidas em edições limitadas de 25 exemplares, 
            datadas e assinadas. Impressas em Giclée sobre papéis artísticos importados, preservam 
            a densidade cromática, o gesto e a textura das obras originais.</h1>
            <div className='gallery-subtitle'>
              <h2 >VER MAIS OBRAS E PROCESSOS EM @DALTONROMAO</h2> 

            </div>


          
        </div>

        {/* Grid de obras */}
        <div className="gallery-grid">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`gallery-item animate-on-scroll flip-in delay-${Math.min((index % 6) * 100 + 100, 500)}`}
              onClick={() => openLightbox(artwork, index)}
            >
              <div className="gallery-item-image-wrapper">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="gallery-item-image"
                />
                <div className="gallery-item-overlay">
                  <span className="view-details">Ver detalhes</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Lightbox */}
      {selectedArtwork && (
        <Lightbox
          artwork={selectedArtwork}
          onClose={closeLightbox}
          onNext={nextArtwork}
          onPrev={prevArtwork}
        />
      )}
    </div>
  )
}

export default Gallery
