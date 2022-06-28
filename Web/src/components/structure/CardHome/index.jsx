import React from "react";
import "./style.css";

const CardHome = (props) => {
  return (
    <div className="container_Home">
      <div>
        <div class="card cardX">
          <img src={props.image} class="card-img-top" alt={props.alt} />
          <div class="card-body">
            <p class="card-text">{props.texto}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
