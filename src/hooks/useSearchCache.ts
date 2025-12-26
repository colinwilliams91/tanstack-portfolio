import { useQueries } from "@tanstack/react-query";
import { QUERY_OPTIONS } from "~/constants/queries/query-options";
import type { Article } from "~/types/blogs";
import type { GitHubRepository } from "~/types/projects";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "blog" | "project";
  url: string;
}

/**
 * Hook to access cached blogs and projects data for search functionality.
 * Returns both the data and loading/fetching states for cache status indicators.
 */
export function useSearchCache() {
  const [blogsQuery, projectsQuery] = useQueries({
    queries: [
      QUERY_OPTIONS.BLOGS.LIST,
      QUERY_OPTIONS.PROJECTS.LIST,
    ],
  });

  // Check if either query is fetching (initial load or background refresh)
  const isFetching = blogsQuery.isFetching || projectsQuery.isFetching;
  
  // Check if either query is loading (initial load only)
  const isLoading = blogsQuery.isLoading || projectsQuery.isLoading;

  /**
   * Search through cached blogs and projects
   */
  const search = (query: string): SearchResult[] => {
    if (!query || query.length === 0) {
      return [];
    }

    const lowerQuery = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search through blogs
    if (blogsQuery.data) {
      const blogResults = blogsQuery.data
        .filter((blog: Article) => {
          return (
            blog.title.toLowerCase().includes(lowerQuery) ||
            (blog.description && blog.description.toLowerCase().includes(lowerQuery)) ||
            (blog.tags && blog.tags.toLowerCase().includes(lowerQuery)) ||
            (blog.tag_list && blog.tag_list.some(tag => tag.toLowerCase().includes(lowerQuery)))
          );
        })
        .map((blog: Article) => ({
          id: `blog-${blog.id}`,
          title: blog.title,
          description: blog.description || "",
          type: "blog" as const,
          url: `/blogs/${blog.id}`,
        }));
      
      results.push(...blogResults);
    }

    // Search through projects
    if (projectsQuery.data) {
      const projectResults = projectsQuery.data
        .filter((project: GitHubRepository) => {
          return (
            project.name.toLowerCase().includes(lowerQuery) ||
            (project.description && project.description.toLowerCase().includes(lowerQuery)) ||
            (project.language && project.language.toLowerCase().includes(lowerQuery)) ||
            (project.topics && project.topics.some(topic => topic.toLowerCase().includes(lowerQuery)))
          );
        })
        .map((project: GitHubRepository) => ({
          id: `project-${project.id}`,
          title: project.name,
          description: project.description || "No description available",
          type: "project" as const,
          url: project.html_url,
        }));
      
      results.push(...projectResults);
    }

    return results;
  };

  return {
    search,
    isFetching,
    isLoading,
    blogsCount: blogsQuery.data?.length || 0,
    projectsCount: projectsQuery.data?.length || 0,
  };
}
