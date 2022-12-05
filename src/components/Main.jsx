import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./counter/Counter";
import Product from "./product/Product";
import ProductsList from "./products/ProductsList";

const Main = () => {
  const [user, setUser] = useState(true);
  return (
    <main>
      <Routes>
        {/* {user && <Route path="/products" element={<ProductsList />} />} */}
        <Route path="/products" element={<ProductsList />}/>
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </main>
  );
};
export default Main;
