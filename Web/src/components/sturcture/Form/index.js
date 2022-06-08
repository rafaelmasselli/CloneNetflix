import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const login = {
      email: email,
      password: senha,
    };

    axios
      .post("/auth/login", login)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/filmes");
      })
      .catch(() => {
        alert("Email ou senha estao incorretas");
      });
  };

  return (
    <>
      <form className="FundoForm" onSubmit={handleSubmit}>
        <div className="centralize">
          <div class="form-floating mb-3 fFF">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label for="floatingInput">Email </label>
          </div>
          <div class="form-floating fFF">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(event) => setSenha(event.target.value)}
            />
            <label for="floatingPassword">Senha</label>
          </div>
        </div>
        <br></br>
        <button type="submit" class="btn btn-danger" value="Login">
          Entrar
        </button>
      </form>
      <br></br>
      <div>
        <h6>
          <b>Novo por aqui?</b>
          <Link to="/Create "> Assine agora</Link>
        </h6>
      </div>
    </>
  );
};

export default Form;
