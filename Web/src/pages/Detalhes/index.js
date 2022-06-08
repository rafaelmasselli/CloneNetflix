import { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detalhes = () => {
  const [filmes, setFilmes] = useState({});
  const [montado, setMontado] = useState(false);

  const { id } = useParams();

  const getNetflixUnique = async (props) => {
    await axios
      .get(`/movie/findUnique/${id}`)
      .then((response) => {
        if (montado) {
          setFilmes(response.data);
        }
      })
      .catch(() => {
        console.log(`erro`);
      });
  };

  console.log(id);

  useEffect(() => {
    setMontado(true);
    getNetflixUnique();
  }, [montado]);

  return (
    <div className="responsive">
      <div className="imageView">
        <figure class="figure">
          <img
            src={filmes.cover}
            class="figure-img img-fluid rounded"
            alt={filmes.title}
          />
          <figcaption class="figure-caption"></figcaption>
        </figure>
      </div>
      <div className="TextView">
        <h4 class="titulo">Nome do filme</h4>
        <h2>{filmes.title}</h2>

        <h4 class="titulo">Genero</h4>
        <h3>{filmes.genres}</h3>
        <h4 class="titulo">Ano de lancamento</h4>
        <h3> {filmes.year}</h3>
      </div>
      <h4 class="titulo">Resumo</h4>
      <p>{filmes.resume}</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Detalhes;
