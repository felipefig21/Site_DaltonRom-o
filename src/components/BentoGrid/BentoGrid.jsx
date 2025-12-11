import './BentoGrid.css'
import { artworks } from '../../data/artworks'

function BentoGrid() {
  // Pegar as primeiras 6 obras para o bento grid
  const displayArtworks = artworks.slice(0, 6)

  return (
    <section className="bento-section">
      

      <div className="bento-grid animate-on-scroll scale-in delay-200">
        {displayArtworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className={`bento-item bento-item-${index + 1} animate-on-scroll flip-in delay-${(index * 100 + 100)}`}
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
    </section>
  )
}

export default BentoGrid
