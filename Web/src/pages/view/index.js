import { useState, useEffect } from "react";
import axios from "axios";
import CardV from "./../../components/sturcture/Card/index";
import "./style.css";
import ContentLoader, { Facebook } from "react-content-loader";

const View = () => {
  const [filmes, setFilmes] = useState([]);
  const [montado, setmontado] = useState(false);

  const getNetflix = async () => {
    await axios.get("/movie/findMany").then((response) => {
      if (montado) {
        setFilmes(response.data);
      }
    });
  };

  useEffect(() => {
    setmontado(true);
    getNetflix();
  }, [montado]);

  return (
    <div>
      <h1>Filmes</h1>
      <div class="container_View">
        {filmes.map((item) => (
          <CardV
            id={item.id}
            image={item.cover}
            name={item.title}
            alt={item.name}
            key={item.id}
          />
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default View;
