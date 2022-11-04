import React, { useState } from "react";
import styled from "styled-components";
import { CardData } from "./CardData";
import Counter from "./Counter";

const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: #1a1a1a;
  border-radius: 20px;
  transition: all 0.2s;
  margin: 0 auto;
  color: white;
`;

const Card = ({ producto, onAdd }) => {
  return (
    <CardContainer>
      <CardData producto={producto}/>
      <Counter onAdd={onAdd} stock={producto.stock} />
    </CardContainer>
  );
};

export default Card;
