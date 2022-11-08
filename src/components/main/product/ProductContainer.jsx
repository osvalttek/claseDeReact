import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const ProductContainer = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product?.images?.[0]} alt="no funciona" />
    </div>
  );
};

export default ProductContainer;
