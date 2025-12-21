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
            Trabalho com imagem como experiência e não como superfície decorativa. Minha prática se desenvolve a partir da fricção entre memória gráfica, cultura visual de massa e o excesso imagético contemporâneo.
          </p>
          
          <p className="about-description animate-on-scroll fade-in-right delay-300">
           Fragmentos, falhas, ruídos e sobreposições são elementos estruturais do processo, não efeitos estéticos. O pop aparece como sintoma histórico: um território onde repetição, desgaste e reconhecimento operam simultaneamente.
          </p>
          <p className="about-description animate-on-scroll fade-in-right delay-400">
            Ao reconfigurar arquivos, imagens apropriadas e materiais gráficos, busco interromper o olhar automático e reinstalar presença. Meu interesse não está na imagem como consumo rápido, mas como campo de atenção — algo que exige tempo, corpo e permanência.
          </p>

        </div>
      </div>
    </section>
  )
}

export default AboutSection