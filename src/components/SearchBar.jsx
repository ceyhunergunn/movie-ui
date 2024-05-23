import React from "react";
import { MainContext } from "../context/Context";

const SearchBar = () => {
  const { setPage, type, setType, search, setSearch, setSearched, getMovie } =
    React.useContext(MainContext);
  console.log(search);
  console.log(type);
  return (
    <div className="w-100 mx-auto p-3 searchbar">
      <div className="row w-100 mx-auto">
        <div className="col-lg-6 col-md-12 my-3">
          <input
            type="text"
            placeholder="Search"
            className="searchbar-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-lg-6 col-md-12 my-3">
          <div className="searchbar-btn-area">
            <div
              className={` ${
                type === "movie" ? "searchbar-btn-active" : "searchbar-btn"
              }`}
              onClick={() => setType("movie")}
            >
              Movie
            </div>
            <div
              className={` ${
                type === "series" ? "searchbar-btn-active" : "searchbar-btn"
              }`}
              onClick={() => setType("series")}
            >
              TV Series
            </div>
            <div
              className={` ${
                type === "episode" ? "searchbar-btn-active" : "searchbar-btn"
              }`}
              onClick={() => setType("episode")}
            >
              TV Series Episodes
            </div>
            <div
              className="searchbar-search-btn"
              onClick={() => {
                if (search !== "") {
                  setSearched(search);
                  setPage(1);
                  getMovie();
                }
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
