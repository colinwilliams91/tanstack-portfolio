import { type Project } from "~/types/projects/index";

// TODO: remove DEV environment check and diagnostic logging

export async function fetchProjects(): Promise<Project[]> {
  if (import.meta.env.DEV) {
    console.log("[fetchProjects] Fetching projects data...");
  }
  const startTime = performance.now();

  const data = await import("~/data/projects").then(module => module.projects);

  if (import.meta.env.DEV) {
    const endTime = performance.now();
    console.log(`[fetchProjects] Fetched ${data.length} projects in ${(endTime - startTime).toFixed(2)}ms`);
  }

  return data;
}
