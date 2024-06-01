import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Layout.css';
import Info from '../Info/Info';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Info />
            <Navbar expand="lg" className="bg-success-subtle container">
                <Container>
                    <Navbar.Brand className="logo"><Link to="/"><h1 className="titulo">Mery-Lou <br /> Bar-Restaurant</h1></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto menu-principal">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Sobre Nosotros</Link></li>
                        <li><Link to="/environment">Entorno, Cultura y Ocio</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;