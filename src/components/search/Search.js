import "./Search.css";
import searchIcon from '../../img/search.png'; 

function Search() {
  return (
    <div className="search">
      <img src={searchIcon} alt=""/>
      <input type="search" />
      <button>SEARCH</button>
    </div>
  );
}

export default Search;