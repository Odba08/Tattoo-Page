import styles from './hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>ENDIR ALVILLAR</h1>
                <p>Bienvenido a mi estudio de tatuajes</p>
            </div>
        </div>
    );
};

export default Hero;