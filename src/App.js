import "./App.css";
import "./components/landing/Landing.css"
import "./components/search/Search.css"
import RecipeDetail from "./components/recipeDetail/RecipeDetail";
import {Routes, Route} from 'react-router-dom';
import AllRecipes from "./components/allRecipes/AllRecipes";
import facebook from './img/facebook.png';
import instagram from './img/ig.png';
import mail from './img/mail.png';
import twitter from './img/twitter.png';



function App() {

 
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<AllRecipes />} />
        <Route path='/recipe/:name' element={<RecipeDetail />} />
        
      </Routes> 
      <div className="footer">
        <div className="contact-details">
          <h4>TASTY RECIPES</h4>
          <p>
            <span className="contact-header">Phone: </span>
            <span className="contact">+254723888354/0704702226</span>
          </p>
          <p>
            <span className="contact-header">Email: </span>
            <span className="contact">otieno.oduor.michael@gmail.com</span>
          </p>
          <p>
            <span className="contact-header">Support: </span>
            <span className="contact">support@tastyrecipes.com</span>
          </p>
          <div className="footer-icons">
            <span>
              <img src={facebook} alt='' />
            </span>
            <span>
              <img src={instagram} alt='' />
            </span>
            <span>
              <img src={mail} alt='' />
            </span>
            <span>
              <img src={twitter} alt='' />
            </span>
          </div>
        </div>
        <div className="about-details">
          <h4>ABOUT</h4>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
