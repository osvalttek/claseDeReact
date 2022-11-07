import React from "react";
import Personaje from "./Personaje";

const PersonajesList = ({ personajes }) => {
  return personajes.map((personaje, key) => (
    <Personaje personaje={personaje} key={key} />
  ));
};

export default PersonajesList;
