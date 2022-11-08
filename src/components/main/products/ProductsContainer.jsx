import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=10&skip=10")
      .then((res) => setProducts(res.data.products));
  }, []);

  return <ProductsList products={products} />;
};

export default ProductsContainer;
