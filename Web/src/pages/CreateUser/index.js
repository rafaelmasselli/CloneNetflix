import React from "react";
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const RegisterC = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setSenha] = useState("");
  const [confirmpassword, setConfirme] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post("user/create", { email, name, password, confirmpassword })
      .then(() => {
        alert("Usuário Cadastrado com sucesso!");
        navigate("/login");
      })
      .catch((error) => {
        const { data } = error.response;
        console.log(data.message);
      });
  };

  return (
    <div className="centralize">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro</h1>
        <br></br>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label for="floatingInput" className="Color">
            Email
          </label>
        </div>

        <div class="form-floating">
          <input
            type="text"
            class="form-control"
            placeholder="Password"
            onChange={(event) => setName(event.target.value)}
          />
          <label for="floatingPassword" className="Color">
            Nome
          </label>
        </div>

        <br></br>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            placeholder="name@example.com"
            onChange={(event) => setSenha(event.target.value)}
          />
          <label for="floatingInput" className="Color">
            Senha
          </label>
        </div>

        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            onChange={(event) => setConfirme(event.target.value)}
          />
          <label for="floatingPassword" className="Color">
            Confirma a Senha
          </label>
        </div>

        <br></br>
        <button type="submit" class="btn btn-danger">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterC;
