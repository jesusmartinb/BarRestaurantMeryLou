import { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { recipeDetail } from '../services/recipeDetails';
import { Spinner } from 'reactstrap';
import {SpinerCentrado} from './DetalleReceta.styles';

const DetalleReceta = () => {

    const { path } = useParams();

    const [recipedetails, setRecipedetails] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        recipeDetail(path).then(setRecipedetails);
    }, []);

    useEffect(() => {
        if(recipedetails) {
            setLoading(false);
        }
    }, [recipedetails]);
    
    const { ['Imagen de la receta']: imagen, ['Titulo de la preparacion']: titulo, ['Raciones']: raciones, ['Duracion']: duracion, ['Ingredientes']: ingredientes, ['Pasos de preparacion']: pasos } = recipedetails || {};

  return (
    <>
        {loading && <SpinerCentrado>
                <div>
                    <Spinner color="danger">Cargando...</Spinner><span>{' '}Cargando...esperé un poco por favor</span>
                </div>
            </SpinerCentrado>}
        {/* { recipedetails ? setLoading(false) : setLoading(true) } */}
        <div className="container2 m-auto">
            {recipedetails && <div>
                <h1 className="my-5">{titulo}</h1>
                <img className="w-100" src={imagen} alt={titulo} />
                <p className="my-4"><span className="fw-bold">Número de comensales: </span>{raciones}</p>
                <p className="my-4"><span className="fw-bold">Tiempo de preparación: </span>{duracion}</p>
                <h2>Ingredientes</h2>
                <ul>
                    {ingredientes.map((ingrediente, index) => (
                        <li key={index}>{ingrediente}</li>
                    ))}
                </ul>
                <h2>Pasos</h2>
                <ol>
                    {pasos.map((paso, index) => (
                        <li key={index}>{paso}</li>
                    ))}
                </ol>
            </div>
            }
        </div>
    </>
  )
}

export default DetalleReceta
