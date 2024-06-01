import Instalaciones from "../components/Instalaciones/Instalaciones";
import Historia from "../components/Historia/Historia";

const About = () => {
  return (
    <div className="container">
      <h1>Sobre Nosotros</h1>
      <div>
        <Instalaciones />
        <Historia />
        {/* TODO: Agregar más secciones */}
        {/* <div>Nuestro Equipo</div>
        <div>Perfil de la Cocinera</div> */}
      </div>


    </div>
  )
}

export default About
