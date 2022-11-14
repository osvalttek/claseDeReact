import React, { useContext } from "react";
import { contador } from "../../../context/Contador";

const Logo = () => {
  const { count } = useContext(contador);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Logo;
