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
          <div>
            <input type="search" />
            <button>SEARCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
