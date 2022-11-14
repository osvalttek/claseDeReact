import { createContext, useState } from "react";
export const contador = createContext();

const { Provider } = contador;
const Contador = ({ children }) => {
  const [count, setCount] = useState(20);
  const add = () => {
    setCount(count + 1);
  };
  const counter={
    count,
    add
  }
  return <Provider value={counter}>{children}</Provider>;
};

export default Contador;
