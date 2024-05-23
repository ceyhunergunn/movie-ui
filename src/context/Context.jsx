import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [movies, setMovies] = useState("");
  const [search, setSearch] = useState("Pokemon");
  const [loader, setLoader] = useState(true);
  const [category, setCategory] = useState("movie");
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
        setSearch(search);
        setTotalResults(+json.totalResults);
        setMovies(json.Search ? json.Search : []);
        if (json.Search) {
          setTimeout(() => {
            setLoader(false);
          }, 2000);
        }
      });
  };
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
        category,
        setCategory,
        page,
        setPage,
        type,
        setType,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
