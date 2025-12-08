import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BlogDetailPresenter } from "./blog.presenter";
import { QUERY_OPTIONS } from "~/constants/query-options";

export const BlogDetailContainerPage = () => {
  const { blogId } = useParams({ from: "/blogs/$blogId" });
  // Reuse the blogs list query - data is already cached from the list page
  // This avoids an additional fetch and maintains a single source of truth
  const { data, isLoading } = useQuery(QUERY_OPTIONS.BLOGS.LIST);

  const blog = data?.find((b) => b.id === Number(blogId));

  return <BlogDetailPresenter blog={blog} isLoading={isLoading} />;
};
