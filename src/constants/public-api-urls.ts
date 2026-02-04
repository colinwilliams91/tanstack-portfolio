/**
 * Public API URLs used across the application.
 * DEV_TO: GET_ARTICLE - Append article ID to the end of the URL.
 */
export const API_URLS = {
  DEV_TO: {
    LIST_ARTICLES: "https://dev.to/api/articles?username=colin-williams-dev&state=all",
    GET_ARTICLE: "https://dev.to/api/articles/"
  },
  GITHUB: {
    USER_REPOS: "https://api.github.com/users/colinwilliams91/repos?sort=pushed&per_page=50",
    PROFILE: "https://github.com/colinwilliams91"
  },
  LINKED_IN: {
    PROFILE: "https://www.linkedin.com/in/colin-williams-dev/"
  },
  EMAIL: "mailto:colin.williams.dev@gmail.com",
  RESUME: "https://docs.google.com/document/d/1RnFJQswy0fLqMHV6SfAWb_db2VUh3s7dh2bbxqi8Lm0/edit?usp=sharing",
  OSS: {
    MICROSOFT_ASPIRE: "https://github.com/dotnet/aspire/pull/8259"
  }
} as const;
