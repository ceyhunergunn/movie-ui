import React from "react";
import { MainContext } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";

function App() {
  const { loader } = React.useContext(MainContext);
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/:id" element={<MovieDetails />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
