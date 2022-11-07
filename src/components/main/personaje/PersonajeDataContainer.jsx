import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PersonajeDataContainer = () => {
  const [personaje, setPersonaje] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setPersonaje(res.data));
  }, []);

  return <div>PersonajeDataContainer</div>;
};

export default PersonajeDataContainer;
