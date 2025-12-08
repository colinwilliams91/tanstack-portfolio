import { type Blog } from "~/types/blogs/index";

// TODO: remove DEV environment check and diagnostic logging

export async function fetchBlogs(): Promise<Blog[]> {
  if (import.meta.env.DEV) {
    console.log("[fetchBlogs] Fetching blogs data...");
  }
  const startTime = performance.now();

  const data = await import("~/data/blogs").then(module => module.blogs);

  if (import.meta.env.DEV) {
    const endTime = performance.now();
    console.log(`[fetchBlogs] Fetched ${data.length} blogs in ${(endTime - startTime).toFixed(2)}ms`);
  }

  return data;
}
