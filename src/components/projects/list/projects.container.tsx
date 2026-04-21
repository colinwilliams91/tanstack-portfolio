import { useQuery } from "@tanstack/react-query";
import { ProjectsPresenter } from "./projects.presenter";

import { QUERY_OPTIONS } from "~/constants/queries/query-options";
import { useTheme } from "~/providers/ThemeContext";

export function ProjectsContainerPage() {
  const theme = useTheme().theme;
  const { data, isLoading } = useQuery(QUERY_OPTIONS.PROJECTS.LIST);
  return <ProjectsPresenter theme={theme} data={data} isLoading={isLoading} />;
}
