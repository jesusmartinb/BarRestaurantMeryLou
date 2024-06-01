import ComedorInvierno from '../../assets/img/comedor_invierno.jpg';
import Comedor from '../../assets/img/comedor.jpg';
import MasJardin from '../../assets/img/mas_jardin.jpg';
import Terraza from '../../assets/img/terraza.jpg';

const Instalaciones = () => {
  return (
    <>
        <h2 className="my-3">Instalaciones</h2>
        <h3 className="my-3">Diferentes ambientes en nuestras instalaciones</h3>

        <div className="row">
            <div className="col-12 col-lg-6 p-2">
                <p>Contamos con diferentes ambientes para que puedas disfrutar de tu comida en el lugar que más te guste.</p>
                <p>El ambiente divertido, festivo y de recreo de la barra.</p>
                <p>También puedes disfrutar del ambiente calido y tranquilo que te proporciona el comedor.</p>
                <img className="w-100" src={Comedor} alt="Comedor en vista nocturna" title="Comedor en vista nocturna" />
            </div>
            <div className="col-12 col-lg-6 p-2">
                <img className="w-100" src={ComedorInvierno} alt="Mesa para grupo grande adornada con flores" title="Mesa para grupo grande" />
            </div>
        </div>
        <div className="row">
            <div className="col-12 py-4">
                <p>Y si prefieres disfrutar de la comida al aire libre, puedes hacerlo en nuestra terraza para tomar el sol y el aire, o al fresco en las noches de verano.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-lg-6 p-2">
                <img className="w-100" src={MasJardin} alt="Vista diurna de la Terraza" title="Vista diurna de la Terraza" />
            </div>
            <div className="col-12 col-lg-6 p-2">
                <img className="w-100" src={Terraza} alt="Terraza al anochecer" title="Terraza al anochecer"/>
            </div>
        </div>
    </>
  )
}

export default Instalaciones
