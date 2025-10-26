import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 

import 'swiper/swiper-bundle.css';
import './tattos.scss';

import { tattosPageTranslations } from '../../in18/tattosPage.i18n';

import slide1 from '../../assets/tattos/mangas/image1.png';
import slide2 from '../../assets/tattos/mangas/image2.png';
import slide3 from '../../assets/tattos/mangas/image3.png';
import slide4 from '../../assets/tattos/mangas/image4.png';
import slide5 from '../../assets/tattos/mangas/image5.png';
import slide6 from '../../assets/tattos/mangas/image6.png';
import slide8 from '../../assets/tattos/Black-gray/image1.png';

import animeVid from '../../assets/video/video1.mp4';
import anime1 from '../../assets/tattos/Color/image1.png';
import anime2 from '../../assets/tattos/Color/image2.png';
import anime3 from '../../assets/tattos/Color/image3.png';
import anime4 from '../../assets/tattos/Color/image4.png';
import anime5 from '../../assets/tattos/Color/image5.png';
import anime6 from '../../assets/tattos/Color/image6.png';

import sticker1 from '../../assets/tattos/Small/image1.png';
import sticker2 from '../../assets/tattos/Small/image2.png';
import sticker3 from '../../assets/tattos/Small/image3.png';
import sticker4 from '../../assets/tattos/Small/image4.png';

import realismVid from '../../assets/tattos/Black-gray/video1.mp4';
import realism1 from '../../assets/tattos/image1.png';
import realism2 from '../../assets/tattos/image2.png';
import realism3 from '../../assets/tattos/image3.png';
import realism4 from '../../assets/tattos/image4.png';
import realism5 from '../../assets/tattos/image5.png';
import realism6 from '../../assets/tattos/image6.png';

// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
  const storedLang = localStorage.getItem('appLanguage');
  return (storedLang === 'en') ? 'en' : 'es';
};

const Tattos: React.FC = () => {
  const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
  const t = tattosPageTranslations[language];

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
    <section className="tattoos-page-section">
      <div className="tattoos-hero">
        <h1>{t.pageTitle}</h1>
      </div>

      <div className="container">
        {/* MANGAS */}
        <div className="tattoo-category">
          <h2>{t.mainTitle}</h2>
          <div className="red-divider"></div>
          <p>{t.mainDescription}</p>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={4}
            className="tattoo-carousel"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
          >
            <SwiperSlide><img src={slide1} alt={`${t.altText} 1`} /></SwiperSlide>
            <SwiperSlide><img src={slide2} alt={`${t.altText} 2`} /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt={`${t.altText} 3`} /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt={`${t.altText} 4`} /></SwiperSlide>
            <SwiperSlide><img src={slide5} alt={`${t.altText} 5`} /></SwiperSlide>
            <SwiperSlide><img src={slide6} alt={`${t.altText} 6`} /></SwiperSlide>
            <SwiperSlide><img src={slide8} alt={`${t.altText} 7`} /></SwiperSlide>
          </Swiper>
        </div>

        {/* COLOR */}
        <div className="tattoo-category">
          <h2>{t.categoryColor}</h2>
          <div className="tattoo-grid mixed-layout-1">
            <div className="small-grid anime-grid">
              <img src={anime1} alt={`${t.categoryColor} ${t.altText} 1`} />
              <img src={anime2} alt={`${t.categoryColor} ${t.altText} 2`} />
              <img src={anime3} alt={`${t.categoryColor} ${t.altText} 3`} />
              <img src={anime4} alt={`${t.categoryColor} ${t.altText} 4`} />
              <img src={anime5} alt={`${t.categoryColor} ${t.altText} 5`} />
              <img src={anime6} alt={`${t.categoryColor} ${t.altText} 6`} />
            </div>
            <div className="large-media">
              <video src={animeVid} autoPlay loop muted playsInline title={t.categoryColor}></video>
            </div>
          </div>
        </div>

        {/* SMALL */}
        <div className="tattoo-category">
          <h2>{t.categorySmall}</h2>
          <div className="tattoo-grid sticker-layout">
            <img src={sticker1} alt={`${t.categorySmall} ${t.altText} 1`} />
            <img src={sticker2} alt={`${t.categorySmall} ${t.altText} 2`} />
            <img src={sticker3} alt={`${t.categorySmall} ${t.altText} 3`} />
            <img src={sticker4} alt={`${t.categorySmall} ${t.altText} 4`} />
          </div>
        </div>

        {/* REALISM */}
        <div className="tattoo-category">
          <h2>{t.categoryRealism}</h2>
          <div className="tattoo-grid mixed-layout-2">
            <div className="large-media">
              <video src={realismVid} autoPlay loop muted playsInline title={t.categoryRealism}></video>
            </div>
            <div className="small-grid realism-grid">
              <img src={realism1} alt={`${t.categoryRealism} ${t.altText} 1`} />
              <img src={realism2} alt={`${t.categoryRealism} ${t.altText} 2`} />
              <img src={realism3} alt={`${t.categoryRealism} ${t.altText} 3`} />
              <img src={realism4} alt={`${t.categoryRealism} ${t.altText} 4`} />
              <img src={realism5} alt={`${t.categoryRealism} ${t.altText} 5`} />
              <img src={realism6} alt={`${t.categoryRealism} ${t.altText} 6`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tattos;
