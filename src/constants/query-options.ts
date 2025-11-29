import { queryOptions } from "@tanstack/react-query";
import { fetchProjects } from "~/handlers/fetch/projects";

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
    }
} as const;
