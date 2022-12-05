import { configureStore } from "@reduxjs/toolkit";

// aca llamamos a nuestros reducers
import counterReducer from "./slices/counterSlice"


export const store= configureStore({
  reducer: {
    counter:counterReducer,

  },
});


// export default store