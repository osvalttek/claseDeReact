import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cartContext } from "../../../context/CartContext";
import Counter from "../../counter/Counter";

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 500px;
  margin: 10px;
  background-color: crimson;
  img {
    width: 300px;
    height: 300px;
  }
`;

const ProductDetail = ({ product }) => {
  const { addToCart } = useContext(cartContext);
  const [quantity, setQuantity] = useState(0);
  const [goToCart, setGoToCart] = useState(false);
  const handleQuantity = (n) => {
    setQuantity(n);
    setGoToCart(!goToCart);
  };
  useEffect(() => {
    quantity && addToCart({ ...product, quantity });
    setQuantity(0);
  }, [quantity]);

  return (
    <DivStyled>
      <h1>{product.title}</h1>
      {/* <img src={product.images?.[0]} alt="" /> */}
       <img src={"https://image.tmdb.org/t/p/w500/" + product?.poster_path} />
      <h3>{product.description}</h3>
      <h3>Precio: ${product.price}</h3>
      <h3>Stock: {product.stock}</h3>
      <Counter stock={product.stock} handleQuantity={handleQuantity} />
      <br />
      {goToCart && (
        <Link to="">
          <button>Ir al carrito</button>
        </Link>
      )}
    </DivStyled>
  );
};

export default ProductDetail;
