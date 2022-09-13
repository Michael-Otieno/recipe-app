import "./Search.css";
import searchIcon from "../../img/search.png";
import { useState} from "react";

function Search({onSearch}) {

  const [endpoint, setEndpoint] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(endpoint)
    
  };

  return (
    <div className="search">
      <form onSubmit={submitHandler}>
        <img src={searchIcon} alt="" />
        <input type="search" value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
        <button>SEARCH</button>
      </form>
    </div>
  );
}

export default Search;
