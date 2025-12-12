import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/Gallery'
import AboutPage from './pages/AboutPage/AboutPage'
import EmEspaco from './pages/EmEspaco/EmEspaco'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/em-espaco" element={<EmEspaco />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App