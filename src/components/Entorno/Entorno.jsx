import Playa from '../../assets/img/playa_riells.jpg';
import Mosaico from '../../assets/img/mosaico_empuries.jpg';
import Museo from '../../assets/img/museo_anchoa.jpg';

const Entorno = () => {
  return (
    <>
        <h2 className="my-3">
            Entorno
        </h2>
        <h3 className="my-3">
            En contacto con la naturaleza
        </h3>

        <div className="row">
            <div className="col-12 col-lg-6 p-2">
                <p>
                    En un entorno rural, rodeado de naturaleza, se encuentra L&apos;Escala, envuelto por montañas, valles, playas y parques naturales.
                </p>
                <p>
                    El termino municipal tiene una extensión de 16,4 km2 y una población de 10.000 habitantes.
                </p>
                <p>
                    Su economía se basa en la agricultura, la pesca y el turismo.
                </p>
                <img className="w-100" src={Playa} alt="Playa de Riells" title="Playa de Riells" />
            </div>
            <div className="col-12 col-lg-6 p-2">
                <img className="w-100" src={Mosaico} alt="Mosaico en la zona arqueológica de Empuries" title="Mosaico en la zona arqueológica de Empuries" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 py-4">
                <img className="w-100" src={Museo} alt="Museo de la Anchoa y la Sal" title="Museo de la Anchoa y la Sal" />
            </div>
        </div>
    </>
  )
}

export default Entorno
