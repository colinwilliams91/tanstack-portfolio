import { queryOptions } from "@tanstack/react-query";
import { fetchProjects } from "~/handlers/fetch/projects";
import { fetchBlogById, fetchBlogs } from "~/handlers/fetch/blogs";

import { QUERY_KEYS } from "./query-keys";

/**
 * @summary
 * Query options for the Projects List Page.
 */
const listProjectsPageQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.PROJECTS,
  queryFn: fetchProjects,
});

/**
 * @summary
 * Query options for the Blogs List Page.
 */
const listBlogsPageQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.BLOGS,
  queryFn: fetchBlogs,
});

/**
 * @summary
 * Query options for a Blog Detail Page.
 */
const blogDetailPageQueryOptions = (blogId: number) => queryOptions({
  queryKey: [...QUERY_KEYS.BLOG, blogId],
  queryFn: () => fetchBlogById(blogId),
});

/**
 * @summary
 * Predefined query options (query key, query function).
 * @example
 * PROJECTS.LIST = {
 *   queryKey: QUERY_KEYS.PROJECTS as string,
 *   queryFn: fetchProjects
 * }
 */
export const QUERY_OPTIONS = {
    PROJECTS: {
        LIST: listProjectsPageQueryOptions,
    },
    BLOGS: {
        LIST: listBlogsPageQueryOptions,
        DETAIL: blogDetailPageQueryOptions,
    }
} as const;
