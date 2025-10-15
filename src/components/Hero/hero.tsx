import styles from './hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Bienvenido a mi estudio de tatuajes</h1>
                <p>Transformando la piel en arte</p>
                {/* <a href="#contacto" className={styles.button}>
                    Contáctanos
                </a> */}
            </div>
        </div>
    );
};

export default Hero;