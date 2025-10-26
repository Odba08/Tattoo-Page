import React, { useEffect, useRef, useState } from 'react';
// 1. IMPORTAR Link DESDE react-router-dom
import { Link } from 'react-router-dom'; 
import './course.scss'; 
import comingSoonVideo from '../../assets/video/video2.mp4';
import promoImage from '../../assets/aprende/aprende.png'; 
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'; 
import { curseTranslations } from '../../in18/curse.i18n'; 

const getInitialLanguage = (): 'es' | 'en' => {
  const storedLang = localStorage.getItem('appLanguage');
  return storedLang === 'en' ? 'en' : 'es';
};

const Course: React.FC = () => { 
  const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage());
  const [isEnded, setIsEnded] = useState(false);
  const [isMuted, setIsMuted] = useState(false); 
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.muted = isMuted;

    const handleStorageChange = () => {
        const newLang = getInitialLanguage();
        if (newLang !== language) setLanguage(newLang);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [isMuted, language]);

  const handleCanPlay = async () => {
    const video = videoRef.current;
    if (video) {
      try {
        video.muted = false; 
        await video.play(); 
        setIsMuted(false); 
      } catch (err) {
        console.warn('Autoplay con sonido bloqueado, reproduciendo en mute.');
        video.muted = true;
        setIsMuted(true);
        video.play(); 
      }
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      const newMuteState = !isMuted;
      video.muted = newMuteState;
      setIsMuted(newMuteState);
    }
  };

  const t = curseTranslations[language];

  return (
    <section className="courses-coming-soon-section">
      <video
        ref={videoRef}
        className={`background-video ${isEnded ? 'fade-out' : ''}`}
        src={comingSoonVideo}
        autoPlay 
        playsInline
        onCanPlay={handleCanPlay} 
        onEnded={() => setIsEnded(true)}
      />

      <div className={`final-background ${isEnded ? 'show' : ''}`}>
        <img src={promoImage} alt="Tattoo Masterclass" />
      </div>

      <div className="content-box-bottom">
        <h1 className="main-title">{t.mainTitle}</h1>
        <div className="red-divider"></div>
        <h2 className="coming-soon-text">{t.comingSoon}</h2>
        <p className="subtitle">
          {t.subtitleLine1}
          <br />
          {t.subtitleLine2}
        </p>

        <Link to="/contacto" className="waitlist-button">
          {t.buttonText}
        </Link>
        
      </div>

      <button
        className="mute-toggle-btn"
        onClick={toggleMute}
        aria-label={isMuted ? t.unmuteAria : t.muteAria}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </section>
  );
};

export default Course; 