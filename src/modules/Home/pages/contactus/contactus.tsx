import React from 'react'
import './contactus.scss'

import { FaWhatsapp } from 'react-icons/fa'

const ContactUs: React.FC = () => {
  return (
    <div className="contact-us">
 
      <div className="prevfooter">
        <h1>¡Reservá tu lugar! <span>Contactanos</span></h1>
        
        {/* 2. Añade el ícono de WhatsApp dentro del enlace */}
        <a href="https://wa.me/584149693493">
          Reservar
          <FaWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default ContactUs;