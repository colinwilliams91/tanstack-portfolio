import { API_URLS } from "~/constants/public-api-urls";
import { type Article } from "~/types/blogs/index";

// TODO: remove DEV environment check and diagnostic logging

export async function fetchBlogs(): Promise<Article[]> {
  if (import.meta.env.DEV) {
    console.log("[fetchBlogs] Fetching blogs data...");
  }
  const startTime = performance.now();

  const response = await fetch(API_URLS.DEV_TO.LIST_ARTICLES);
  const data: Article[] = await response.json();

  if (import.meta.env.DEV) {
    const endTime = performance.now();
    console.log(`[fetchBlogs] Fetched ${data.length} blogs in ${(endTime - startTime).toFixed(2)}ms`);
  }

  return data;
}
