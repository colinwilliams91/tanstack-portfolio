import { API_URLS } from "~/constants/public-api-urls";
import { type GitHubRepositoriesResponse } from "~/types/projects/index";

// TODO: remove DEV environment check and diagnostic logging

export async function fetchProjects(): Promise<GitHubRepositoriesResponse> {
  if (import.meta.env.DEV) {
    console.log("[fetchProjects] Fetching projects data...");
  }
  const startTime = performance.now();

  // TODO: should wrap fetch in try/catch and handle errors gracefully, maybe with a retry mechanism or fallback data
  const res = await fetch(API_URLS.GITHUB.USER_REPOS);
  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.statusText}`);
  }
  const data = await res.json() satisfies GitHubRepositoriesResponse;

  if (import.meta.env.DEV) {
    const endTime = performance.now();
    console.log(`[fetchProjects] Fetched ${data.length} projects in ${(endTime - startTime).toFixed(2)}ms`);
    console.dir(data);
  }
  return data;
}
