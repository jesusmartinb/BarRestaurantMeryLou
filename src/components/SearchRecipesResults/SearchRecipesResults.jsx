import { Link } from "react-router-dom";


const SearchRecipesResults = ({response, keyword}) => {

  return (
    <div>
        <p>Los resultados obtenidos para {keyword} son:</p>
        <div className="container2 mx-auto">
            <div className="row justify-content-center">
            {
                response && response.map((recipe, index) => (
                <div className="card col-12 col-md-4 col-lg-3 m-3 p-0" key={index}>
                    <img className="card-img-top" src={recipe.image} alt={recipe.title} />
                    <div className="card-body">
                        <h5>{recipe.title}</h5>
                        <p className="card-text">{recipe.newCategory}</p>
                        <button className="btn btn-danger"><Link className="text-white text-decoration-none" to={`/detalle-receta/${recipe.path}`}>Detalle Receta</Link></button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default SearchRecipesResults
