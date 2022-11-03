import React, { useState } from "react";
import styled from "styled-components";
import CardDetail from "./CardDetail";

const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: #1a1a1a;
  border-radius: 20px;
  transition: all 0.2s;
  margin: 0 auto;
  color: white;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 280px;
      margin: 0 10px 0 10px;
    }
  }
  .buttons {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    button {
      width: 20px;
      height: 20px;
      justify-content: space-evenly;
    }
  }
  button {
    display: block;
    margin: auto;
  }
`;

const Card = ({ producto, onAdd }) => {
  const [count, setCount] = useState(1);
  function remove() {
    if (count > 1) setCount(count - 1);
  }
  function add() {
    if (producto.stock > count) setCount(count + 1);
  }

  function start() {
    onAdd(count);
    setCount(1);
  }

  return (
    <CardContainer>
      <CardDetail producto={producto} />
      <div className="buttons">
        <button onClick={remove}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </div>
      <button onClick={start}>Agregar</button>
    </CardContainer>
  );
};

export default Card;
