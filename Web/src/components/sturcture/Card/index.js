import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <div>
        <div class="card cardX">
          <Link to={`/detalhes/${props.id}`}>
            <img
              src={props.image}
              class="card-img-top"
              alt={props.name}
              height="290px"
            />
          </Link>
          <div class="card-body">
            <h7 class="card-text">{props.name}</h7>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
