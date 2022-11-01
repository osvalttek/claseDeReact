import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 300px;
  background-color: wheat;
  margin: 5px;
  border: 2px solid black;
  border-radius: 10%;
`;

const Curso = ({ nombre, numero, info }) => {
  return (
    <Div>
      <h1>{nombre}</h1>
      <h2>El curso numero {numero}</h2>
      <p>{info}</p>
    </Div>
  );
};

export default Curso;
