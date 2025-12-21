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
      descricao: 'A arte transforma o ambiente corporativo em um espaço inspirador e profissional. A presença da gravura eleva a atmosfera, transmitindo credibilidade e bom gosto aos clientes, enquanto estimula a criatividade e produtividade da equipe, criando um escritório que reflete excelência e sofisticação.'
    },
    {
      id: 2,
      image: exemplo30,
      titulo: 'Hall ou corredor',
      descricao: 'A obra transforma espaços de passagem em galerias de arte. O hall ganha protagonismo e personalidade, oferecendo aos visitantes uma experiência visual marcante desde a entrada. A gravura valoriza cada metro quadrado, criando uma primeira impressão memorável e acolhedora.'
    },
    {
      id: 3,
      image: exemplo31,
      titulo: 'Sala de Estar',
      descricao: 'A gravura aquece e sofistica o coração da casa, criando um ambiente acolhedor para momentos em família. A presença da arte traz equilíbrio visual e personalidade ao espaço de convívio, tornando a sala de estar um refúgio de bem-estar onde cada detalhe convida ao relaxamento e à conexão.'
    },
    {
      id: 4,
      image: exemplo32,
      titulo: 'Quartos',
      descricao: 'No espaço íntimo do quarto, a arte cria uma atmosfera de tranquilidade e reflexão. A gravura transforma o ambiente em um santuário pessoal, trazendo profundidade emocional e estética que favorece o descanso e a introspecção, elevando a qualidade do ambiente de repouso.'
    },
    {
      id: 5,
      image: exemplo33,
      titulo: 'Living Contemporâneo',
      descricao: 'Em ambientes modernos e amplos, a gravura ancora visualmente o espaço e potencializa a arquitetura contemporânea. A obra adiciona caráter e sofisticação, criando pontos de interesse que dialogam perfeitamente com linhas clean e minimalistas, equilibrando forma e função com elegância.'
    },
    {
      id: 6,
      image: exemplo35,
      titulo: 'Residência com curadoria estética',
      descricao: 'A arte integra-se harmoniosamente a projetos de decoração refinados, elevando a curadoria visual da residência. A gravura complementa o design cuidadosamente pensado, adicionando camadas de significado cultural e estético que transformam a casa em uma verdadeira galeria residencial, onde cada ambiente conta uma história.'
    },
    {
      id: 7,
      image: exemplo36,
      titulo: 'Salas sociais',
      descricao: 'A gravura energiza ambientes de convívio e celebração, criando um pano de fundo sofisticado para momentos compartilhados. A presença artística estimula conversas, inspira conexões e adiciona dinamismo ao espaço social, transformando reuniões ordinárias em experiências memoráveis e culturalmente ricas.'
    },
    {
      id: 8,
      image: exemplo38,
      titulo: 'Ambiente Criativo e inspirador',
      descricao: 'Em home offices e ateliês, a arte atua como catalisadora da criatividade e inovação. A gravura cria um ambiente estimulante que favorece o pensamento criativo e a concentração, transformando o espaço de trabalho em um lugar onde ideias florescem e a produtividade encontra inspiração constante.'
    },
    {
      id: 9,
      image: exemplo42,
      titulo: 'Cafeteria boutique',
      descricao: 'A presença artística transforma o espaço comercial em um destino cultural e acolhedor. A gravura cria uma identidade única para a cafeteria, atraindo clientes que valorizam experiências refinadas, prolongando sua permanência e criando uma atmosfera que convida ao retorno e à recomendação.'
    }
  ]

  return (
    <div className="em-espaco-page">
      <Header />

      <main className="em-espaco-content">
        <div className="em-espaco-hero">
          <h1 className="em-espaco-title">EM ESPAÇO</h1>
          <p className="em-espaco-subtitle"></p>
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
