import "./Recipe.css";
import indian from "../../img/indian.jpg";
import {apiUrl} from '../../options';


function Recipe({name,description,image}) {
  
  return (
    <div className="recipe">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <button>DETAILS</button>
    </div>
  );
}

export default Recipe;
