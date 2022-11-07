import React from "react";
import { Link } from "react-router-dom";
const Personaje = ({ personaje }) => {
  return (
    <Link to={`/personaje/${personaje.id}`}>
      <div>
        <h2>{personaje.name}</h2>
        <picture>
          <img src={personaje.image} alt={personaje.name} />
        </picture>
      </div>
    </Link>
  );
};

export default Personaje;
