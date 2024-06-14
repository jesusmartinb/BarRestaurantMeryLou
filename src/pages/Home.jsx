import Carous from '../components/Carousel/Carous';
import PlatoCarne1 from '../assets/img/plato_carne_1.jpg';
import PlatoMarisco1 from '../assets/img/plato_marisco_1.jpg';

import { CartaMenu } from './Home.styles';

import { useState, useEffect } from 'react';
import { getFirstCourse, getMainCourse } from '../services/carta';
import SearchRecipes from '../components/SearchRecipes/SearchRecipes';



const Home = () => {

  const [menuFirstCourse, setMenuFirstCourse] = useState([]);
  const [menuMainCourse, setMenuMainCourse] = useState([]);

  useEffect(() => {

    getFirstCourse().then(setMenuFirstCourse);
    getMainCourse().then(setMenuMainCourse);

  }, []);

  return (
    <div className="container2 mx-auto">
      <Carous />
      <div className="row">
        <div className="col-12 col-lg-6 p-2">
          <h2 className="my-4">Cocina tradicional de mercado con productos frescos</h2>
          <p>En nuestro restaurante podrás disfrutar de una cocina tradicional de mercado con productos frescos y de calidad. Nuestro equipo de cocina elabora platos de la gastronomía mediterránea con un toque de autor. La carta de nuestro restaurante se renueva cada temporada para ofrecer a nuestros clientes platos elaborados con los mejores productos de cada estación del año.</p>
          <p>Ven y prueba un mundo de sensaciones que harán disfrutar los paladares más exigentes.</p>
          <img className="w-100 mt-5" src={PlatoMarisco1} alt="Bogabante con huevos y patatas"  title="Bogabante con huevos y patatas"/>
        </div>
        <div className="col-12 col-lg-6 p-2">
          <img className="w-100" src={PlatoCarne1} alt="Pies de cerdo" title="Pies de cerdo" />
        </div>
      </div>
      <CartaMenu>
        <h2 className="my-4">Carta</h2>
        <div className="d-flex row">
          <div className="col-12 col-lg-6  p-2">
            <h3>Entrants / Primeros / First Course / Premiere</h3>
            <ul>
              {
                menuFirstCourse.map((firstCourse, index) => (
                  <div key={index}>
                    <li>{firstCourse.nameCat}</li>
                    <li>{firstCourse.nameEsp}</li>
                    <li>{firstCourse.nameEng}</li>
                    <li>{firstCourse.nameFre}</li>
                  </div>
                ))
              }
            </ul>
          </div>
          <div className="col-12 col-lg-6 p-2">
            <h3>Segons / Segundos /Main / Principal </h3>
            <ul>
              {
                menuMainCourse.map((mainCourse, index) => (
                  <div key={index}>
                    <li>{mainCourse.nameCat}</li>
                    <li>{mainCourse.nameEsp}</li>
                    <li>{mainCourse.nameEng}</li>
                    <li>{mainCourse.nameFre}</li>
                  </div>
                ))
              }
            </ul>
          </div>
        </div>
      </CartaMenu>
      <SearchRecipes />
    </div>
  )
}

export default Home
