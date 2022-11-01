import React from "react";
import CursosList from "./CursosList";

const CursosListContainer = () => {
  const cursos = [
    {
      nombre: "react",
      numero: 1,
      info: "info de react",
    },
    {
      nombre: "html",
      numero: 2,
      info: "info de html",
    },
    {
      nombre: "css",
      numero: 3,
      info: "info de css",
    },
    {
      nombre: "javascript",
      numero: 4,
      info: "info de javascript",
    },
    {
      nombre: "javascript",
      numero: 4,
      info: "info de javascript",
    },
    {
      nombre: "javascript",
      numero: 4,
      info: "info de javascript",
    },
    {
      nombre: "javascript",
      numero: 4,
      info: "info de javascript",
    },
  ];

  return <CursosList cursos={cursos} />;
};

export default CursosListContainer;
