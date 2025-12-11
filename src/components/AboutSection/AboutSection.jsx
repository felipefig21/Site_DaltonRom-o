import './AboutSection.css'
import artistaimg from './artista-imagem.jpeg'
function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper animate-on-scroll fade-in-left">
          <img
            src={artistaimg}
            alt="Dalton - Artista"
            className="about-image"
          />
        </div>

        <div className="about-text">
          <h2 className="about-title animate-on-scroll fade-in-right">ARTIST STATEMENT</h2>
          <p className="about-description animate-on-scroll fade-in-right delay-100">
            Eu trabalho com imagens porque sempre me interessei por aquilo que elas carregam: memórias, marcas do tempo, restos de outras histórias. Uso a colagem expandida para juntar fotos, pedaços de impressos, sujeiras gráficas, tipografias, detalhes que passam despercebidos.
          </p>
          <p className="about-description animate-on-scroll fade-in-right delay-200">
            Quando coloco tudo isso junto, começam a aparecer ruídos, rasgos, sobreposições e é nesse atrito que o trabalho acontece. É onde passado e presente se encontram.
          </p>
          <p className="about-description animate-on-scroll fade-in-right delay-300">
            Minhas referências vêm muito da cultura impressa do século XX, do design mid-century e da publicidade clássica. São imagens que me formaram e que, de alguma forma, continuam voltando.
          </p>
          <p className="about-description animate-on-scroll fade-in-right delay-400">
            Gosto de reorganizá-las, de criar novas relações entre esses fragmentos e ver como eles contam outras histórias quando mudam de lugar.
          </p>
          <p className="about-description animate-on-scroll fade-in-right delay-400">
            O que me move é a memória gráfica — aquilo que persiste, que desgasta, que sobra. A partir desses restos e vestígios, tento criar superfícies que funcionem como uma espécie de mapa do olhar: lugares onde a memória vira material de trabalho e onde o ruído, o erro e a instabilidade são parte natural da linguagem.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection