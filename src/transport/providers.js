import { api } from "./api";

export const availableSortingOptions = {
  POPULAR: "popular",
  CHEAP: "cheap",
  EXPENSIVE: "expensive",
};

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
