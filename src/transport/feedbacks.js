import { api } from "./api";

const feedbacksExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    addNewFeedback: build.mutation({
      query: (feedback) => ({
        url: "/feedbacks",
        method: "POST",
        body: feedback,
      }),
    }),
  }),
});

export const { useAddNewFeedbackMutation } = feedbacksExtendedApi;
