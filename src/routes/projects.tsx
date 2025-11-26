import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "~/router";
import { ProjectsContainerPage } from "~/components/projects/projects.container";

import { QUERY_OPTIONS } from "~/constants/query-options";


export const Route = createFileRoute("/projects")({
  loader: () =>
    queryClient.ensureQueryData(QUERY_OPTIONS.PROJECTS_LIST),
  component: ProjectsContainerPage,
});
