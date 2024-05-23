import React from "react";
import { MainContext } from "../context/Context";
import Loader from "./Loader";
import defaultMovie from "../assets/defaultmovie.png";

const MovieDetails = () => {
  const { movieDetail, loaderMovieDetails } = React.useContext(MainContext);
  return (
    <div className="p-3 movie-detail">
      {loaderMovieDetails ? (
        <div className="h-100">
          <Loader />
        </div>
      ) : (
        <div className="row mx-auto w-100 h-100" style={{ paddingTop: "70px" }}>
          <div className="col-12 flex-center flex-column text-center">
            <div className="movie-detail-title mb-3">{movieDetail.Title}</div>
            <div className="d-flex">
              {movieDetail.Genre === "N/A" ? null : (
                <div className="p-1 movie-detail-badge me-2 flex-center text-center">
                  {movieDetail.Genre}
                </div>
              )}
              {movieDetail.Year === "N/A" ? null : (
                <div className="p-1 movie-detail-badge me-2 flex-center text-center">
                  {movieDetail.Year}
                </div>
              )}
              {movieDetail.Runtime === "N/A" ? null : (
                <div className="p-1 movie-detail-badge me-2 flex-center text-center">
                  {movieDetail.Runtime}
                </div>
              )}
              {movieDetail.imdbRating === "N/A" ? null : (
                <div className="p-1 movie-detail-badge me-2 flex-center text-center">
                  {movieDetail.imdbRating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill ms-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-3 flex-center flex-column">
            {movieDetail.Plot === "N/A" ? null : (
              <div className="movie-detail-detail mb-3">{movieDetail.Plot}</div>
            )}
            <img
              src={
                movieDetail.Poster !== "N/A" ? movieDetail.Poster : defaultMovie
              }
              alt="poster"
              className="movie-detail-image"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-3 text-title flex-center flex-column">
            {movieDetail.Actors === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">Actors</div>
                <div className="movie-detail-detail">{movieDetail.Actors}</div>
              </>
            )}
            {movieDetail.Director === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">Director</div>
                <div className="movie-detail-detail">
                  {movieDetail.Director}
                </div>
              </>
            )}
            {movieDetail.Writer === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">Writer</div>
                <div className="movie-detail-detail">{movieDetail.Writer}</div>
              </>
            )}
            {movieDetail.Awards === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">Awards</div>
                <div className="movie-detail-detail">{movieDetail.Awards}</div>
              </>
            )}

            {movieDetail.Released === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">Released</div>
                <div className="movie-detail-detail">
                  {movieDetail.Released}
                </div>
              </>
            )}
            {movieDetail.Country === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">Country</div>
                <div className="movie-detail-detail">{movieDetail.Country}</div>
              </>
            )}
            {movieDetail.DVD === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">DVD</div>
                <div className="movie-detail-detail">{movieDetail.DVD}</div>
              </>
            )}
            {movieDetail.Language === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">Language</div>
                <div className="movie-detail-detail">
                  {movieDetail.Language}
                </div>
              </>
            )}
            {movieDetail.imdbVotes === "N/A" ? null : (
              <>
                <div className="movie-detail-subtitle">IMDB Votes</div>
                <div className="movie-detail-detail">
                  {movieDetail.imdbVotes}
                </div>
              </>
            )}
            {movieDetail.BoxOffice === "N/A" ||
            !movieDetail.BoxOffice ? null : (
              <>
                <div className="movie-detail-subtitle">Box Office</div>
                <div className="movie-detail-detail">
                  {movieDetail.BoxOffice}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
