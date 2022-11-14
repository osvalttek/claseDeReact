import React, {useContext} from "react";
import { contador } from "../../context/Contador";


const Count = () => {
    const {add}=useContext(contador)
  return (
    <div>
      <button onClick={add}>add</button>
    </div>
  );
};

export default Count;
