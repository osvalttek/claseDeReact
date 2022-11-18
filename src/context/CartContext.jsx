import React, { useState, createContext } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartContext = ({ children }) => {
  const [cart, setCart] = useState({
    totalProducts: 0,
    cart: [],
    totalPrice: 0,
  });
  //adToCart
  const addToCart = (product) => {
    let cartCopy = JSON.parse(JSON.stringify(cart));

    let ifProducts = cartCopy.cart.findIndex((p) => p.id === product.id);

    if (ifProducts > -1) {
      cartCopy.cart[ifProducts].quantity += product.quantity;
    } else {
      // cart
      cartCopy.cart.push(product);
    }
    // totalProducts
    cartCopy.totalProducts += product.quantity;
    // totalPrice
    cartCopy.totalPrice += product.price * product.quantity;
    setCart(cartCopy);
    // console.log(cartCopy);
  };
  //getTotalproducts
  const getTotalproducts = () => {
    return cart.totalProducts;
  };

  const cleanCart = () => {
    setCart({ totalProducts: 0, cart: [], totalPrice: 0 });
  };
  const cartData = {
    cart,
    addToCart,
    getTotalproducts,
    cleanCart
  };

  return <Provider value={cartData}>{children}</Provider>;
};

export default CartContext;
