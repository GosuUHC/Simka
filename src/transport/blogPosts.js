import { api } from "./api";

const blogPostsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBlogPosts: build.query({
      query: () => `blogposts`,
    }),
    getBlogPostsSorted: build.query({
      query: (order) => `blogposts/${order}`,
    }),
    getBlogPostsThemed: build.query({
      query: (theme) => `blogposts/${theme}`,
    }),
    getBlogPostSingle: build.query({
      query: (blogPostId) => `blogposts/${blogPostId}`,
    }),
  }),
});

export const {
  useGetBlogPostsQuery,
  getBlogPostsSortedQuery,
  getBlogPostsThemedQuery,
  getBlogPostSingleQuery,
} = blogPostsExtendedApi;
