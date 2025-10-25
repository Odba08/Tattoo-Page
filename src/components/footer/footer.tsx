import  { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import {
    FaInstagram,
    FaTiktok,
    FaWhatsapp,
} from "react-icons/fa"; 
import './footer.scss'
import { footerTranslations } from '../../in18/footer.i18n'; // Importar traducciones

// Función para inicializar el idioma desde localStorage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

function Footer() {
    // 1. Manejo del estado y traducción
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage);
    const t = footerTranslations[language];

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

    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className="footer">
            <Row>
                {/* Columna 1: Copyright */}
                <Col md="4" className="footer-copywright">
                    <h3>© {year} @ENDIRALVILLAR</h3>
                    <p>{t.copyrightText}</p>
                </Col>
                
                {/* Columna 2: Enlaces de Navegación */}
                <Col md="4" className="footer-links">
                    <ul className="footer-nav-list">
                        <li>
                            <Link to="/">{t.linkHome}</Link>
                        </li>
                        <li>
                            <Link to="/tattoos">{t.linkTattoos}</Link>
                        </li>
                        <li>
                            <Link to="/contacto">{t.linkContact}</Link>
                        </li>
                    </ul>
                </Col>

                {/* Columna 3: Redes Sociales */}
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        {/* Instagram */}
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/endiralvillar/"
                                style={{ color: "white" }}
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </li>
                        {/* TikTok */}
                        <li className="social-icons">
                            <a
                                href="https://tiktok.com/@endiralvillar"
                                style={{ color: "white" }}
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                            >
                                <FaTiktok />
                            </a>
                        </li>
                        {/* WhatsApp */}
                        <li className="social-icons">
                            <a
                                href="https://wa.me/584149693493"
                                style={{ color: "white" }}
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;