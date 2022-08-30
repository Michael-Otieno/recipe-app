import "./Recipe.css";
import indian from "../../img/indian.jpg";

function Recipe() {
  return (
    <div className="recipe">
      <img src={indian} alt="" />
      <h3>Air Fryer Peach Cobbler For 2</h3>
      <p>
        Looking for a summery dessert without the hassle of turning on the oven?
        This peach cobbler for two is sure to satisfy your sweet tooth in no
        time at all....
      </p>
      <button>DETAILS</button>
    </div>
  );
}

export default Recipe;
