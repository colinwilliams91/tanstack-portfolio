import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BlogDetailPresenter } from "./blog.presenter";
import { QUERY_OPTIONS } from "~/constants/query-options";

export const BlogDetailContainerPage = () => {
  const { blogId } = useParams({ from: "/blogs/$blogId" });
  const { data, isLoading } = useQuery(QUERY_OPTIONS.BLOGS.LIST);

  const blog = data?.find((b) => b.id === Number(blogId));

  return <BlogDetailPresenter blog={blog} isLoading={isLoading} />;
};
