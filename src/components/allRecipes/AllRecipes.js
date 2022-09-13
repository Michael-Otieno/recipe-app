import { useEffect, useState } from "react";
import "../../App.css";
import "../landing/Landing.css"
import "../search/Search.css";
import Recipe from "../recipe/Recipe";
import Search from '../search/Search';


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
}




function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const getAllRecipes = async () => {
    try{
      const res = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes`, options)
      if (!res.ok) throw new Error('Something went wrong')
      const data = await res.json();
      setRecipes(data.results)
    }catch (error) {
      setError(error.message);
    }
  }

  const searchRecipe = async (name) => {
    try{
      const res = await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&q=${name}`, options);
      if (!res.ok) throw new Error('Recipe not found');

      const data = await res.json();
      setRecipes(data.results)

    }catch(error){
      setError(error.message)
    }
  }

  useEffect(() => {
    getAllRecipes();
  }, []);

 
  const recipeList = recipes?.map((recipe) => (
    <Recipe
      key={recipe.id}
      id={recipe.id}
      name={recipe.name}
      description={recipe.description}
      image={recipe.thumbnail_url}
    />
  ));
  return (
    <div className="App">
      <div className="landing-page">
        <div className="landing-details">
          <h1>TASTY RECIPES</h1>
          <h2>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit
          </h2>
          <div className="filter-search">
            <div>FILTER RECIPES</div>
           {/* search form */}
            <Search onSearch={searchRecipe}/>
          {/* search form end*/}
          </div>
        </div>
      </div>

      {/*  */}
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

export default AllRecipes;
