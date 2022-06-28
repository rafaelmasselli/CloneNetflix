import React, { useState ,  useContext} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const LoginAcesse = () => {
  let navigate = useNavigate();
  const { Login, user } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await Login(email, senha);
    } catch (erro) {
      alert(erro)
    }
  };

  if (user) {
    navigate("/User");
  }

  return (
    <div>
      <h1 className="container-login">Login</h1>
      <div>
        <form className="FundoForm" onSubmit={handleSubmit}>
          <div className="container-form">
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

          <button
            type="submit"
            class="btn btn-danger button-login"
            value="Login"
          >
            Entrar
          </button>
        </form>
        <div>
          <h6 className="text-assine">
            <p className="left-margin">Novo por aqui? </p>
            <Link to="/Create ">Assine agora</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default LoginAcesse;
