import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Gallery from './pages/Gallery/Gallery'
import AboutPage from './pages/AboutPage/AboutPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App