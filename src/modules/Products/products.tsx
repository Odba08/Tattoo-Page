import React, { useState, useEffect } from 'react';
import './products.scss';
// Asegúrate de corregir la ruta de la carpeta de in18 a i18n
import { productTranslations } from '../../in18/products.i18n'; 

import cardImage1 from '../../assets/Productos/product1.png';
import cardImage2 from '../../assets/Productos/product2.png';
import cardImage3 from '../../assets/Productos/product3.png';
import cardImage4 from '../../assets/Productos/product4.png';

import creamImage from '../../assets/Productos/product1-noimage.png';
import soapImage from '../../assets/Productos/product2-noimage.png';
import painImage from '../../assets/Productos/product3-noimage.png';
import patchImage from '../../assets/Productos/product4-noimage.png';


const Products: React.FC = () => {
    // 1. Inicializa el idioma leyendo desde localStorage
    const getInitialLanguage = (): 'es' | 'en' => {
        const storedLang = localStorage.getItem('appLanguage');
        return (storedLang === 'en') ? 'en' : 'es';
    };

    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = productTranslations[language];

    // 2. Crea un efecto para escuchar cambios en localStorage desde el Navbar
    useEffect(() => {
        const handleStorageChange = () => {
            const newLang = getInitialLanguage();
            // Solo actualiza si el idioma del storage es diferente al estado actual
            if (newLang !== language) {
                setLanguage(newLang);
            }
        };

        // Escucha el evento 'storage' cuando se cambia el localStorage
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [language]); // Dependencia en 'language' para re-evaluar la escucha

    return (
        <section className="product-section">
            <div className="product-hero">
                <h1>{t.heroTitle}</h1>
            </div>

            <div className="container">
                <div className="product-intro">
                    <p className="pre-title" data-aos="fade-up">{t.preTitle}</p>
                    <h2 data-aos="fade-up" data-aos-delay="100">{t.mainTitle}</h2>
                    <p className="description" data-aos="fade-up" data-aos-delay="200">
                        {t.description}
                    </p>
                </div>

                <div className="product-grid">
                    <div className="flip-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={cardImage1} alt={t.card1Title} />
                            </div>
                            <div className="flip-card-back">
                                <h3>{t.card1Title}</h3>
                                <p>{t.card1Desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={cardImage2} alt={t.card2Title} />
                            </div>
                            <div className="flip-card-back">
                                <h3>{t.card2Title}</h3>
                                <p>{t.card2Desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={cardImage3} alt={t.card3Title} />
                            </div>
                            <div className="flip-card-back">
                                <h3>{t.card3Title}</h3>
                                <p>{t.card3Desc}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card" data-aos="fade-up" data-aos-delay="600">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={cardImage4} alt={t.card4Title} />
                            </div>
                            <div className="flip-card-back">
                                <h3>{t.card4Title}</h3>
                                <p>{t.card4Desc}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-details">
                    <div className="product-item">
                        <h3 data-aos="fade-up">{t.detail1Title}</h3>
                        <div className="red-divider" data-aos="fade-up" data-aos-delay="100"></div>
                        <div className="product-item-grid">
                            <div className="product-info-left" data-aos="fade-right">
                                <ul>
                                    <li>{t.detail1Li1}</li>
                                    <li>{t.detail1Li2}</li>
                                    <li>{t.detail1Li3}</li>
                                </ul>
                            </div>
                            <div className="product-image" data-aos="zoom-in" data-aos-delay="200">
                                <img src={creamImage} alt={t.detail1Title} />
                            </div>
                            <div className="product-info-right" data-aos="fade-left">
                                <ul>
                                    <li>{t.detail1Li4}</li>
                                    <li>{t.detail1Li5}</li>
                                    <li>{t.detail1Li6}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <h3 data-aos="fade-up">{t.detail2Title}</h3>
                        <div className="red-divider" data-aos="fade-up" data-aos-delay="100"></div>
                        <div className="product-item-grid">
                            <div className="product-info-left" data-aos="fade-right">
                                <ul>
                                    <li>{t.detail2Li1}</li>
                                    <li>{t.detail2Li2}</li>
                                    <li>{t.detail2Li3}</li>
                                </ul>
                            </div>
                            <div className="product-image" data-aos="zoom-in" data-aos-delay="200">
                                <img src={soapImage} alt={t.detail2Title} />
                            </div>
                            <div className="product-info-right" data-aos="fade-left">
                                <ul>
                                    <li>{t.detail2Li4}</li>
                                    <li>{t.detail2Li5}</li>
                                    <li>{t.detail2Li6}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <h3 data-aos="fade-up">{t.detail3Title}</h3>
                        <div className="red-divider" data-aos="fade-up" data-aos-delay="100"></div>
                        <div className="product-item-grid">
                            <div className="product-info-left" data-aos="fade-right">
                                <ul>
                                    <li>{t.detail3Li1}</li>
                                    <li>{t.detail3Li2}</li>
                                    <li>{t.detail3Li3}</li>
                                </ul>
                            </div>
                            <div className="product-image" data-aos="zoom-in" data-aos-delay="200">
                                <img src={painImage} alt={t.detail3Title} />
                            </div>
                            <div className="product-info-right" data-aos="fade-left">
                                <ul>
                                    <li>{t.detail3Li4}</li>
                                    <li>{t.detail3Li5}</li>
                                    <li>{t.detail3Li6}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <h3 data-aos="fade-up">{t.detail4Title}</h3>
                        <div className="red-divider" data-aos="fade-up" data-aos-delay="100"></div>
                        <div className="product-item-grid">
                            <div className="product-info-left" data-aos="fade-right">
                                <ul>
                                    <li>{t.detail4Li1}</li>
                                    <li>{t.detail4Li2}</li>
                                    <li>{t.detail4Li3}</li>
                                </ul>
                            </div>
                            <div className="product-image" data-aos="zoom-in" data-aos-delay="200">
                                <img src={patchImage} alt={t.detail4Title} />
                            </div>
                            <div className="product-info-right" data-aos="fade-left">
                                <ul>
                                    <li>{t.detail4Li4}</li>
                                    <li>{t.detail4Li5}</li>
                                    <li>{t.detail4Li6}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;