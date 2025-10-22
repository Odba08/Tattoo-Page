import React from 'react';
import './about.scss';
import endir from '../../assets/endir3.jpg';
import endir2 from '../../assets/endir2.png';
import endir1 from '../../assets/Endir/endir1.png';
import endir4 from '../../assets/Endir/endir4.png';
import endir5 from '../../assets/Endir/endir5.png';
import tatuaje1 from '../../assets/tattos/image1.png';
import tatuaje2 from '../../assets/tattos/image2.png';
import tatuaje3 from '../../assets/tattos/image3.png';
import tatuaje4 from '../../assets/tattos/image4.png';
import tatuaje5 from '../../assets/tattos/image5.png';
import tatuaje6 from '../../assets/tattos/image6.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

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

const About: React.FC = () => {
    const birthDate = '1990-08-29';
    const age = calculateAge(birthDate);

    const artistImages = [
        endir,
        endir1,
        endir4,
        endir5,
        endir2
    ];

    return (
        <section className="about-modern-magazine">
            <div className="magazine-spread">
                <article className="bio-content">
                    <header className="bio-header">
                        <h1 className="bio-headline">ENDIR ALVILLAR</h1>
                        <h2 className="bio-subheadline">
                            MARACAIBO, VENEZUELA
                            <span>@endirtattoo</span>
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
                                        <img src={imgSrc} alt={`Endir Alvillar - Foto ${index + 1}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                    <div className="bio-text-columns">
                        <p>
                            Mi nombre es Endir Alvillar tengo {age} años, soy tatuador Venezolano
                            de la ciudad de Maracaibo, tengo 11 años tatuando contando desde
                            la primera vez que toque una máquina para tatuar. Todo empezó en
                            el 2012 estudiando Diseño Gráfico en la universidad, fui a un
                            estudio para que me hicieran mi primero tatuaje...
                        </p>
                        <p>
                            Al comprarla y tenerla en mis manos en ese instante supe que me iba
                            a dedicar a esto toda mi vida, fue un amor a primera vista. A pesar
                            de que hay altos y bajos...
                        </p>
                        <p>
                            En el 2015 empecé a tatuar en un estudio de la ciudad y era el mismo
                            studio donde fui hacerme mi primer tatuaje y donde empezó la magia.
                        </p>
                        <p>
                            Durante mi carrera me dediqué a desarrollar la técnica de líneas
                            perfectas y me especialicé en estilos como fine line, geométrico
                            y neo tradicional. Incursione un tiempo en el estilo watercolor...
                        </p>
                        <p>
                            Es el estilo que me dedico actualmente, en mis diseños incluyo toda
                            la magia posible del realismo y a la hora de tatuar me gusta
                            saturar y contrastar mis diseños para un resultado más duradero.
                        </p>
                        <p>
                            En el 2023 aperture mi studio en la ciudad de Maracaibo que llevar
                            por nombre Paradise Tattoo Studio, es donde atiendo actualmente
                            mis citas y tenemos tatuadores residentes...
                        </p>
                    </div>

                    <footer className="bio-footer-quote">
                        “El secreto está en los detalles.”
                    </footer>
                </article>

                <aside className="bio-gallery">
                    <div className="gallery-image">
                        <img src={tatuaje1} alt="Tatuaje Realista" />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje2} alt="Tatuaje Realista" />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje3} alt="Tatuaje Realista" />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje4} alt="Tatuaje Realista" />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje5} alt="Tatuaje Realista" />
                    </div>
                    <div className="gallery-image">
                        <img src={tatuaje6} alt="Tatuaje Realista" />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default About;