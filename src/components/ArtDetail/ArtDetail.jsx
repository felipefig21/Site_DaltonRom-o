import './ArtDetail.css'
import imageh from './grav39.png'
function ArtDetail({ image, title, description, artist, year, technique }) {
  return (
    <section className="art-detail">
      <div className="art-detail-container">
        <div className="art-detail-text animate-on-scroll fade-in-left">
          <h2 className="art-detail-title">A PLANIFICAÇÃO DA DESORDEM  </h2>
          <div className="art-detail-meta">
            {artist && <p className="art-detail-artist">{artist}</p>}
            {year && <p className="art-detail-year">{year}</p>}
            {technique && <p className="art-detail-technique">{technique}</p>}
          </div>
          <p className="art-detail-description">
            A obra de Dalton Romão se insere na tradição moderna e contemporânea da desordem como método, atuando num território onde caos, ruptura e assimetria são estruturantes, em contraste com a longa busca ocidental pela ordem e simetria. Sua poética percebe que toda ordem humana é fragmentada e imprecisa, contendo a semente inevitável da desordem.
          </p>
          <p className='art-detail-description'>É nesse horizonte conceitual que Romão desenvolve uma estética que dialoga com movimentos que romperam com a rigidez geométrica da arte, do Dadaísmo a experimentos como os da Black Mountain School e Expressionismo Abstrato, incorporando acaso, rasgo e fragmento. Robert Rauschenberg foi decisivo ao transformar o excesso em método, integrando restos cotidianos, e Andy Warhol deslocou a arte para a cultura de massa, revelando que repetição e ruído eram matéria estética.</p>
          <p className='art-detail-description'>Na virada para o universo gráfico contemporâneo, Neville Brody e David Carson levaram esse pensamento ao limite, dissolvendo fronteiras e fazendo do erro e do caos uma linguagem. É nesse contexto expandido — entre memória visual, cultura pop e experimentação gráfica — que Romão desenvolve uma linguagem de colagem expandida, reorganizando elementos visuais em superfícies estratificadas, funcionando suas obras como planificações da desordem onde o excesso é arquitetura, o ruído é informação e o acidente visual funda o sentido.</p>
          <p className='art-detail-description'>A lógica da sobreposição, do fragmento e da saturação faz emergir camadas voláteis que dialogam com a publicidade americana dos anos 1950 e com os resíduos visuais cotidianos (tipografias efêmeras, rasgos, marcas do tempo) sobre superfícies instáveis. Há, em sua obra, um equilíbrio tenso entre acidez e lirismo, entre rigor compositivo e colapso da imagem; Romão opera no limiar entre lembrança e erosão, impressão e pixel, transformando caos em método visual, instabilidade em composição e ruído em expressão do presente.</p>
          <p className='art-detail-description'>Dalton Romão trabalha com o tempo saturado em que vivemos, onde o excesso informacional, a fragmentação e a sobreposição são a gramática do olhar. Sua obra reconhece que a desordem não é descontrole, mas linguagem, memória e presença, sendo a forma possível de traduzir a experiência estética de um mundo que já não cabe na simetria.</p>
        </div>
        <div className="art-detail-image-wrapper animate-on-scroll slide-rotate delay-300">
          <img
            src={imageh}
            alt={title}
            className="art-detail-image"
          />
        </div>
      </div>
    </section>
  )
}

export default ArtDetail
