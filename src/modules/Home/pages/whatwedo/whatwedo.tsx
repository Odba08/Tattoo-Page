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
                            Thanks to their solid experience and artistic skills, the specialists of our salon will make any image on your body, achieving amazing results.
                            </p>
                        </div>

                        <div className="contentinfo">
                            <img src={icono2} alt="" />
                            <h3 data-aos="fade-up">Atencion Personalizada</h3>
                            <p data-aos="fade-up" data-aos-delay="200">
                            Our experts do piercing of various parts of the body. They will listen to your wishes, if necessary, will advise. The main thing is that they will do everything “quickly and painlessly”, at the highest level.
                            </p>
                        </div>
                        <div className="contentinfo">
                            <img src={icono3} alt="" />
                            <h3 data-aos="fade-up">Retoques</h3>
                            <p data-aos="fade-up" data-aos-delay="200">
                            Tired of a tattoo? Or has it ceased to reflect the image and style of life, or is it at odds with today&apos;s realities? In this situation, the ideal option is to correct the tattoo.
                            </p>
                        </div>
                        <div className="contentinfo">
                            <img src={icono} alt="" />
                            <h3 data-aos="fade-up">Covers</h3>
                            <p data-aos="fade-up" data-aos-delay="200">
                            For the removal, correction of tattoos and permanent makeup, so-called ND YAG lasers are used, with a wavelength of 1064 nm and a pulse frequency of 1 to 5 Hz.
                            </p>
                        </div>
                    </div>
               </div>
            </section>
    )
        
}

export default WhatWeDo;