import { api } from "./api";

const blogThemesExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBlogThemes: build.query({
      query: () => `themes`
    }),
  }),
});

export const { useGetBlogThemesQuery } = blogThemesExtendedApi;
