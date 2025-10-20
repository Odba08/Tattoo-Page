import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // Remove Navigation

import 'swiper/swiper-bundle.css';
import './tattos.scss';

import slide1 from '../../assets/tattos/mangas/image1.png';
import slide2 from '../../assets/tattos/mangas/image2.png';
import slide3 from '../../assets/tattos/mangas/image3.png';
import slide4 from '../../assets/tattos/mangas/image4.png';
import slide5 from '../../assets/tattos/mangas/image5.png';
import slide6 from '../../assets/tattos/mangas/image6.png';

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


const Tattos: React.FC = () => {
  return (
    <section className="tattoos-page-section">
      <div className="tattoos-hero">
        <h1>Tattoos</h1>
      </div>

      <div className="container">
        <div className="tattoo-category">
          <h2>Tattoo Styles: Explore Your Options</h2>
          <div className="red-divider"></div>
          <p>Explora nuestra galería de estilos. Desde el realismo más detallado hasta el neotradicional vibrante, encuentra tu inspiración.</p>
          
          <Swiper
            modules={[Pagination]} // Only Pagination
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={4}
            className="tattoo-carousel"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide><img src={slide1} alt="Tattoo Style 1" /></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="Tattoo Style 2" /></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="Tattoo Style 3" /></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="Tattoo Style 4" /></SwiperSlide>
            <SwiperSlide><img src={slide5} alt="Tattoo Style 5" /></SwiperSlide>
            <SwiperSlide><img src={slide6} alt="Tattoo Style 6" /></SwiperSlide>
          </Swiper>
        </div>

        {/* ... (rest of your JSX code for Anime, Sticker, Realism remains the same) ... */}
        <div className="tattoo-category">
          <h2>Color</h2>
          <div className="tattoo-grid mixed-layout-1">
            <div className="small-grid anime-grid">
              <img src={anime1} alt="Anime Tattoo 1" />
              <img src={anime2} alt="Anime Tattoo 2" />
              <img src={anime3} alt="Anime Tattoo 3" />
              <img src={anime4} alt="Anime Tattoo 4" />
              <img src={anime5} alt="Anime Tattoo 5" />
              <img src={anime6} alt="Anime Tattoo 6" />
            </div>
            <div className="large-media">
              <video src={animeVid} autoPlay loop muted playsInline></video>
            </div>
          </div>
        </div>

        <div className="tattoo-category">
          <h2>Small</h2>
          <div className="tattoo-grid sticker-layout">
            <img src={sticker1} alt="Sticker Tattoo 1" />
            <img src={sticker2} alt="Sticker Tattoo 2" />
            <img src={sticker3} alt="Sticker Tattoo 3" />
            <img src={sticker4} alt="Sticker Tattoo 4" />
          </div>
        </div>

        <div className="tattoo-category">
          <h2>Realism - Black & Grey</h2>
          <div className="tattoo-grid mixed-layout-2">
            <div className="large-media">
              <video src={realismVid} autoPlay loop muted playsInline></video>
            </div>
            <div className="small-grid realism-grid">
              <img src={realism1} alt="Realism Tattoo 1" />
              <img src={realism2} alt="Realism Tattoo 2" />
              <img src={realism3} alt="Realism Tattoo 3" />
              <img src={realism4} alt="Realism Tattoo 4" />
              <img src={realism5} alt="Realism Tattoo 5" />
              <img src={realism6} alt="Realism Tattoo 6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tattos;