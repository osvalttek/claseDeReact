import React, { useState } from "react";
import Card from "./Card";

const Product = () => {
  const [producto, setProducto] = useState({
    id: 1,
    nombre: "tv",
    precio: 20000,
    stock: 5,
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/un55au7000gczb/gallery/ar-uhd-au7000-un55au7000gczb-489502379?$650_519_PNG$",
  });
  function onAdd(add) {
    let productCopi = { ...producto };
    productCopi.stock = productCopi.stock - add;
    if (producto.stock)setProducto(productCopi);
    
  }
  return (
    <>
      <Card producto={producto} onAdd={onAdd} />
    </>
  );
};

export default Product;
