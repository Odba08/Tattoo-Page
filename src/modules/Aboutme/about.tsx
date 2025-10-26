import React, { useState, useEffect } from 'react';
import './about.scss';
import endir from '../../assets/Endir/endir3.png';
import endir2 from '../../assets/endir2.png';
import endir1 from '../../assets/Endir/endir1.png';
import endir4 from '../../assets/Endir/endir4.png';
import endir5 from '../../assets/Endir/endir5.png';
import tatuaje1 from '../../assets/tattos/IMG_3330.jpg';
import tatuaje2 from '../../assets/tattos/Black-gray/image2.png';
import tatuaje3 from '../../assets/tattos/image3.png';
import tatuaje4 from '../../assets/tattos/image4.png';
import tatuaje5 from '../../assets/tattos/image5.png';
import tatuaje6 from '../../assets/tattos/image6.png';
import { aboutTranslations } from '../../in18/about.i18n'; // Importar traducciones

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// --- FUNCIONES DE CÁLCULO ---

const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

// Calcula años de experiencia (Asumo que empezó en 2012)
const calculateYearsTattooing = (startYear: number) => {
    const today = new Date();
    return today.getFullYear() - startYear;
};

// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

const About: React.FC = () => {
    // --- LÓGICA DE TRADUCCIÓN AISLADA ---
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = aboutTranslations[language];

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
    // --- FIN LÓGICA DE TRADUCCIÓN AISLADA ---

    const birthDate = '1990-08-29';
    const age = calculateAge(birthDate);
    const yearsTattooing = calculateYearsTattooing(2012); // Asumo 2012 como inicio

    const artistImages = [
        endir,
        endir1,
        endir4,
        endir5,
        endir2
    ];
    
    // Función de ayuda para reemplazar placeholders en la biografía
    const renderParagraph = (key: keyof typeof t) => {
        let text = t[key];
        text = text.replace('{age}', age.toString());
        text = text.replace('{yearsTattooing}', yearsTattooing.toString());
        return <p>{text}</p>;
    };


    return (
        <section className="about-modern-magazine">
            <div className="magazine-spread">
                <article className="bio-content">
                    <header className="bio-header">
                        <h1 className="bio-headline">ENDIR ALVILLAR</h1>
                        <h2 className="bio-subheadline">
                            {t.location}
                            <span>@endiralvillar</span>
                        </h2>
                    </header>

                    <div className="bio-artist-photo">
                        <div className="slider-container">
                            <Swiper
                                modules={[Autoplay, EffectFade]}
                                effect="slide"
                                fadeEffect={{ crossFade: true }}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                allowTouchMove={false}
                                className="artist-photo-slider"
                            >
                                {artistImages.map((imgSrc, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={imgSrc} alt={`${t.imageAlt} ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className="bio-text-columns">
                        {renderParagraph('p1')}
                        {renderParagraph('p2')}
                        {renderParagraph('p3')}
                        {renderParagraph('p4')}
                        {renderParagraph('p5')}
                        {renderParagraph('p6')}
                    </div>

                    <footer className="bio-footer-quote">
                        “{t.quote}”
                    </footer>
                </article>

                <aside className="bio-gallery">
                    <div className="gallery-image">
                        <img src={tatuaje1} alt={t.imageAlt} />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje2} alt={t.imageAlt} />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje3} alt={t.imageAlt} />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje4} alt={t.imageAlt} />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje5} alt={t.imageAlt} />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje6} alt={t.imageAlt} />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default About;