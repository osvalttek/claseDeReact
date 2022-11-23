import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ArticleStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  margin: 10px;
  background-color: crimson;
  img {
    width: 250px;
    height: 300px;
  }
`;

const Product = ({ product }) => {
  
  
  return (
    <Link to={`/product/${product.id}`}>
      <ArticleStyled>
        <h3>{product.title}</h3>
        <img src={"https://image.tmdb.org/t/p/w500"+product.poster_path}/>
        <h3>Precio: ${product.price} </h3>
      </ArticleStyled>
    // </Link>
  );
};

export default Product;
