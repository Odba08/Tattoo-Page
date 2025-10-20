import styles from './hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>ENDIR ALVILLAR</h1>
                <p>Arte en la piel que cuenta tu historia.</p>
            </div>
        </div>
    );
};

export default Hero;