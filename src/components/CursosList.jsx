import React from "react";
import Curso from "./Curso";

const CursosList = ({ cursos }) => {
  return (
    <>
      {cursos.map((curso) => {
        return (
          <Curso
            nombre={curso.nombre}
            numero={curso.numero}
            info={curso.info}
          />
        );
      })}
    </>
  );
};

export default CursosList;
