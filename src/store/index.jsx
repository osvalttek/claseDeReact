import { configureStore } from "@reduxjs/toolkit";

// aca llamamos a nuestros reducers
import counterReducer from "./slices/counterSlice";
import quotesReducer from "./slices/quotesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quotes: quotesReducer,
  },
});

// export default store
