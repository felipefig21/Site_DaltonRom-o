import { useState } from 'react'
import './Carousel.css'
import { artworks } from '../../data/artworks'
import Lightbox from '../Lightbox/Lightbox' // Importar o Lightbox

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setLightboxOpen] = useState(false)
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState(null)

  const itemsPerPage = 3

  const nextSlide = () => {
    if (currentIndex < artworks.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const openLightbox = (index) => {
    setSelectedArtworkIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedArtworkIndex(null)
  }

  const showNextArtwork = () => {
    setSelectedArtworkIndex((prevIndex) => (prevIndex + 1) % artworks.length)
  }

  const showPrevArtwork = () => {
    setSelectedArtworkIndex((prevIndex) => (prevIndex - 1 + artworks.length) % artworks.length)
  }

  return (
    <section className="carousel-section">
      <div className="carousel-container animate-on-scroll scale-in delay-200">
        <button
          className="carousel-btn prev"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ‹
        </button>

        <div className="carousel-track-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
            }}
          >
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="carousel-item"
                onClick={() => openLightbox(index)} // Abrir o lightbox ao clicar
              >
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="carousel-image"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="carousel-btn next"
          onClick={nextSlide}
          disabled={currentIndex >= artworks.length - itemsPerPage}
        >
          ›
        </button>
      </div>

      {isLightboxOpen && selectedArtworkIndex !== null && (
        <Lightbox
          artwork={artworks[selectedArtworkIndex]}
          onClose={closeLightbox}
          onNext={showNextArtwork}
          onPrev={showPrevArtwork}
        />
      )}
    </section>
  )
}

export default Carousel