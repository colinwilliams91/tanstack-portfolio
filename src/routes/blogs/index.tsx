import { createFileRoute } from "@tanstack/react-router";
import { queryClient } from "~/router";
import { BlogsContainerPage } from "~/components/blogs/list/blogs.container";

import { QUERY_OPTIONS } from "~/constants/query-options";

export const Route = createFileRoute("/blogs/")({
  loader: () =>
    queryClient.ensureQueryData(QUERY_OPTIONS.BLOGS.LIST),
  component: BlogsContainerPage,
});
