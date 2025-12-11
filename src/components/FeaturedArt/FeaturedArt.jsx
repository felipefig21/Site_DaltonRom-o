import './FeaturedArt.css'
import imagem146 from './imagem-destaque.png'
function FeaturedArt() {
  return (
    <section className="featured-art">
      <img 
        src= {imagem146}
        alt="Arte em destaque" 
        className="featured-art-image"
      />
    </section>
  )
}

export default FeaturedArt