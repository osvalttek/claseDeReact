import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  value: [],
};

const quotesSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.value = action.payload;
    },
    getByName: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { getAll, getByName } = quotesSlice.actions;

export const getAllQuotes = () => (dispatch) => {
  axios
    .get(`https://thesimpsonsquoteapi.glitch.me/quotes?count=10`)
    .then((data) => dispatch(getAll(data.data)))
    .catch((error) => {
      console.log("🚀 ~ getAllQuotes ~ error", error);
    });
};
export const getQuoteByName = (name) => (dispatch) => {
  axios
    .get(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${name}`)
    .then((data) => dispatch(getByName(data.data)))
    .catch((error) => {
      console.log("🚀 ~ getAllQuotes ~ error", error);
    });
};

export default quotesSlice.reducer;
