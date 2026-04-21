import { GitHubRepositoriesResponse } from "~/types/projects";

export interface ProjectsPresenterProps {
  theme: string;
  data?: GitHubRepositoriesResponse;
  isLoading: boolean;
}
