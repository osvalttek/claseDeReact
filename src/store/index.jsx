import { configureStore } from "@reduxjs/toolkit";
import { simpsonApi } from "./api/quoteApi";

// aca llamamos a nuestros reducers
import counterReducer from "./slices/counterSlice";
import quotesReducer from "./slices/quotesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quotes: quotesReducer,
    [simpsonApi.reducerPath]: simpsonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(simpsonApi.middleware),
});

// export default store
