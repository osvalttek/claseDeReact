import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonajesList from "./PersonajesList";

const PersonajesListContainer = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => setPersonajes(res.data.results))
      .catch((e) => console.log(e));
  }, []);

  return <PersonajesList personajes={personajes}/>;
};

export default PersonajesListContainer;
