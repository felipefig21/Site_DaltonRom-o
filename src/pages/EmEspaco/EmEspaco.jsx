import { useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import WhatsAppButton from '../../components/WhatsAppButton/WhatsAppButton'
import exemplo29 from '../../data/imagens-noespaco/exemplo-29.jpg'
import exemplo30 from '../../data/imagens-noespaco/exemplo30.jpg'
import exemplo31 from '../../data/imagens-noespaco/exemplo31.jpg'
import exemplo32 from '../../data/imagens-noespaco/exemplo32.jpg'
import exemplo33 from '../../data/imagens-noespaco/exemplo33.jpg'
import exemplo35 from '../../data/imagens-noespaco/exemplo35.jpg'
import exemplo36 from '../../data/imagens-noespaco/exemplo36.jpg'
import exemplo38 from '../../data/imagens-noespaco/exemplo38.jpg'
import exemplo42 from '../../data/imagens-noespaco/exemplo42.jpg'
import './EmEspaco.css'

function EmEspaco() {
  const sectionRefs = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const espacos = [
    {
      id: 1,
      image: exemplo29,
      titulo: 'Estúdio Corporativo Sofisticado',
      descricao: 'A gravura transforma o escritório em um espaço de inspiração e criatividade. A composição gráfica dialoga com a arquitetura contemporânea, trazendo profundidade e personalidade ao ambiente profissional, estimulando conversas e reflexões.'
    },
    {
      id: 2,
      image: exemplo30,
      titulo: 'Hall ou corredor',
      descricao: 'Primeira impressão que permanece: a obra recebe visitantes com presença marcante. A composição gráfica transforma o espaço de passagem em galeria, estabelecendo o tom sofisticado que permeia toda a residência.'
    },
    {
      id: 3,
      image: exemplo31,
      titulo: 'Sala de Estar',
      descricao: 'A gravura adiciona sofisticação e caráter ao ambiente doméstico. Posicionada estrategicamente, a obra estabelece um diálogo harmonioso com os elementos decorativos, criando uma atmosfera única que reflete a personalidade dos moradores.'
    },
    {
      id: 4,
      image: exemplo32,
      titulo: 'Quartos',
      descricao: 'Em espaços privados, a obra estabelece conexão emocional e intimidade. A composição permite múltiplas leituras, revelando novos detalhes e interpretações conforme a luz natural e o estado de espírito de quem contempla, criando um refúgio pessoal.'
    },
    {
      id: 5,
      image: exemplo33,
      titulo: 'Living Contemporâneo',
      descricao: 'Em ambientes amplos, a gravura ancora o olhar e define zonas visuais. A escala adequada e o posicionamento estratégico criam equilíbrio, enquanto as camadas da obra adicionam complexidade visual ao espaço arquitetônico.'
    },
    {
      id: 6,
      image: exemplo35,
      titulo: 'Residência com curadoria estética',
      descricao: 'A obra integra uma coleção artística pensada com atenção aos detalhes. A composição dialoga harmoniosamente com mobiliário de design e elementos decorativos selecionados, criando uma narrativa visual coesa que reflete refinamento e personalidade.'
    },
    {
      id: 7,
      image: exemplo36,
      titulo: 'Salas sociais',
      descricao: 'No coração do lar, a obra se torna protagonista dos momentos de convivência. A composição estabelece diálogo com os elementos do ambiente, criando um ponto focal que estimula conversas e enriquece o espaço de reunião com sofisticação e caráter.'
    },
    {
      id: 8,
      image: exemplo38,
      titulo: 'Ambiente Criativo e inspirador',
      descricao: 'No espaço de trabalho ou estúdio, a obra estimula a criatividade e a produtividade. A estética gráfica contemporânea inspira novas ideias, enquanto a composição equilibrada mantém a atmosfera propícia à concentração e ao fluxo criativo.'
    },
    {
      id: 9,
      image: exemplo42,
      titulo: 'Sala de Jantar Contemporânea',
      descricao: 'Companhia silenciosa para momentos de convívio, a gravura enriquece o ambiente social. A obra funciona como catalisador de conversas, adicionando camadas de significado e sofisticação aos encontros ao redor da mesa.'
    }
  ]

  return (
    <div className="em-espaco-page">
      <Header />

      <main className="em-espaco-content">
        <div className="em-espaco-hero">
          <h1 className="em-espaco-title">EM ESPAÇO</h1>
          <p className="em-espaco-subtitle">Veja como as gravuras transformam diferentes ambientes</p>
        </div>

        <div className="espacos-container">
          {espacos.map((espaco, index) => (
            <section
              key={espaco.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`espaco-item ${index % 2 === 0 ? 'espaco-left' : 'espaco-right'}`}
            >
              <div className="espaco-image-wrapper">
                <img
                  src={espaco.image}
                  alt={espaco.titulo}
                  className="espaco-image"
                />
              </div>

              <div className="espaco-content">
                <div className="espaco-line"></div>
                <h2 className="espaco-titulo">{espaco.titulo}</h2>
                <p className="espaco-descricao">{espaco.descricao}</p>
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default EmEspaco
