import './Hero.css'
import imagem from './grav150.png'
function Hero() {
  return (
    <section className="hero">
      <img src={imagem} alt="" className='hero-image'/>
    </section>
  )
}

export default Hero