import Search from "../search/Search";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">
      <div className="landing-details">
        <h1>TASTY RECIPES</h1>
        <h2>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit
        </h2>
        <div className="filter-search">
          <div>FILTER RECIPES</div>
          <Search/>
        </div>
      </div>
    </div>
  );
}

export default Landing;
