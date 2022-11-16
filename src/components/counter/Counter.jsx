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

  const addToCart = () => {
    handleQuantity(cantidad);
  };

  return (
    <div>
      <button onClick={subtract}>-</button>
      <span>{cantidad}</span>
      <button onClick={add}> +</button>
      <button onClick={addToCart}>Agregar al carrito</button>
    </div>
  );
};

export default Counter;
