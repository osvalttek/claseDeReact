import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "./ProductsList";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products));
  }, []);
  return <ProductsList products={products}/>;
};

export default ProductsListContainer;
