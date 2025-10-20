import React from 'react';
import './home.scss';
import Hero from '../../components/Hero/hero.tsx';
import image from '../../assets/endir2.png';
import WhatWeDo from './pages/whatwedo/whatwedo.tsx';
import Tattos from './pages/tattoos/tattos.tsx';
import ContactUs from './pages/contactus/contactus.tsx';


const Home: React.FC = () => {
    return (
        <main>
            <section className='home-section'>  
            <Hero />
            <section className="content">
                <div className="imagesection">
                    <img 
                        src={image} 
                        alt="Estudio de tatuajes" 
                        data-aos="fade-down" 
                        data-aos-delay="400"
                    />
                </div>
                <div className="textcontent">
                    <h2 data-aos="fade-left">Sobre Nosotros</h2>
                    <div 
                        className="red-divider" 
                        data-aos="fade-left" 
                        data-aos-delay="300"
                    ></div>
                    <p data-aos="fade-left" data-aos-delay="400">
                        En nuestro estudio de tatuajes, combinamos arte y pasión para crear diseños únicos que cuentan tu historia. Nuestro equipo de artistas talentosos está dedicado a ofrecerte una experiencia segura y personalizada.
                    </p>
                    
                    <h2 data-aos="fade-left" data-aos-delay="500">Servicios</h2>
                    <ul>
                        <li data-aos="fade-left" data-aos-delay="600">Tatuajes personalizados</li>
                        <li data-aos="fade-left" data-aos-delay="700">Diseños a medida</li>
                        <li data-aos="fade-left" data-aos-delay="800">Consultas de arte corporal</li>
                    </ul>
                    
                    <h2 data-aos="fade-left" data-aos-delay="900">Contacto</h2>
                    <p data-aos="fade-left" data-aos-delay="1000">
                        ¿Listo para tu próximo tatuaje? Contáctanos para agendar una cita o para más información sobre nuestros servicios.
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