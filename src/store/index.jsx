import { configureStore } from "@reduxjs/toolkit";
// aca llamamos a nuestros reducers
import counterReducer from "./slices/counterSlice";
import { simpsonApi } from "./api/quoteApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [simpsonApi.reducerPath]: simpsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(simpsonApi.middleware),
});

// export default store
