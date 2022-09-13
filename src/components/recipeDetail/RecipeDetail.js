import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./RecipeDetail.css";
import food5 from "../../img/food5.jpeg";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
}


function RecipeDetail() {
  const [recipeDetail, setRecipeDetail] = useState([]);
  const [error, setError] = useState("");

  const params = useParams();

  useEffect(() => {
    const getRecipeDetail = async () => {
      try {
        const res = await fetch(
          `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${params.name}`,
          options
        );
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        setRecipeDetail(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getRecipeDetail();
  }, [params.name]);

  return (
    <div className="recipe-details">
      <div className="details-header">
        <Link to={"/"}>
          <button>BACK</button>
        </Link>
      </div>
      <div className="details">
        <div className="main-details">
          <p className="detail-name">{recipeDetail.name}</p>
          <img src={recipeDetail.thumbnail_url} alt="" className="detail-img" />
          <div className="detail-description">
            <h4>Description</h4>
            <p>{recipeDetail.description}</p>
          </div>
          <div className="detail-instruction">
            <h4>Instructions</h4>
            <div>
              {error && { error }}
              {recipeDetail.instructions?.map((instruction) => (
                <li key={instruction.id}>{instruction.display_text}</li>
              ))}
            </div>
          </div>
        </div>
        <div className="other-details">
          <div className="cook-time">
            <h5>Cook Time: </h5>
            <p>{recipeDetail.cook_time_minutes} minutes</p>
          </div>
          <div className="tags">
            <h5>Tags: </h5>
            <p>
              {error && { error }}
              {recipeDetail.tags?.map((tag) => (
                <span key={tag.id}>{tag.display_name}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="img-footer">
        <img src={food5} alt="" />
      </div>
    </div>
  );
}
export default RecipeDetail;
