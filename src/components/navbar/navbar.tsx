import  { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaInstagram, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';
import { AiOutlineHome, AiOutlinePicture, AiOutlineShopping, AiOutlineContacts } from 'react-icons/ai';
import './navbar.scss';

const navItems = [
  { to: '/', label: 'Inicio', icon: <AiOutlineHome /> },
  { to: '/tattoos', label: 'Tattoos', icon: <AiOutlinePicture /> },
  { to: '/productos', label: 'Productos', icon: <AiOutlineShopping /> },
  { to: '/contacto', label: 'Contacto', icon: <AiOutlineContacts /> },
];

const socialButtons = [
  { href: 'https://instagram.com/tu-usuario', icon: <FaInstagram />, label: 'Instagram', className: 'instagram' },
  { href: 'https://youtube.com/tu-canal', icon: <FaYoutube />, label: 'YouTube', className: 'youtube' },
  { href: 'https://tiktok.com/@tu-usuario', icon: <FaTiktok />, label: 'TikTok', className: 'tiktok' },
  { href: 'https://twitter.com/tu-usuario', icon: <FaTwitter />, label: 'Twitter', className: 'twitter' },
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