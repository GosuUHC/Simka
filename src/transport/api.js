import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://simka.make.st/api";

export const api = createApi({
  reducerPath: "simkaApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});
