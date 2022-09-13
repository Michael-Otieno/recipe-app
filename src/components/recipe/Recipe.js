import "./Recipe.css";
import { Link } from "react-router-dom";

function Recipe({id,name,description,image}) {
  
  return (
    <div className="recipe">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{description.substring(0,100)}{description.length >= 100 && '...'}</p>
      <Link to={`/recipe/${id}`}>
        <button>DETAILS</button>
      </Link>
    </div>
  );
}

export default Recipe;
