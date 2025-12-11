// Base de dados das obras de arte
// Importar imagens da pasta gravuras
import grav11 from './gravuras/grav11.jpg'
import grav30 from './gravuras/grav30.jpg'
import grav31 from './gravuras/grav31.jpg'
import grav56 from './gravuras/grav56.jpg'
import grav57 from './gravuras/grav57.jpg'
import grav58 from './gravuras/grav58.jpg'
import grav86 from './gravuras/grav86.jpg'
import grav119 from './gravuras/grav119.jpg'
import grav146 from './gravuras/grav146.png'

export const artworks = [
  {
    id: 1,
    title: "Gravura 11",
    image: grav11,
    year: "2024",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "120x90cm",
    description: "Uma exploração das formas e cores encontradas nas paisagens urbanas modernas."
  },
  {
    id: 2,
    title: "Gravura 30",
    image: grav30,
    year: "2024",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "100x80cm",
    description: "Inspirada nos padrões orgânicos da natureza e suas cores vibrantes."
  },
  {
    id: 3,
    title: "Gravura 31",
    image: grav31,
    year: "2023",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "150x60x40cm",
    description: "Uma representação tridimensional das lembranças que nos moldam."
  },
  {
    id: 4,
    title: "Gravura 56",
    image: grav56,
    year: "2023",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "130x100cm",
    description: "Um estudo sobre a interação entre cores complementares e suas emoções."
  },
  {
    id: 5,
    title: "Gravura 57",
    image: grav57,
    year: "2023",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "110x110cm",
    description: "Explorando as formas puras e a expressão não figurativa."
  },
  {
    id: 6,
    title: "Gravura 58",
    image: grav58,
    year: "2022",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "180x80x60cm",
    description: "Capturando a energia do movimento em uma forma estática."
  },
  {
    id: 7,
    title: "Gravura 86",
    image: grav86,
    year: "2022",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "95x75cm",
    description: "Uma homenagem às texturas ricas e variadas encontradas na natureza."
  },
  {
    id: 8,
    title: "Gravura 119",
    image: grav119,
    year: "2024",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "100x70cm",
    description: "Explorando as possibilidades da arte na era digital."
  },
  {
    id: 9,
    title: "Gravura 146",
    image: grav146,
    year: "2023",
    category: "Gravura",
    technique: "Gravura",
    dimensions: "60x50cm",
    description: "Uma meditação visual sobre a calma e tranquilidade."
  }
]

// Função para obter categorias únicas
export const getCategories = () => {
  return [...new Set(artworks.map(artwork => artwork.category))].sort()
}

// Função para obter técnicas únicas
export const getTechniques = () => {
  return [...new Set(artworks.map(artwork => artwork.technique))].sort()
}

// Função para obter anos únicos
export const getYears = () => {
  return [...new Set(artworks.map(artwork => artwork.year))].sort().reverse()
}
