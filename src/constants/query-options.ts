import { queryOptions } from "@tanstack/react-query";
import { fetchProjects } from "~/handlers/fetch/projects";

import { QUERY_KEYS } from "./query-keys";


/* region Define query options */

const projectsPageQueryOptions = queryOptions({
  queryKey: QUERY_KEYS.PROJECTS,
  queryFn: fetchProjects,
});

/**
 * Predefined query options (key/fn) for various queries used in the application.
 * Follow this naming convention: [DOMAIN]_[FETCH_VERB]
 */
export const QUERY_OPTIONS = {
    PROJECTS_LIST: projectsPageQueryOptions,
};
