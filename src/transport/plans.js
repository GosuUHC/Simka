import { api } from "./api";

const plansExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPlans: build.query({
      query: (params) => {
        const { provider_id, ...restParams } = params;
        const providerParams = provider_id
          ?.map((id) => `provider_id[]=${id}`)
          .join("&");
        const url = provider_id ? `plans/?${providerParams}` : `plans/`;
        return {
          url: url,
          params: {
            ...restParams,
          },
        };
      },
    }),
  }),
});

export const { useGetPlansQuery } = plansExtendedApi;
