import React from "react";
import "./searchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-bar-wrapper">
      <div className="social">
        
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
         
        </div>
        <div className="social">
          
        </div>
        <div className="social">
          
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
