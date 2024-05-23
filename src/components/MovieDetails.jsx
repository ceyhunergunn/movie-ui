import React from "react";
import { MainContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { movies, searched, loaderMovies } = React.useContext(MainContext);
  const navigate = useNavigate();
  return (
    <div className="">
      {movies.map((movie) => (
        <div>asdf</div>
      ))}
    </div>
  );
};

export default MovieDetails;
