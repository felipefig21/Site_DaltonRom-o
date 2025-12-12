import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import './AboutPage.css'
import aboutImage from '../../components/AboutSection/artista-imagem.jpeg'
import rostonew from './rostonew.png'

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      
      <main className="about-page-content">
        <div className="about-page-container">
          <h1 className="about-page-title">SOBRE DALTON</h1>
          
          <div className="about-page-section">
            <img 
              src={rostonew} 
              alt="Dalton" 
              className="about-page-image"
            />
            
            <div className="about-page-text">
              
              <p>
                <p>Dalton Romão é um artista cuja pesquisa se
                concentra na colagem expandida e na memória
                gráfica. Após anos atuando na criação visual e na
                direção de arte, passou a revisitar referências que
                marcaram sua formação-a publicidade
                americana dos anos 1950, o design editorial
                mid-century e a cultura impressa - desenvolvendo
                uma linguagem própria baseada na recombinação
                de fragmentos visuais. </p>

                <p>Entre 2013 e 2020, experimentou sobreposições,
                ruídos, rasgos e texturas, reorganizando arquivos,
                fotografias e materiais de época em novas relações.
                A partir de 2020, dedica-se integralmente a essa
                prática, articulando vestígios gráficos, elementos
                tipográficos e superfícies estratificadas para
                explorar tensões entre passado e presente.
                </p>
                <p>
                Romão já participou de mais de 20 exposições,
                entre individuais e coletivas, apresentando sua obra
                em diferentes contextos e espaços culturais. Sua
                prática propõe uma poética em que fragmento,
                instabilidade e excesso se tornam linguagem.
                </p>
                <p>
                Cria imagens que funcionam como pequenas
                arqueologias do olhar, nas quais memória e
                desordem constroem as tensões visuais do mundo
                contemporâneo.
                </p>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default AboutPage