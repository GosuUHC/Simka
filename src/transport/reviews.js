import { api } from "./api";

const reviewsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProviderReviews: build.query({
      query: (provider_id) => `reviews/${provider_id}`,
    }),
  }),
});

export const { useGetProviderReviewsQuery } = reviewsExtendedApi;
