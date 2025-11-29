import { Project } from "~/types/projects";

export interface ProjectsPresenterProps {
  data?: Project[];
  isLoading: boolean;
}
