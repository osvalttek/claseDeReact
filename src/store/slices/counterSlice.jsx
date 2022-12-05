// primero creamos nuestro slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

// ejecutamos nuestro slice y le pasamos los parametros de name, initialState y reducers, que es donde van a estar nuestras aciones
const counterSlice = createSlice({
  name: "counter",
  //   1
  // si lo manejan asi, ponganle un return a la funcion
  //   initialState: 100,
  //   reducers: {
  //     increment: (state) => {
  //       return state += 1;
  //     },
  //   },
  //   ----------------------------
  //   2
  //   initialState,
  //   reducers: {
  //     increment: (kaka) => {
  //       kaka.value += 1;
  //     },
  //     decrement: (kaka) => {
  //       kaka.value -= 1;
  //     },
  //   },
  // ----------------------------------
  //   3
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// este export de usa cuando tenemos la sintaxis 1 y 2
// export const { increment, decrement } = counterSlice.actions;

// en la 3ª opcion puedo tener la funcion por afuera y exportar esta, y puedo acceder al action de esta menera:counterSlice.actions.increment(num)
// export const incrementCounter = (num) => (dispatch) => {
//   dispatch(counterSlice.actions.increment(num));
// };

// o hacer la desestructuracion
const { increment, decrement } = counterSlice.actions;
export const incrementCounter = () => (dispatch) => {
  dispatch(increment(1));
};

export const decrementCounter = (num) => (dispatch) => {
  dispatch(decrement(num));
};

export default counterSlice.reducer;
