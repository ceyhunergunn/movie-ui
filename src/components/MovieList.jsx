import React from "react";
import { MainContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import defaultMovie from "../assets/defaultmovie.png";
import Pagination from "./Pagination";
const MovieList = () => {
  const { movies, search } = React.useContext(MainContext);
  const navigate = useNavigate();
  return (
    <div className="p-3 pt-0">
      <div className="movie-list p-3">
        <div className={movies.length > 0 ? "" : "text-center"}>
          {movies.length > 0 ? "Results" : `No results found for "${search}"`}
        </div>
        {movies.length > 0 ? (
          <>
            <div className="row mx-auto w-100 movie-list-row-title">
              <div className="col-6 d-flex align-items-center">Name</div>
              <div className="col-3 flex-center">Release Date</div>
              <div className="col-3 flex-center">IMDB ID</div>
            </div>
            {movies.map((mov) => (
              <div
                key={mov.imdbID}
                className="row mx-auto w-100 movie-list-row my-3"
                onClick={() => navigate(`/${mov.imdbID}`)}
              >
                <div className="col-6 d-flex align-items-center justify-content-start">
                  <img
                    src={mov.Poster !== "N/A" ? mov.Poster : defaultMovie}
                    alt=""
                    width={90}
                    className="me-3 d-none d-sm-block"
                    style={{ borderRadius: "6px" }}
                  />
                  {mov.Title}
                </div>
                <div className="col-3 flex-center">{mov.Year}</div>
                <div className="col-3 flex-center">{mov.imdbID}</div>
              </div>
            ))}
            <Pagination />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default MovieList;
