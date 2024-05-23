import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import App from "./App";
import MainContextProvider from "./context/Context";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </React.StrictMode>
);
