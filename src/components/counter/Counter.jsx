import React, { useState } from "react";

const Counter = ({ stock, handleQuantity }) => {
  const [cantidad, setCantidad] = useState(1);
  const add = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const subtract = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <button onClick={subtract}>-</button>
      <span>{cantidad}</span>
      <button onClick={add}> +</button>
      <br />
      <button onClick={()=>handleQuantity(cantidad)}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
