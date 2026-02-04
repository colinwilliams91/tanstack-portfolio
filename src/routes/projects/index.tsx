import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "~/router";
import { ProjectsContainerPage } from "~c/projects/list/projects.container";

import { QUERY_OPTIONS } from "~/constants/queries/query-options";
import { GitHubRepositoriesResponse } from "~/types/projects";
import { META } from "~/constants/data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title:  META.PROJECTS.TITLE },
      { name: "description", content: META.PROJECTS.DESCRIPTION },
    ],
  }),
  loader: (): Promise<GitHubRepositoriesResponse> =>
    queryClient.ensureQueryData(QUERY_OPTIONS.PROJECTS.LIST),
  component: ProjectsContainerPage,
});
