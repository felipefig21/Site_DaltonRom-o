import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/AboutSection/AboutSection'
import FeaturedArt from '../../components/FeaturedArt/FeaturedArt'
import BentoGrid from '../../components/BentoGrid/BentoGrid'
import ArtDetail from '../../components/ArtDetail/ArtDetail'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import './Home.css'

function Home() {
  useScrollAnimation()

  return (
    <div className="home">
      <Header />
      <Hero />
      <AboutSection />
      <FeaturedArt />
      <BentoGrid />
      <ArtDetail
        image="/path/to/artwork.jpg"
        title="Título da Obra"
        artist="Dalton"
        year="2024"
        technique="Técnica Mista sobre Tela"
        description="Esta obra representa uma exploração profunda dos contrastes entre luz e sombra, vida e morte, esperança e desespero. Através de camadas complexas de tinta e textura, a peça convida o observador a uma jornada introspectiva, questionando a natureza efêmera da existência humana e a beleza encontrada nos momentos de transição."
      />
      <Carousel />
      <Footer />
    </div>
  )
}

export default Home