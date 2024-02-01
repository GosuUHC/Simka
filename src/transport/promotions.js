import { api } from "./api";

const promotionsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPromotions: build.query({
      query: () => `promotions`,
    }),
  }),
});

export const { useGetPromotionsQuery } = promotionsExtendedApi;
