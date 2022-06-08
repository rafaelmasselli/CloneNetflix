import { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormCreate = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setname] = useState("");
  const [senha, setSenha] = useState("");
  const [passwordConfirmation, setConfirme] = useState("");
  const [birthdate, setbirthdate] = useState("");
  const [imageUrl, setimage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const create = {
      name: name,
      email: email,
      birthdate: birthdate,
      password: senha,
      passwordConfirmation: passwordConfirmation,
      imageUrl: imageUrl,
    };

    axios
      .post("/user/create", create)
      .then(() => {
        alert("Usuario Cadastrado com sucesso!");
        navigate("/login");
      })
      .catch(() => {
        alert("Erro preecha os dados corretamente");
      });
  };

  return (
    <div className="centralizee">
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
            onChange={(event) => setname(event.target.value)}
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
        <div class="form-floating">
          <input
            type="date"
            class="form-control"
            placeholder="Password"
            onChange={(event) => setbirthdate(event.target.value)}
          />
          <label for="floatingPassword" className="Color">
            Data de nascimento
          </label>
        </div>

        <br></br>
        <div class="form-floating">
          <input
            type="url"
            class="form-control"
            placeholder="Password"
            onChange={(event) => setimage(event.target.value)}
          />
          <label for="floatingPassword" className="Color">
            Imagem url
          </label>
        </div>

        <br></br>
        <button type="submit" class="btn btn-danger" value="create">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default FormCreate;
