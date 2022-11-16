import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetail from "./ProductDetail";

const ProductDetailContainer = () => {
  const {id}  = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res=>setProduct(res.data))
  }, []);

  return <ProductDetail product={product}/>;
};

export default ProductDetailContainer;
