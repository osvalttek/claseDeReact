import React from "react";
import Product from "./Product";



const ProductsList = ({ products }) => {
  return products.map((product, key) => (
    <Product product={product} key={key} />
  ));
};

export default ProductsList;
