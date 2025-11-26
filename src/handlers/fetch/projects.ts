import { Project } from "~/types/projects/index";
import { SIMULATION_DELAY_MS } from "~/constants/utils";

const projects: Project[] = [
  {
    id: 1,
    name: "Project One",
    description: "A sample project demonstrating TanStack Query caching.",
  },
  {
    id: 2,
    name: "Project Two",
    description: "Another project showcasing clean architecture.",
  },
  {
    id: 3,
    name: "Project Three",
    description: "A minimal project with SOLID principles.",
  },
];

export async function fetchProjects(): Promise<Project[]> {
  // Simulate network delay to demonstrate caching
  await new Promise((resolve) => setTimeout(resolve, SIMULATION_DELAY_MS));
  return projects;
}