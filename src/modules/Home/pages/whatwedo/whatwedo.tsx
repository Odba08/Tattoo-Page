import icono from '../../../../assets/icons/services-01.png';
import icono1 from '../../../../assets/icons/services-02.png';
import icono2 from '../../../../assets/icons/services-03.png';
import icono3 from '../../../../assets/icons/services-04.png';
import './whatwedo.scss'


const WhatWeDo: React.FC = () => {

    return (

        <section>
            <div className="whatwedo">
                
                {/* CAMBIO: Título en singular */}
                <h2>¿Qué Hago?</h2>
                
                <div 
                    className="secondary-red-divider" 
                ></div>

                <div className="wwdsection">
                    <div className="contentinfo">
                        <img src={icono1} alt="" />
                        <h3 data-aos="fade-up">Diseños Realistas</h3>
                        <p data-aos="fade-up" data-aos-delay="200">
                            {/* CAMBIO: "Capturamos" -> "Capturo" y "Nuestra" -> "Mi" */}
                            Capturo la esencia de la realidad en tu piel. Mi especialidad es el realismo, transformando tus ideas, fotos o retratos en obras de arte con un nivel de detalle y sombreado excepcionales.
                        </p>
                    </div>

                    <div className="contentinfo">
                        <img src={icono2} alt="" />
                        <h3 data-aos="fade-up">Atención Personalizada</h3>
                        <p data-aos="fade-up" data-aos-delay="200">
                            {/* CAMBIO: "nuestra" -> "mi" y "Nos dedicamos" -> "Me dedico" */}
                            Tu visión es mi prioridad. Me dedico a escuchar tu idea, asesorarte y co-crear un diseño que sea 100% único. Cada tatuaje es una colaboración para asegurar que el resultado final te represente.
                        </p>
                    </div>
                    <div className="contentinfo">
                        <img src={icono3} alt="" />
                        <h3 data-aos="fade-up">Retoques</h3>
                        <p data-aos="fade-up" data-aos-delay="200">
                            {/* CAMBIO: "Revitalizamos" -> "Revitalizo" */}
                            ¿Tu tatuaje ha perdido intensidad con los años? Revitalizo piezas antiguas, restaurando colores y redefiniendo líneas para que tu arte vuelva a lucir nítido y vibrante.
                        </p>
                    </div>
                    <div className="contentinfo">
                        <img src={icono} alt="" />
                        <h3 data-aos="fade-up">Covers</h3>
                        <p data-aos="fade-up" data-aos-delay="200">
                            {/* CAMBIO: "Somos" -> "Soy" y "Diseñamos" -> "Diseño" */}
                            ¿Arrepentido de un tatuaje antiguo? Soy experto en 'cover-ups'. Diseño una nueva obra de arte que cubra e integre de forma inteligente la pieza anterior, dándole una segunda vida a tu piel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
        
}

export default WhatWeDo;