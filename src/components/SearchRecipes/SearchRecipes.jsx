import { useState } from 'react';
import {searchRecipe} from '../../services/search';
import SearchRecipesResults from '../SearchRecipesResults/SearchRecipesResults';
// import { Spinner } from 'reactstrap';

const SearchRecipes = () => {

  const [keyword, setKeyword] = useState('');
  const [response, setResponse] = useState(null);

  const [loading, setLoading] = useState(false);

  return (
    <div className="container2 mx-auto">
        <h1>Busqueda de Recetas</h1>
        <h2>Busca tus recetas favoritas</h2>
        <p>Busca por nombre, palabra clave, ingredientes,...</p>
        <form onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLoading(true);
            searchRecipe(keyword).then((response) => {
              setResponse(response);
              setLoading(false);
            });
        }}>
            <input className="w-100 px-3 py-2 my-3 form-control" type="text" placeholder="Buscar recetas" onChange={(e) => {
              setKeyword(e.target.value);
              setResponse(null);
            }} />
            <div className="d-grid col-6 mx-auto">
              { loading && <button className="btn btn-danger" type="button" disabled><span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
              <span role="status">Cargando... espere un poco por favor</span></button> }
              { !loading && <button className="btn btn-danger" type="submit">Buscar</button> }
            </div>
        </form>

        
        <SearchRecipesResults response={response} keyword={keyword} />

    </div>
  )
}

export default SearchRecipes
