import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "~/router";
import { BlogsContainerPage } from "~/components/blogs/list/blogs.container";

import { QUERY_OPTIONS } from "~/constants/queries/query-options";
import { META } from "~/constants/data";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: META.BLOGS.TITLE },
      { name: "description", content: META.BLOGS.DESCRIPTION },
    ],
  }),
  loader: () =>
    queryClient.ensureQueryData(QUERY_OPTIONS.BLOGS.LIST),
  component: BlogsContainerPage,
});
