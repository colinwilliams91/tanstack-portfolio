import { type Project } from "~/types/projects/index";

export async function fetchProjects(): Promise<Project[]> {
  return await import("~/data/projects").then(module => module.projects);
}
