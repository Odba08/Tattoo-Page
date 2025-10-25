import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineHome, AiOutlinePicture, AiOutlineShopping, AiOutlineContacts, AiOutlineUser } from 'react-icons/ai';
import { navbarTranslations } from '../../in18/navbar.i18n'; 
import './navbar.scss';

// Función para inicializar el idioma desde el storage
const getInitialLanguage = (): 'es' | 'en' => {
    const storedLang = localStorage.getItem('appLanguage');
    return (storedLang === 'en') ? 'en' : 'es';
};

const socialButtons = [
    { href: 'https://www.instagram.com/endiralvillar/', icon: <FaInstagram />, className: 'instagram' },
    { href: 'https://tiktok.com/@endiralvillar', icon: <FaTiktok />, className: 'tiktok' },
    { href: 'https://wa.me/584149693493', icon: <FaWhatsapp />, className: 'whatsapp' },
];

function NavbarComponent() {
    const [expanded, setExpanded] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // 1. Inicializa el idioma con el valor del storage
    const [language, setLanguage] = useState<'es' | 'en'>(getInitialLanguage); 

    const t = navbarTranslations[language];

    const navItems = [
        { to: '/', label: t.navHome, icon: <AiOutlineHome /> },
        { to: '/tattoos', label: t.navTattoos, icon: <AiOutlinePicture /> },
        { to: '/about', label: t.navAbout, icon: <AiOutlineUser /> },
        { to: '/productos', label: t.navProducts, icon: <AiOutlineShopping /> },
        { to: '/contacto', label: t.navContact, icon: <AiOutlineContacts /> },
    ];

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY >= 20);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleLanguageChange = (newLang: 'es' | 'en') => {
        
        // 1. Establece el idioma localmente
        setLanguage(newLang);

        // 2. Guarda el idioma en localStorage
        localStorage.setItem('appLanguage', newLang);
        
        // 3. Simula el evento 'storage' para que los componentes en la misma pestaña reaccionen
        window.dispatchEvent(new Event('storage')); 
        
        setExpanded(false);
    };

    return (
        <Navbar 
            expanded={expanded} 
            fixed="top" 
            expand="lg" 
            className={`custom-navbar ${scrolled ? 'sticky' : ''}`}
            variant="dark"
        >
            <Container fluid>
                <Navbar.Toggle 
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {navItems.map(item => (
                            <Nav.Link 
                                key={item.to}
                                as={Link} 
                                to={item.to} 
                                onClick={() => setExpanded(false)}
                                className="nav-link-custom"
                            >
                                <span className="icon">{item.icon}</span> 
                                <span className="label">{item.label}</span>
                            </Nav.Link>
                        ))}
                        
                        {/* SELECTOR DE IDIOMA */}
                        <Nav.Item className="language-switcher-wrapper">
                            <button 
                                onClick={() => handleLanguageChange('es')} 
                                className={`lang-btn ${language === 'es' ? 'active' : ''}`}
                                aria-label={t.langEs}
                            >
                                ES
                            </button>
                            <span className="lang-separator">|</span>
                            <button 
                                onClick={() => handleLanguageChange('en')} 
                                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                                aria-label={t.langEn}
                            >
                                EN
                            </button>
                        </Nav.Item>

                        <div className="social-buttons-wrapper">
                            <a
                                href={socialButtons[0].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-btn ${socialButtons[0].className}`}
                                aria-label={t.ariaInstagram}
                            >
                                {socialButtons[0].icon}
                            </a>
                            <a
                                href={socialButtons[1].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-btn ${socialButtons[1].className}`}
                                aria-label={t.ariaTiktok}
                            >
                                {socialButtons[1].icon}
                            </a>
                            <a
                                href={socialButtons[2].href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`social-btn ${socialButtons[2].className}`}
                                aria-label={t.ariaWhatsapp}
                            >
                                {socialButtons[2].icon}
                            </a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;