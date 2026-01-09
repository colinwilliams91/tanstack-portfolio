import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "~/router";
import { ProjectsContainerPage } from "~c/projects/list/projects.container";

import { QUERY_OPTIONS } from "~/constants/queries/query-options";
import { GitHubRepositoriesResponse } from "~/types/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects by Colin Williams - Software Development Portfolio" },
      { name: "description", content: "Explore Colin Williams' software development projects including React applications, TypeScript projects, and open source contributions. View GitHub repositories and technical work." },
    ],
  }),
  loader: (): Promise<GitHubRepositoriesResponse> =>
    queryClient.ensureQueryData(QUERY_OPTIONS.PROJECTS.LIST),
  component: ProjectsContainerPage,
});
