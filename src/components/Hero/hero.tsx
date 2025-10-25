import React, { useState, useEffect } from 'react';
import styles from './hero.module.scss';
import { heroTranslations } from '../../in18/hero.i18n';

// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

const Hero: React.FC = () => {
    // 1. Manejo del estado y traducción
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = heroTranslations[language];

    // 2. Efecto para escuchar cambios de idioma en el localStorage
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
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>ENDIR ALVILLAR</h1>
                <p>{t.tagline}</p>
            </div>
        </div>
    );
};

export default Hero;