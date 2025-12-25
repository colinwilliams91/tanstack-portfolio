import { getYoeFromDate } from "~/handlers/utils";

export const COPY = {
  SEARCH_BAR: {
    PLACEHOLDER: "Start typing to search through my projects and blogs...",
    NO_RESULTS: "No results found. Keep typing to search through projects and blogs...",
    START_TYPING: "Start typing to search through my projects and blogs...",
  },
  HEADER: {
    PROFESSIONAL_EXP: `Professional Software Engineer - ${getYoeFromDate(undefined, true).years} Years`,
  },
  PROJECTS_PRESENTER: {
    DESCRIPTION: "Source repositories and libraries hosted on GitHub, Azure, NPM and NuGet. Games on Itch.io"
  },
} as const;
