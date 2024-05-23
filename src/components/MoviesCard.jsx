import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../context/Context";
import defaultMovie from "../assets/defaultmovie.png";

const MoviesCard = ({ movie }) => {
  const { getMovieDetail, setLoaderMovieDetails } =
    React.useContext(MainContext);
  const navigate = useNavigate();
  return (
    <div
      className="movies-card h-100"
      onClick={() => {
        setLoaderMovieDetails(true);
        getMovieDetail(movie.imdbID);
        navigate(`/${movie.imdbID}`);
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : defaultMovie}
        alt="poster"
        className="movies-card-image"
      />
      <div className="movies-card-detail flex-center">
        <div className="text-center">
          <div className="text-title ">{movie.Title}</div>
          <div className="text-subtitle">Release Date</div>
          <div className="text-title ">{movie.Year}</div>
          <div className="text-subtitle">IMDB ID</div>
          <div className="text-title ">{movie.imdbID}</div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
