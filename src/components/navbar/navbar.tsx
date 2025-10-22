import  { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
// 1. IMPORTÉ EL NUEVO ICONO AQUÍ
import { AiOutlineHome, AiOutlinePicture, AiOutlineShopping, AiOutlineContacts, AiOutlineUser } from 'react-icons/ai';
import './navbar.scss';

const navItems = [
  { to: '/', label: 'Inicio', icon: <AiOutlineHome /> },
  { to: '/tattoos', label: 'Tattoos', icon: <AiOutlinePicture /> },
  // 2. CAMBIÉ EL ICONO AQUÍ
  { to: '/about', label: 'Sobre Mi', icon: <AiOutlineUser /> },
  { to: '/productos', label: 'Productos', icon: <AiOutlineShopping /> },
  { to: '/contacto', label: 'Contacto', icon: <AiOutlineContacts /> },
];

const socialButtons = [
  // 3. ACTUALICÉ TUS ENLACES
  { href: 'https://www.instagram.com/endiralvillar/', icon: <FaInstagram />, label: 'Instagram', className: 'instagram' },
  { href: 'https://tiktok.com/@endiralvillar', icon: <FaTiktok />, label: 'TikTok', className: 'tiktok' }, // <-- Recuerda cambiar este
  { href: 'https://wa.me/584149693493', icon: <FaWhatsapp />, label: 'WhatsApp', className: 'whatsapp' },
];

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

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
          onClick={() => setExpanded(expanded ? false : true)}
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
            
            <div className="social-buttons-wrapper">
              {socialButtons.map(btn => (
                <a
                  key={btn.href}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-btn ${btn.className}`}
                  aria-label={btn.label}
                >
                  {btn.icon}
                </a>
              ))}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;