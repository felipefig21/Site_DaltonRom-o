import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './AboutPage.css'
import aboutImage from '../../components/AboutSection/artista-imagem.jpeg'
import rostonew from './rostonew.png'

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      
      <main className="about-page-content">
        <div className="about-page-container">
          <h1 className="about-page-title">Sobre Dalton</h1>
          
          <div className="about-page-section">
            <img 
              src={rostonew} 
              alt="Dalton" 
              className="about-page-image"
            />
            
            <div className="about-page-text">
              <h2>Biografia</h2>
              <p>
                Dalton nasceu em [cidade], onde desde cedo demonstrou interesse 
                pelas artes visuais. Formado em [formação], dedica-se há [anos] 
                anos à criação de obras que exploram [tema principal].
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default AboutPage