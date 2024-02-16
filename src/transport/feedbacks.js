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

export const feedbackReasons = [
  "На сайте что-то не работает или работает некорректно",
  "Неточности в информации на сайте",
  "Предложить идею",
  "Я знаю провайдера, которого у вас нет!",
];

export const { useAddNewFeedbackMutation } = feedbacksExtendedApi;
