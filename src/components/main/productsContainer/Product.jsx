import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white !important;
  width: 300px;
  border: 1px solid gray;
  height: 400px;
  padding: 10px;
  border-radius: 5px;
  font-size: 2rem;
  margin: 5px;
  img {
    max-width: 250px;
  }
`;

const Product = ({ product }) => {
    console.log(product)
  return (
    <Card >
      <img src={product.images[0]} alt="" />
    </Card>
  );
};

export default Product;
