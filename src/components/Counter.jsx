import React, { useState } from "react";
import styled from "styled-components";
const CounterStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  width: 100%;
  button {
    width: 20px;
    height: 20px;
  }
`;
const ButtonAgregar = styled.button`
  display: block;
  margin: auto;
`;
const Counter = ({onAdd, stock }) => {
  const [count, setCount] = useState(1);
  function remove() {
    if (count > 1) setCount(count - 1);
  }
  function add() {
    if (stock > count) setCount(count + 1);
  }
  function start() {
    onAdd(count);
    setCount(1);
  }
  return (
    <>
      <CounterStyle>
        <button onClick={remove}>-</button>
        <span>{count}</span>
        <button onClick={add}>+</button>
      </CounterStyle>
      <ButtonAgregar onClick={start}>Agregar</ButtonAgregar>
    </>
  );
};

export default Counter;
