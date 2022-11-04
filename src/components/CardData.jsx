import React from "react";
import styled from "styled-components";

const DivData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 280px;
    margin: 0 10px 0 10px;
  }
`;

export const CardData = ({producto}) => {
  return (
    <DivData>
      <img src={producto.img} alt="" />
      <h3>{producto.nombre}</h3>
      <h3>Precio: {producto.precio} </h3>
      <h2>stock:{producto.stock} </h2>
    </DivData>
  );
};
