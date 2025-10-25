import React, { useState, useEffect } from 'react'
import './contactus.scss'
import { FaWhatsapp } from 'react-icons/fa'
import { contactUsTranslations } from '../../../../in18/contactus.i18n';

// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

const ContactUs: React.FC = () => {
    // 1. Manejo del estado y traducción
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = contactUsTranslations[language];

    // 2. Efecto para escuchar cambios de idioma en el localStorage
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


    return (
        <div className="contact-us">
            <div className="prevfooter">
                <h1>{t.titlePart1} <span>{t.titlePart2}</span></h1>
                
                <a href="https://wa.me/584149693493">
                    {t.buttonText}
                    <FaWhatsapp />
                </a>
            </div>
        </div>
    )
}

export default ContactUs;