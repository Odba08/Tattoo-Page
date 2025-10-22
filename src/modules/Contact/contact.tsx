import React from 'react';
import './contact.scss';
import { SlLocationPin } from 'react-icons/sl';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import video from '../../assets/video/video3.mp4'

const Contact: React.FC = () => {
    return (
        <section className='contact-section'>
            <div className="container">
                <h1>Contacto</h1>

                <div className="contact-grid-top">
                    <div className="contact-info">
                        
                        {/* --- CAMBIO A SINGULAR --- */}
                        <h2>Cómo Encontrarme</h2>
                        
                        <div 
                            className="red-divider" 
                            data-aos="fade-left" 
                            data-aos-delay="300"
                        ></div>
                        <p>
                            {/* --- CAMBIO A SINGULAR --- */}
                            Para consultas o presupuestos podés completar el formulario o escribirme por Whatsapp, Facebook Messenger o Instagram DM.
                            ¡Pasa a visitarme! Estoy de Lunes a Sábados de 11 a 20 hs.
                        </p>
                        <ul className="contact-links-list">
                            {/* AÑADE AQUÍ TU LINK DE GOOGLE MAPS */}
                            <li><a href="#" target="_blank" rel="noopener noreferrer"><SlLocationPin /> Maracaibo Venezuela</a></li>
                            
                            {/* --- LINKS ACTUALIZADOS --- */}
                            <li><a href="https://wa.me/584149693493" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
                            <li><a href="https://www.instagram.com/endiralvillar/" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
                            <li><a href="https://www.tiktok.com/@endiralvillar" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
                        </ul>
                    </div>
                    <div className="map-container">
                        
                        {/* AÑADE AQUÍ EL 'src' DE TU GOOGLE MAPS EMBED */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.4580778955014!2d-71.62266102429732!3d10.699107360613823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899952a31f6751%3A0xcaad33165e03c9ff!2sParadise%20Tattoo%20Studio!5e0!3m2!1ses!2sus!4v1760919325508!5m2!1ses!2sus" 
                            width="600" 
                            height="450" 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="contact-grid-bottom">
                    <div className="form-container">
                        <h2>Por cualquier consulta o para reservar tu turno, llená el formulario</h2>
                        <form>
                            <label htmlFor="name">Tu nombre</label>
                            <input type="text" id="name" name="name" required />
                            
                            <label htmlFor="email">Tu email</label>
                            <input type="email" id="email" name="email" required />
                            
                            <label htmlFor="message">Tu mensaje</label>
                            <textarea id="message" name="message" rows={6} required></textarea>
                            
                            <button type="submit" className="btn-submit">Enviar</button>
                        </form>
                    </div>
                   <div className="video-container">
                        <video 
                            src={video} 
                            autoPlay
                            loop 
                            muted 
                            playsInline>
                        </video>
                        
                   </div>
                </div>

            </div>
        </section>
    )
};

export default Contact;