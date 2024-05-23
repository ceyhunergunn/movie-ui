import React from "react";
import { MainContext } from "../context/Context";

const SearchBar = () => {
  const { getMovie, name, setName, category, setCategory } =
    React.useContext(MainContext);

  return (
    <div className="w-100 mx-auto p-3 searchbar">
      <div className="row w-100 mx-auto">
        <div className="col-lg-6 col-md-12 my-3">
          <input
            type="text"
            placeholder="Search"
            className="searchbar-search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-lg-6 col-md-12 my-3">
          <div className="searchbar-btn-area">
            <div
              className={` ${
                category === "movie" ? "searchbar-btn-active" : "searchbar-btn"
              }`}
              onClick={() => setCategory("movie")}
            >
              Movie
            </div>
            <div
              className={` ${
                category === "series" ? "searchbar-btn-active" : "searchbar-btn"
              }`}
              onClick={() => setCategory("series")}
            >
              TV Series
            </div>
            <div
              className={` ${
                category === "episode"
                  ? "searchbar-btn-active"
                  : "searchbar-btn"
              }`}
              onClick={() => setCategory("episode")}
            >
              TV Series Episodes
            </div>
            <div
              className="searchbar-search-btn"
              onClick={() => {
                getMovie(name, category);
              }}
            >
              Search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
