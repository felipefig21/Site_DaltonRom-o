import './Hero.css'
import heroimg from './grav150.png'

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroimg}
        alt="Arte em destaque"
        className="hero-image"
        onError={(e) => {
          console.log('Erro ao carregar imagem')
          e.target.style.backgroundColor = '#333'
        }}
      />
    </section>
  )
}

export default Hero