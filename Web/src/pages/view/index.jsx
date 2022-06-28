import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

import { api } from "../../lib/api";
import Card from "../../components/structure/Card";

import "./style.css";

const View = () => {
  let navigate = useNavigate();
  const [filmes, setFilmes] = useState([]);
  const [montado, setMontado] = useState(false);
  const { user } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getNetflix = async () => {
    await api.get("/filmes", config).then((response) => {
      if (montado) {
        setFilmes(response.data);
      }
    });
  };

  useEffect(() => {
    setMontado(true);
    getNetflix();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [montado]);

  if (!user) {
     navigate("/login");
  }

  return (
    <div>
      <h1>Filmes</h1>
      <div class="container_View">
        {filmes.map((item) => (
          <Card
            id={item.id}
            image={item.cover}
            name={item.title}
            alt={item.name}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default View;
