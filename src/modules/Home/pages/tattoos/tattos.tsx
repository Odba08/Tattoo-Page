import React, { useState, useEffect } from 'react';
import './tattos.scss'
import image from '../../../../assets/tattos/image1.png'
import image2 from '../../../../assets/tattos/image2.png'
import image3 from '../../../../assets/tattos/image3.png'
import image4 from '../../../../assets/tattos/image4.png'
import image5 from '../../../../assets/tattos/image5.png'
import image6 from '../../../../assets/tattos/image6.png'
import video from '../../../../assets/video/video1.mp4'
import { tattosTranslations } from '../../../../in18/tattos.i18n';

// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

const Tattos: React.FC = () => {
    // 1. Manejo del estado y traducción
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = tattosTranslations[language];

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

        <section className='portfolio-section'>
            <div className="container">

            <div className="text-container">
                <h2>{t.title}</h2>
                <div
                    className="third-red-divider"

                ></div>
            </div>


            <div className="portfolio-layout">

                <div className="portfolio-grid">
                    <img src={image} alt={t.title} />
                    <img src={image2} alt={t.title} />
                    <img src={image3} alt={t.title} />
                    <img src={image4} alt={t.title} />
                    <img src={image5} alt={t.title} />
                    <img src={image6} alt={t.title} />
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
}

export default Tattos;