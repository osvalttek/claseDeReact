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
    
    let ifProducts = cartCopy.cart.filter((p) => (p.id = product.id));
    if (ifProducts.length) {
      let newQuantity = ifProducts[0].quantity + product.quantity;
    }

    // totalProducts
    cartCopy.totalProducts += product.quantity;

    // cart
    cartCopy.cart.push(product);

    // totalPrice
    cartCopy.totalPrice += product.price * product.quantity;

    setCart(cartCopy);
    console.log(cartCopy);
  };
  //getTotalproducts
  const getTotalproducts = () => {
    return cart.totalProducts;
  };

  const cartData = {
    cart,
    addToCart,
    getTotalproducts,
  };

  return <Provider value={cartData}>{children}</Provider>;
};

export default CartContext;
