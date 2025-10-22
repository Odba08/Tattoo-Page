import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Para los enlaces de navegación
import {
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa"; // Tus iconos
import './footer.scss'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        {/* Columna 1: Copyright */}
        <Col md="4" className="footer-copywright">
          <h3>© {year} @ENDIRALVILLAR</h3>
          <p>Todos los derechos reservados.</p>
        </Col>
        
        {/* Columna 2: Enlaces de Navegación */}
        <Col md="4" className="footer-links">
          <ul className="footer-nav-list">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/tattoos">Tattoos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </Col>

        {/* Columna 3: Redes Sociales */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/endiralvillar/" // <-- Cambia esto si es otro usuario
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            {/* TikTok */}
            <li className="social-icons">
              <a
                href="https://tiktok.com/@endiralvillar" // <-- Cambia esto si es otro usuario
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </li>
            {/* WhatsApp */}
            <li className="social-icons">
              <a
                href="https://wa.me/584149693493" // <-- PONE TU NÚMERO AQUÍ
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
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