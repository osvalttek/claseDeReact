import { useSelector, useDispatch } from "react-redux";
// con el useSelector voy a decirle a mi reducer que valores de mi almacen quiero que me traiga
// el useDispatch me va a dar las acciones que tengo que ejecutar
import { incrementCounter, decrementCounter } from "../../store/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(decrementCounter(4))}>-</button>
      <span>{count} </span>
      <button onClick={()=>dispatch(incrementCounter())}>+</button>
    </div>
  );
};
export default Counter;
