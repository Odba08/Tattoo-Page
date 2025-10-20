import icono from '../../../../assets/icons/services-01.png';
import icono1 from '../../../../assets/icons/services-02.png';
import icono2 from '../../../../assets/icons/services-03.png';
import icono3 from '../../../../assets/icons/services-04.png';
import './whatwedo.scss'


const WhatWeDo: React.FC = () => {

    return (

          <section>
              <div className="whatwedo">
                  <h2>¿Qué Hacemos?</h2>
                   <div 
                      className="secondary-red-divider" 
    
                  ></div>

                  <div className="wwdsection">
                      <div className="contentinfo">
                          <img src={icono1} alt="" />
                          <h3 data-aos="fade-up">Diseños Realistas</h3>
                          <p data-aos="fade-up" data-aos-delay="200">
                            Capturamos la esencia de la realidad en tu piel. Nuestra especialidad es el realismo, transformando tus ideas, fotos o retratos en obras de arte con un nivel de detalle y sombreado excepcionales.
                          </p>
                      </div>

                      <div className="contentinfo">
                          <img src={icono2} alt="" />
                          <h3 data-aos="fade-up">Atencion Personalizada</h3>
                          <p data-aos="fade-up" data-aos-delay="200">
                            Tu visión es nuestra prioridad. Nos dedicamos a escuchar tu idea, asesorarte y co-crear un diseño que sea 100% único. Cada tatuaje es una colaboración para asegurar que el resultado final te represente.
                          </p>
                      </div>
                      <div className="contentinfo">
                          <img src={icono3} alt="" />
                          <h3 data-aos="fade-up">Retoques</h3>
                          <p data-aos="fade-up" data-aos-delay="200">
                            ¿Tu tatuaje ha perdido intensidad con los años? Revitalizamos piezas antiguas, restaurando colores y redefiniendo líneas para que tu arte vuelva a lucir nítido y vibrante.
                          </p>
                      </div>
                      <div className="contentinfo">
                          <img src={icono} alt="" />
                          <h3 data-aos="fade-up">Covers</h3>
                          <p data-aos="fade-up" data-aos-delay="200">
                            ¿Arrepentido de un tatuaje antiguo? Somos expertos en 'cover-ups'. Diseñamos una nueva obra de arte que cubra e integre de forma inteligente la pieza anterior, dándole una segunda vida a tu piel.
                          </p>
                      </div>
                  </div>
               </div>
            </section>
    )
        
}

export default WhatWeDo;