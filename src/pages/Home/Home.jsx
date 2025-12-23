import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/AboutSection/AboutSection'
import FeaturedArt from '../../components/FeaturedArt/FeaturedArt'
import BentoGrid from '../../components/BentoGrid/BentoGrid'
import ArtDetail from '../../components/ArtDetail/ArtDetail'
import Carousel from '../../components/Carousel/Carousel'
import Footer from '../../components/Footer/Footer'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
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
      <ArtDetail />
      <Carousel />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Home