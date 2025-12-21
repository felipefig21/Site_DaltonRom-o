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
                <p> Dalton Romão é artista visual cuja prática investiga a imagem como campo de experiência e tensão, a partir do atrito entre memória gráfica,
                    cultura de massa e o excesso visual contemporâneo. Seu trabalho se desenvolve na interseção entre história da imagem, linguagem publicitária 
                    e economia da atenção, tratando o repertório visual moderno como matéria sujeita a deslocamentos e reconfigurações contínuas. 
                </p>

                <p>Com trajetória ligada à criação visual e à direção de arte, Romão construiu um vocabulário próprio no qual fragmentação, sobreposição 
                    e ruído operam como procedimentos estruturais. Em sua prática, esses elementos não funcionam como estilo, mas como método crítico 
                    para lidar com a saturação da imagem e com a naturalização do consumo visual
                </p>
                <p>
                A imagem deixa de atuar como superfície ilustrativa e passa a operar como dispositivo de interrupção do olhar automático, 
                exigindo tempo, atenção e leitura prolongada. A linguagem da publicidade surge como operador central da pesquisa, não como comentário 
                irônico, mas como estrutura de circulação e produção de sentido.
                </p>
                <p>
                      As obras se organizam em núcleos de investigação continuada, construídos por repetição e variação controlada. 
                      Formalmente, os trabalhos se estruturam por camadas e interferências que tensionam a legibilidade sem anulá-la, sustentando-se 
                      como experiências visuais autônomas no contexto contemporâneo.
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