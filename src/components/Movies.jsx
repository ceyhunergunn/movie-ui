import React from "react";
import { MainContext } from "../context/Context";
import MoviesCard from "./MoviesCard";
import Pagination from "./Pagination";
import Loader from "./Loader";

const Movies = () => {
  const { movies, searched, loaderMovies } = React.useContext(MainContext);
  return (
    <div className="movies-area p-3 pt-0 row">
      {loaderMovies ? (
        <div className="" style={{ height: "400px" }}>
          <Loader />
        </div>
      ) : (
        <>
          <div
            className={
              movies.length > 0 ? "text-title" : " text-title text-center"
            }
          >
            {movies.length > 0 ? "" : `No results found for "${searched}"`}
          </div>
          {movies.length > 0 ? (
            <>
              {movies.map((movie) => (
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
  );
};

export default Movies;
