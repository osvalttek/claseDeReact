import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const {id}  = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    // axios.get(`https://dummyjson.com/products/${id}`)
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d82472947871cdf57aa104514896dcef&language=en-US`)
    .then(res=>setProduct(res.data))
  }, []);

  return <ProductDetail product={product}/>;
};

export default ProductDetailContainer;
