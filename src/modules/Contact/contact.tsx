import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss';
import { SlLocationPin } from 'react-icons/sl';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import video from '../../assets/video/video3.mp4'
import { contactTranslations } from '../../in18/contact.i18n';

// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

const Contact: React.FC = () => {
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = contactTranslations[language];

    useEffect(() => {
        const handleStorageChange = () => {
            const newLang = getInitialLanguage();
            if (newLang !== language) {
                setLanguage(newLang);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [language]);

    type FormStatus = 'idle' | 'sending' | 'success' | 'error';
    const form = useRef<HTMLFormElement>(null);
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');

    const sendEmail = ( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        setFormStatus('sending');

        emailjs.sendForm(
            'service_b31zjvf', 
            'template_o3syxwq', 
            form.current,       
            'b-Gk2wwhBulK53XFV'   
        ).then((result) => {
            console.log(result.text);
            setFormStatus('success');
            form.current?.reset();    
        }, (error) => {
            console.log(error.text);
            setFormStatus('error');  
        });
    };

const statusMessages = {
        sending: 'Enviando...',
        success: '¡Mensaje enviado con éxito!',
        error: 'Hubo un error. Intenta más tarde.',
    };

    return (
        <section className='contact-section'>
            <div className="container">
                <h1>{t.pageTitle}</h1>

                <div className="contact-grid-top">
                    <div className="contact-info">
                        
                        <h2>{t.titleFindMe}</h2>
                        
                        <div 
                            className="red-divider" 
                            data-aos="fade-left" 
                            data-aos-delay="300"
                        ></div>
                        <p>
                            {t.paragraphFindMe}
                        </p>
                        <ul className="contact-links-list">
                            <li><a href="#" target="_blank" rel="noopener noreferrer"><SlLocationPin /> {t.location}</a></li>
                            
                            <li><a href="https://wa.me/584124726621" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
                            <li><a href="https://www.instagram.com/endiralvillar/" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
                            <li><a href="https://www.tiktok.com/@endiralvillar" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
                        </ul>
                    </div>
                    <div className="map-container">
                        
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.4580778955014!2d-71.62266102429732!3d10.699107360613823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e899952a31f6751%3A0xcaad33165e03c9ff!2sParadise%20Tattoo%20Studio!5e0!3m2!1ses!2sus!4v1760919325508!5m2!1ses!2sus" 
                            width="600" 
                            height="450" 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title={t.titleFindMe}
                        ></iframe>
                    </div>
                </div>

                <div className="contact-grid-bottom">
                    <div className="form-container">
                        <h2>{t.titleForm}</h2>
                        
                        {/* 9. Conectamos el formulario con la referencia y la función de envío */}
                        <form ref={form} onSubmit={sendEmail}>
                            <label htmlFor="name">{t.labelName}</label>
                            {/* ¡MUY IMPORTANTE! 
                              El 'name' DEBE coincidir con la variable en tu plantilla de EmailJS 
                            */}
                            <input type="text" id="name" name="name" required />
                            
                            <label htmlFor="email">{t.labelEmail}</label>
                            <input type="email" id="email" name="email" required />
                            
                            <label htmlFor="message">{t.labelMessage}</label>
                            <textarea id="message" name="message" rows={6} required></textarea>
                            
                            {/* 10. El botón ahora se deshabilita y cambia de texto al enviar */}
                            <button 
                                type="submit" 
                                className="btn-submit" 
                                disabled={formStatus === 'sending'}
                            >
                                {formStatus === 'sending' ? statusMessages.sending : t.buttonSubmit}
                            </button>

                            {/* 11. Mostramos los mensajes de éxito o error */}
                            {formStatus === 'success' && (
                                <p className="form-status-success">{statusMessages.success}</p>
                            )}
                            {formStatus === 'error' && (
                                <p className="form-status-error">{statusMessages.error}</p>
                            )}
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
