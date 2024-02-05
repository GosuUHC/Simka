import { api } from "./api";

const reviewsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProviderReviews: build.query({
      query: (provider_id) => `reviews/${provider_id}`,
    }),
    addNewReview: build.mutation({
      query: (review) => ({
        url: "/reviews",
        method: "POST",
        body: review,
      }),
    }),
  }),
});

export const { useGetProviderReviewsQuery, useAddNewReviewMutation } =
  reviewsExtendedApi;
