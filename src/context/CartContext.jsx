import React, { useState, createContext } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(product);
  };
  

  const cartData = {
    cart,
    addToCart,
  };

  return <Provider value={cartData}>{children}</Provider>;
};

export default CartContext;
