import { useState, useEffect } from "react";

import { api } from "../../lib/api";
import Card from "../../components/structure/Card";

import "./style.css";

const View = () => {
  const [filmes, setFilmes] = useState([]);
  const [montado, setMontado] = useState(false);

  const getNetflix = async () => {
    await api.get("/movie/findMany").then((response) => {
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
