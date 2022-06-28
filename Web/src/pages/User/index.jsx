import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

import "./style.css";

const User = () => {
  let navigate = useNavigate();
  const { user, signOut } = useContext(AuthContext);

  async function RemoveToken() {
    await signOut();
    navigate("/");
  }

  if (!user) {
    navigate("/login");
  }

  function Movies() {
    return navigate("/Movies");
  }

  return (
    <div className="container-profile">
      <div className="card card-profile">
        <img
          src="https://github.com/rafaelmasselli.png"
          className="card-img-top"
          alt="card do profile"
        />
        <div className="card-body">
          <h5 className="card-title card-title-text">{user.name}</h5>
          <p className="card-text text-email">E-mail: {user.email}</p>
          <button onClick={Movies} className="btn btn-danger button-profile">
            Ver filmes
          </button>
          <button onClick={RemoveToken} className="btn btn-danger button-profile">
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
