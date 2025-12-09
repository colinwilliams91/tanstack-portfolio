/**
 * Public API URLs used across the application.
 * DEV_TO: GET_ARTICLE - Append article ID to the end of the URL.
 */
export const API_URLS = {
  DEV_TO: {
    LIST_ARTICLES: "https://dev.to/api/articles?username=colin-williams-dev&state=all",
    GET_ARTICLE: "https://dev.to/api/articles/"
  },
} as const;
