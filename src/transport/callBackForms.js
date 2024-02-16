import { api } from "./api";

const callBackFormsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    sendCallBackForm: build.mutation({
      query: (callbackForm) => ({
        url: "/callback_forms",
        method: "POST",
        body: callbackForm,
      }),
    }),
  }),
});

export const timeForCall = [
  "Как можно скорее",
  "С 8:00 до 9:00",
  "С 9:00 до 10:00",
  "С 10:00 до 11:00",
  "С 11:00 до 12:00",
  "С 12:00 до 13:00",
  "С 13:00 до 14:00",
  "С 14:00 до 15:00",
  "С 15:00 до 16:00",
];

export const { useSendCallBackFormMutation } = callBackFormsExtendedApi;
