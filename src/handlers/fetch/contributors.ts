import { type GitHubContributorsResponse } from "~/types/projects/index";

/**
 * Fetch contributors for a specific repository
 * @param contributorsUrl - The contributors URL from the repository object
 * @returns Promise with array of contributors
 */
export async function fetchContributors(contributorsUrl: string): Promise<GitHubContributorsResponse> {
  if (import.meta.env.DEV) {
    console.log("[fetchContributors] Fetching contributors from:", contributorsUrl);
  }

  const res = await fetch(contributorsUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch contributors: ${res.statusText}`);
  }

  const data = await res.json() satisfies GitHubContributorsResponse;

  if (import.meta.env.DEV) {
    console.log(`[fetchContributors] Fetched ${data.length} contributors`);
  }

  return data;
}
