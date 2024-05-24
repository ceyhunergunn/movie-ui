import React, { useState } from "react";
import { motion } from "framer-motion";
import { MainContext } from "../context/Context";
import MoviesCard from "./MoviesCard";
import Pagination from "./Pagination";
import Loader from "./Loader";
import SearchBar from "./SearchBar";
const Movies = () => {
  const { movies, searched, loaderMovies } = React.useContext(MainContext);
  const [sortedMovies, setSortedMovies] = useState([]);
  const sortMovies = () => {
    setSortedMovies(
      movies.sort((a, b) =>
        +a.Year.slice(0, 4) > +b.Year.slice(0, 4)
          ? -1
          : +b.Year.slice(0, 4) > +a.Year.slice(0, 4)
          ? 1
          : 0
      )
    );
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ paddingTop: "70px" }}
    >
      <SearchBar />
      <div className="movies-area p-3 pt-0 row mx-auto">
        {loaderMovies ? (
          <div className="" style={{ height: "400px" }}>
            <Loader />
          </div>
        ) : (
          <>
            <div
              className={
                movies.length > 0 ? "text-title" : "text-title text-center"
              }
            >
              {movies.length > 0 ? "" : `No results found for "${searched}"`}
            </div>
            {movies.length > 0 ? (
              <>
                <div className="d-flex justify-content-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-sort-down-alt text-title text-2"
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer" }}
                    onClick={() => sortMovies()}
                  >
                    <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5" />
                  </svg>
                </div>
                {sortedMovies.length === 0
                  ? movies.map((movie) => (
                      <div className="movies py-3" key={movie.imbdID}>
                        <MoviesCard movie={movie} />
                      </div>
                    ))
                  : sortedMovies.map((movie) => (
                      <div className="movies py-3" key={movie.imbdID}>
                        <MoviesCard movie={movie} />
                      </div>
                    ))}
                <Pagination />
              </>
            ) : null}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Movies;
