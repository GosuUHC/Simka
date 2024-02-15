import { api } from "./api";

const compilationsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompilations: build.query({
      query: () => `compilations`,
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetCompilationsQuery } = compilationsExtendedApi;
