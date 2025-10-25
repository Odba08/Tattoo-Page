import React, { useState, useEffect } from 'react';
import './home.scss';
import Hero from '../../components/Hero/hero.tsx';
import image from '../../assets/endir2.png';
import WhatWeDo from './pages/whatwedo/whatwedo.tsx';
import Tattos from './pages/tattoos/tattos.tsx';
import ContactUs from './pages/contactus/contactus.tsx';
import { homeTranslations } from '../../in18/home.i18n.ts';

// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

const Home: React.FC = () => {
    // 1. Manejo del estado y traducción
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = homeTranslations[language];

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
        <main>
            <section className='home-section'> 
            {/* Si Hero.tsx tiene texto, tendrás que traducirlo por separado */}
            <Hero />
            <section className="content">
                <div className="imagesection">
                    <img 
                        src={image} 
                        alt={t.imageAlt} 
                        data-aos="fade-down" 
                        data-aos-delay="400"
                    />
                </div>
                <div className="textcontent">
                    <h2 data-aos="fade-left">{t.titleAboutMe}</h2>
                    <div 
                        className="red-divider" 
                        data-aos="fade-left" 
                        data-aos-delay="300"
                    ></div>
                    <p data-aos="fade-left" data-aos-delay="400">
                        {t.paragraphAboutMe}
                    </p>
                    
                    <h2 data-aos="fade-left" data-aos-delay="500">{t.titleServices}</h2>
                    <ul>
                        <li data-aos="fade-left" data-aos-delay="600">{t.service1}</li>
                        <li data-aos="fade-left" data-aos-delay="700">{t.service2}</li>
                        <li data-aos="fade-left" data-aos-delay="800">{t.service3}</li>
                    </ul>
                    
                    <h2 data-aos="fade-left" data-aos-delay="900">{t.titleContact}</h2>
                    <p data-aos="fade-left" data-aos-delay="1000">
                        {t.paragraphContact}
                    </p>
                </div>
            </section>

            <WhatWeDo />      
            </section>
            <Tattos />
            <ContactUs />       
            
        </main>
    );
};

export default Home;