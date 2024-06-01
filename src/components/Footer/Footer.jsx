import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-secondary mt-5 footer">
      <div className="container py-5">
        <div className="logo">
            <Link to="/"><h1 className="titulo">Mery-Lou <br /> Bar-Restaurant</h1></Link>
        </div>
        <Nav className="me-auto menu-principal text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre Nosotros</Link></li>
            <li><Link to="/environment">Entorno, Cultura y Ocio</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
        </Nav>
        <div className="redes-sociales text-center">
            <i className="fa-brands fa-facebook fa-2xl p-4"></i>
            <i className="fa-brands fa-instagram fa-2xl p-4"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
