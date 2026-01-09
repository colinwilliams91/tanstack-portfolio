import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "~/router";
import { BlogsContainerPage } from "~/components/blogs/list/blogs.container";

import { QUERY_OPTIONS } from "~/constants/queries/query-options";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blog by Colin Williams - Software Engineering Insights & Tutorials" },
      { name: "description", content: "Read Colin Williams' blog posts about software engineering, web development, React, TypeScript, TanStack, and modern development practices. Technical articles and insights from a full-stack developer." },
    ],
  }),
  loader: () =>
    queryClient.ensureQueryData(QUERY_OPTIONS.BLOGS.LIST),
  component: BlogsContainerPage,
});
