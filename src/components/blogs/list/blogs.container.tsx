import { useQuery } from "@tanstack/react-query";
import { BlogsPresenter } from "./blogs.presenter";

import { QUERY_OPTIONS } from "~/constants/query-options";

export function BlogsContainerPage() {
  const { data, isLoading } = useQuery(QUERY_OPTIONS.BLOGS.LIST);
  return <BlogsPresenter data={data} isLoading={isLoading} />;
}
