import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./../../../image/net.png";

const Aba = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div>
        <Link to="/">
          <img src={Logo} width="70" height="40"></img>
        </Link>
      </div>
      <ul class="nav">
        <li className="nav-item">
          <Link className="nav-link font" to="/login">
            Entrar
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link font" to="/usuario">
            Minha conta
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Aba;
