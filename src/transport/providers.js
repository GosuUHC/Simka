import { api } from "./api";

const providersExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProvidersSorted: build.query({
      query: (order) => `providers/?${order}`,
    }),
    getProvidersById: build.query({
      query: (ids) => `providers/?${ids.map((id) => `id[]=${id}&`).join("")}`,
    }),
  }),
});

export const { useGetProvidersSortedQuery, useGetProvidersByIdQuery } =
  providersExtendedApi;
