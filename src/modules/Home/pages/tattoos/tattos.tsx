
import React from 'react';
import './tattos.scss'
import image from '../../../../assets/tattos/image1.png'
import image2 from '../../../../assets/tattos/image2.png'
import image3 from '../../../../assets/tattos/image3.png'
import image4 from '../../../../assets/tattos/image4.png'
import image5 from '../../../../assets/tattos/image5.png'
import image6 from '../../../../assets/tattos/image6.png'
import video from '../../../../assets/video/video1.mp4'

const Tattos: React.FC = () => {
    return (

        <section className='portfolio-section'>
            <div className="container">

            <div className="text-container">
                <h2> Algunos de nuestros tatuajes</h2>
                <div
                    className="third-red-divider"

                ></div>
            </div>


        <div className="portfolio-layout">

                <div className="portfolio-grid">
                    <img src={image} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                </div>

                <div className="video-container">
                <video 
                    src={video} 
                    autoPlay
                    loop 
                    muted 
                    playsInline>
                </video>
                
                </div>
                </div>
            </div>

        </section>
    )
}

export default Tattos;