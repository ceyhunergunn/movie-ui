import React from "react";
import { MainContext } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const { loader } = React.useContext(MainContext);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <SearchBar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/:id" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
