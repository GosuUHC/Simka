import { api } from "./api";

const compilationsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCompilations: build.query({
      query: () => `compilations`,
    }),
  }),
});

export const { useGetCompilationsQuery } = compilationsExtendedApi;
