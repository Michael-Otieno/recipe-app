import { useEffect, useState } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import Recipe from "./components/recipe/Recipe";
import options, { apiUrl } from "./options";

function App() {
  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    getAllRecipes()  
  },[])

  const getAllRecipes = async () => {
    await fetch(`${apiUrl}list?from=0&size=20&tags=under_30_minutes`, options)
      .then(response => response.json())
      .then(response => setRecipes(response.results))
      .catch(err => console.error(err));
  }
  
  const getDetails = async (id) => {
    console.log('details')
  }



  const recipeList = recipes.map((recipe) =>
    <Recipe
    key={recipe.id}
    name={recipe.name}
    description={recipe.description}
    image={recipe.thumbnail_url}
  
    />
  )
  return (
    <div className="App">
      <Landing />
      <div className="categories">
        <div className="category all">
          <p>all in one</p>
        </div>
        <div className="category indian">
          <p>indian</p>
        </div>
        <div className="category vegetarian">
          <p>vegetarian</p>
        </div>
        <div className="category healthy">
          <p>healthy</p>
        </div>
      </div>
      <div className="recipes">
        <h2>RECIPES</h2>
        <ul className="recipeList">
          <li>{recipeList}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
