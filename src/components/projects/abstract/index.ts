import { GitHubRepositoriesResponse } from "~/types/projects";

export interface ProjectsPresenterProps {
  data?: GitHubRepositoriesResponse;
  isLoading: boolean;
}
