import { useState } from 'react'
import './BentoGrid.css'
import { imagensBentoGrid } from '../../data/artworks'
import ExpandedImage from '../ExpandedImage/ExpandedImage'

function BentoGrid() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  // Usar as imagens específicas do BentoGrid
  const displayArtworks = imagensBentoGrid

  const handleOpen = (index) => {
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setSelectedIndex(null)
  }

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % displayArtworks.length)
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + displayArtworks.length) % displayArtworks.length)
  }

  return (
    <section className="bento-section">
      <div className="bento-grid animate-on-scroll scale-in delay-200">
        {displayArtworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className={`bento-item bento-item-${index + 1} animate-on-scroll flip-in delay-${(index * 100 + 100)}`}
            onClick={() => handleOpen(index)}
          >
            <div className="bento-item-image-wrapper">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="bento-item-image"
              />
              <div className="bento-item-overlay">
                <div className="bento-item-content">
                  <h3 className="bento-item-title">{artwork.title}</h3>
                  <p className="bento-item-year">{artwork.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <ExpandedImage
          artwork={displayArtworks[selectedIndex]}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  )
}

export default BentoGrid
