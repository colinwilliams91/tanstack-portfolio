import { type Project } from "~/types/projects/index";
import { SIMULATION_DELAY_MS } from "~/constants/utils";


export async function fetchProjects(): Promise<Project[]> {
  // TODO: Remove network simulation delay after testing caching behavior
  await new Promise((resolve) => setTimeout(resolve, SIMULATION_DELAY_MS));
  return await import("~/data/projects").then(module => module.projects);
}
