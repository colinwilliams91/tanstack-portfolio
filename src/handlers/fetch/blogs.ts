import { API_URLS } from "~/constants/public-api-urls";
import { ArticleDetail, type Article } from "~/types/blogs/index";

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

export async function fetchBlogById(blogId: number): Promise<ArticleDetail | undefined> {
  if (import.meta.env.DEV) {
    console.log(`[fetchBlogById] Fetching blog with ID: ${blogId}...`);
  }
  const startTime = performance.now();

  const response = await fetch(API_URLS.DEV_TO.GET_ARTICLE + blogId);
  const data = await response.json();

  // HACK: Dev.to API has mismatched types between list and detail endpoints
  // List endpoint: tags is string, tag_list is string[]
  // Detail endpoint: tags is string[], tag_list is string (inverted!)
  // Normalize to match the list endpoint structure
  // TODO: Remove this normalization if/when the API is fixed
  // Issue I opened on their repo: https://github.com/forem/forem/issues/22659
  const blog: ArticleDetail = {
    ...data,
    tags: Array.isArray(data.tags) ? data.tags.join(', ') : data.tags,
    tag_list: typeof data.tag_list === 'string'
      ? data.tag_list.split(',').map((x: string) => x.trim())
      : data.tag_list,
  };

  if (import.meta.env.DEV) {
    const endTime = performance.now();
    if (blog) {
      console.log(`[fetchBlogById] Fetched blog ID ${blogId} in ${(endTime - startTime).toFixed(2)}ms`);
    } else {
      console.log(`[fetchBlogById] Blog ID ${blogId} not found (took ${(endTime - startTime).toFixed(2)}ms)`);
    }
  }

  return blog;
}