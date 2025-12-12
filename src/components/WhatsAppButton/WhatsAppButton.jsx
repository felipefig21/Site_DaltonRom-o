import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

function WhatsAppButton() {
  const phoneNumber = '5511999999999' // Substitua pelo número real
  const message = 'Olá! Gostaria de saber mais sobre as gravuras.'

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <button
      className="whatsapp-button"
      onClick={handleClick}
      aria-label="Entrar em contato via WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Fale conosco</span>
    </button>
  )
}

export default WhatsAppButton
