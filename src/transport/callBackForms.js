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

const timeForCall = {
  0: "в ближайшее время",
  1: "с 8:00 до 9:00",
  2: "с 9:00 до 10:00",
  3: "с 10:00 до 11:00",
  4: "с 11:00 до 12:00",
  5: "с 12:00 до 13:00",
  6: "с 13:00 до 14:00",
  7: "с 14:00 до 15:00",
  8: "с 15:00 до 16:00",
};

export const { useSendCallBackFormMutation } = callBackFormsExtendedApi;
