import { useQuery, queryOptions } from "@tanstack/react-query";
import { ProjectsPresenter } from "./projects.presenter";

import { QUERY_OPTIONS } from "~/constants/queries/query-options";

export function ProjectsContainerPage() {
  const { data, isLoading } = useQuery(QUERY_OPTIONS.PROJECTS.LIST);
  return <ProjectsPresenter data={data} isLoading={isLoading} />;
}
