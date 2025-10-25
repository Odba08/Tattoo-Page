import React, { useState, useEffect } from 'react';
import icono from '../../../../assets/icons/services-01.png';
import icono1 from '../../../../assets/icons/services-02.png';
import icono2 from '../../../../assets/icons/services-03.png';
import icono3 from '../../../../assets/icons/services-04.png';
import './whatwedo.scss'
import { whatWeDoTranslations } from '../../../../in18/whatwedo.i18n';


// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

const WhatWeDo: React.FC = () => {
    // 1. Manejo del estado y traducción
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = whatWeDoTranslations[language];

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

        <section>
            <div className="whatwedo">
                
                <h2>{t.title}</h2>
                
                <div 
                    className="secondary-red-divider" 
                ></div>

                <div className="wwdsection">
                    
                    {/* Diseño Realista */}
                    <div className="contentinfo">
                        <img src={icono1} alt="" />
                        <h3 data-aos="fade-up">{t.service1Title}</h3>
                        <p data-aos="fade-up" data-aos-delay="200">
                            {t.service1Description}
                        </p>
                    </div>

                    {/* Atención Personalizada */}
                    <div className="contentinfo">
                        <img src={icono2} alt="" />
                        <h3 data-aos="fade-up">{t.service2Title}</h3>
                        <p data-aos="fade-up" data-aos-delay="200">
                            {t.service2Description}
                        </p>
                    </div>
                    
                    {/* Retoques */}
                    <div className="contentinfo">
                        <img src={icono3} alt="" />
                        <h3 data-aos="fade-up">{t.service3Title}</h3>
                        <p data-aos="fade-up" data-aos-delay="200">
                            {t.service3Description}
                        </p>
                    </div>

                    {/* Covers */}
                    <div className="contentinfo">
                        <img src={icono} alt="" />
                        <h3 data-aos="fade-up">{t.service4Title}</h3>
                        <p data-aos="fade-up" data-aos-delay="200">
                            {t.service4Description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo;