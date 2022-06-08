import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/shared/NavBar/index";
import Footer from "./components/shared/Footer/index";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
