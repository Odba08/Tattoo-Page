import React from 'react';
import './products.scss';
import cardImage1 from '../../assets/Productos/product1.png';
import cardImage2 from '../../assets/Productos/product2.png';
import cardImage3 from '../../assets/Productos/product3.png';
import cardImage4 from '../../assets/Productos/product4.png';

import creamImage from '../../assets/Productos/product1-noimage.png';
import soapImage from '../../assets/Productos/product2-noimage.png';
import painImage from '../../assets/Productos/product3-noimage.png';
import patchImage from '../../assets/Productos/product4-noimage.png';


const Products: React.FC = () => {
    return (
        <section className="product-section">
            <div className="product-hero">
                <h1>Tattoo Care</h1>
            </div>

            <div className="container">
                <div className="product-intro">
                    <p className="pre-title" data-aos="fade-up">Nuestra Selección</p>
                    <h2 data-aos="fade-up" data-aos-delay="100">Essential Tattoo Care Supplies</h2>
                    <p className="description" data-aos="fade-up" data-aos-delay="200">
                        Descubre nuestros productos especializados en el cuidado del tatuaje, diseñados para mantener tu tinta en su mejor versión.
                    </p>
                </div>

                <div className="product-grid">
                    <div className="flip-card" data-aos="fade-up" data-aos-delay="300">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={cardImage1} alt="Crema de Cacao" />
                            </div>
                            <div className="flip-card-back">
                                <h3>Crema de Cacao</h3>
                                <p>Hidratación profunda para realzar los colores y proteger la piel.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card" data-aos="fade-up" data-aos-delay="400">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={cardImage2} alt="Crema Hidratante" />
                            </div>
                            <div className="flip-card-back">
                                <h3>Crema Hidratante</h3>
                                <p>Cuidado diario para una regeneración rápida y sin irritación.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card" data-aos="fade-up" data-aos-delay="500">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={cardImage3} alt="Anestesia en Crema" />
                            </div>
                            <div className="flip-card-back">
                                <h3>Anestesia en Crema</h3>
                                <p>Reduce el dolor en zonas sensibles para sesiones más largas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flip-card" data-aos="fade-up" data-aos-delay="600">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={cardImage4} alt="Parche Anestésico" />
                            </div>
                            <div className="flip-card-back">
                                <h3>Parche Anestésico</h3>
                                <p>Protección y alivio del dolor para una curación perfecta.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-details">
                    <div className="product-item">
                        <h3 data-aos="fade-up">Crema de Cacao para Tatuajes</h3>
                        <div className="red-divider" data-aos="fade-up" data-aos-delay="100"></div>
                        <div className="product-item-grid">
                            <div className="product-info-left" data-aos="fade-right">
                                <ul>
                                    <li>Hidratación profunda para piel tatuada.</li>
                                    <li>Mantiene los colores vibrantes y definidos.</li>
                                    <li>Fórmula no grasa de rápida absorción.</li>
                                </ul>
                            </div>
                            <div className="product-image" data-aos="zoom-in" data-aos-delay="200">
                                <img src={creamImage} alt="Crema de Cacao para Tatuajes" />
                            </div>
                            <div className="product-info-right" data-aos="fade-left">
                                <ul>
                                    <li>Alivia la picazón y reduce la irritación.</li>
                                    <li>Protege contra agentes externos.</li>
                                    <li>Con ingredientes naturales para una recuperación óptima.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <h3 data-aos="fade-up">Crema Hidratante Intensiva</h3>
                        <div className="red-divider" data-aos="fade-up" data-aos-delay="100"></div>
                        <div className="product-item-grid">
                            <div className="product-info-left" data-aos="fade-right">
                                <ul>
                                    <li>Nutrición intensa para una piel suave y flexible.</li>
                                    <li>Ayuda a regenerar la barrera cutánea.</li>
                                    <li>Ideal para el cuidado diario post-tatuaje.</li>
                                </ul>
                            </div>
                            <div className="product-image" data-aos="zoom-in" data-aos-delay="200">
                                <img src={soapImage} alt="Crema Hidratante Intensiva" />
                            </div>
                            <div className="product-info-right" data-aos="fade-left">
                                <ul>
                                    <li>Previene la sequedad y descamación.</li>
                                    <li>Mejora la elasticidad y el confort de la piel.</li>
                                    <li>Sin parabenos ni fragancias artificiales.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <h3 data-aos="fade-up">Anestesia en Crema de Control de Dolor</h3>
                        <div className="red-divider" data-aos="fade-up" data-aos-delay="100"></div>
                        <div className="product-item-grid">
                            <div className="product-info-left" data-aos="fade-right">
                                <ul>
                                    <li>Reduce significativamente la sensación de dolor.</li>
                                    <li>Acción rápida y efecto prolongado.</li>
                                    <li>Permite sesiones de tatuaje más largas y cómodas.</li>
                                </ul>
                            </div>
                            <div className="product-image" data-aos="zoom-in" data-aos-delay="200">
                                <img src={painImage} alt="Anestesia en Crema de Control de Dolor" />
                            </div>
                            <div className="product-info-right" data-aos="fade-left">
                                <ul>
                                    <li>Aplicación tópica, fácil y segura.</li>
                                    <li>Ideal para zonas sensibles y trabajos detallados.</li>
                                    <li>Fórmula profesional de alta eficacia.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <h3 data-aos="fade-up">Parche Anestésico y Cicatrizante</h3>
                        <div className="red-divider" data-aos="fade-up" data-aos-delay="100"></div>
                        <div className="product-item-grid">
                            <div className="product-info-left" data-aos="fade-right">
                                <ul>
                                    <li>Alivio del dolor localizado y continuo.</li>
                                    <li>Protección óptima para la zona tatuada.</li>
                                    <li>Promueve una cicatrización más rápida y limpia.</li>
                                </ul>
                            </div>
                            <div className="product-image" data-aos="zoom-in" data-aos-delay="200">
                                <img src={patchImage} alt="Parche Anestésico y Cicatrizante" />
                            </div>
                            <div className="product-info-right" data-aos="fade-left">
                                <ul>
                                    <li>Flexible y cómodo, se adapta a cualquier parte del cuerpo.</li>
                                    <li>Impermeable y transpirable.</li>
                                    <li>Contiene agentes que reducen la inflamación.</li>
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