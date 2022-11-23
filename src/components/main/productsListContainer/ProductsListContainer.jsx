import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductsList from "./ProductsList";

const ProductsListContainer = () => {
  let key=process.env.REACT_APP_KEY
  console.log(key)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      // .get(`https://dummyjson.com/products`)
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
      .then((res) => setProducts(res.data.results));
  }, []);
  return <ProductsList products={products}/>;
};

export default ProductsListContainer;
