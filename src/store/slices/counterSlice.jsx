// primero creamos nuestro slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",

  initialState,
  reducers: {
    increment: (kaka) => {
      kaka.value += 1;
    },
    decrement: (kaka) => {
      kaka.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
