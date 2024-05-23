import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [movies, setMovies] = useState("");
  const [search, setSearch] = useState("Pokemon");
  const [searched, setSearched] = useState("");
  const [loader, setLoader] = useState(true);
  const [loaderMovies, setLoaderMovies] = useState(false);
  const [type, setType] = useState("movie");
  const [page, setPage] = useState("1");
  const [totalResults, setTotalResults] = useState("");

  const getMovie = async () => {
    await fetch(
      `http://www.omdbapi.com/?s=${search}&type=${type}&page=${page}&apikey=d761022e`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
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
        }
      });
  };
  useEffect(() => {
    getMovie();
    //eslint-disable-next-line
  }, [page]);

  const getMovieDetail = async (id) => {
    await fetch(`http://www.omdbapi.com/?i=${id}&apikey=d761022e`)
      .then((response) => response.json())
      .then((json) => {
        setSearch(search);
        setMovies(json.Search ? json.Search : []);
        if (json.Search) {
          setTimeout(() => {
            setLoader(false);
          }, 2000);
        }
      });
  };

  useEffect(() => {
    getMovie();
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
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
