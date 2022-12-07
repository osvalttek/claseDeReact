import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const simpsonApi = createApi({
  reducerPath: "simpsonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://thesimpsonsquoteapi.glitch.me/quotes",
  }),
  endpoints: (builder) => ({
    getAllQuotes: builder.query({
      query: (count = 10) => `?count=${count}`,
    }),
    getQuoteByName: builder.query({
      query: (name) => `?character=${name}`,
    }),
  }),
});

export const { useGetAllQuotesQuery, useGetQuoteByNameQuery } = simpsonApi;
