import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../../assets/img/slide-1.jpg';
import Carousel2 from '../../assets/img/slide-2.jpg';
import Carousel3 from '../../assets/img/slide-3.jpg';

function Carous() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel1} alt="Carrilleras de Cerdo" title="Galtes de Porc"/>
        <Carousel.Caption>
          <h3>MERY-LOU</h3>
          <p>EL MEJOR LUGAR PARA QUALQUIER AMANTE DE LA COMIDA PARA RELAJARSE
MIENTRAS DISFRUTA DE UN BUEN VINO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel2} alt="Ravioli" title="Ravioli"/>
        <Carousel.Caption>
          <h3>MERY-LOU</h3>
          <p>EL MEJOR LUGAR PARA QUALQUIER AMANTE DE LA COMIDA PARA RELAJARSE
MIENTRAS DISFRUTA DE UN BUEN VINO</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel3} alt="Botella de vino" title="Botella de vino" />
        <Carousel.Caption>
          <h3>MERY-LOU</h3>
          <p>
            EL MEJOR LUGAR PARA QUALQUIER AMANTE DE LA COMIDA PARA RELAJARSE
MIENTRAS DISFRUTA DE UN BUEN VINO
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carous;
