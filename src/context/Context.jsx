import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [movies, setMovies] = useState("");
  const [movieDetail, setMovieDetail] = useState("");
  const [search, setSearch] = useState("Pokemon");
  const [searched, setSearched] = useState("");
  const [loader, setLoader] = useState(true);
  const [loaderMovies, setLoaderMovies] = useState(false);
  const [loaderMovieDetails, setLoaderMovieDetails] = useState(false);
  const [type, setType] = useState("");
  const [page, setPage] = useState("1");
  const [totalResults, setTotalResults] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    background: "#222",
    color: "#FFFFFF",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const getMovie = async () => {
    await fetch(
      `https://www.omdbapi.com/?s=${search}&type=${type}&page=${page}&apikey=d761022e`
    )
      .then((response) => response.json())
      .then((json) => {
        setLoaderMovies(true);
        if (json.Response === "True") {
          setSearch(search);
          setTotalResults(+json.totalResults);
          setMovies(json.Search);
          setTimeout(() => {
            setLoaderMovies(false);
          }, 1000);
          setTimeout(() => {
            setLoader(false);
          }, 2000);
        } else {
          setMovies([]);
          setTimeout(() => {
            setLoaderMovies(false);
          }, 1000);
          Toast.fire({
            icon: "error",
            title: "Something went wrong!",
          });
        }
      });
  };
  useEffect(() => {
    setLoaderMovies(true);
    getMovie();
    //eslint-disable-next-line
  }, [page]);
  const currentUrl = window.location.href;
  const extracted = currentUrl.split("/").pop();

  const getMovieDetail = async (id) => {
    await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d761022e`)
      .then((response) => response.json())
      .then((json) => {
        if (json.Response === "True") {
          setMovieDetail(json);
          setLoaderMovieDetails(false);
        } else {
          Toast.fire({
            icon: "error",
            title: "Something went wrong!",
          });
        }
      });
  };

  useEffect(() => {
    if (extracted !== "") {
      setLoaderMovieDetails(true);
      getMovieDetail(extracted);
    } else {
      getMovie();
    }
    // eslint-disable-next-line
  }, []);
  return (
    <MainContext.Provider
      value={{
        movies,
        loader,
        getMovie,
        getMovieDetail,
        totalResults,
        search,
        setSearch,
        page,
        setPage,
        type,
        setType,
        searched,
        setSearched,
        loaderMovies,
        setLoaderMovies,
        movieDetail,
        setMovieDetail,
        loaderMovieDetails,
        setLoaderMovieDetails,
        Toast,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
