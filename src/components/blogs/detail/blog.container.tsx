import { useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { BlogDetailPresenter } from "./blog.presenter";
import { QUERY_OPTIONS } from "~/constants/queries/query-options";
import { ErrorHandleComponent } from "~c/shared/errors/ErrorHandle";

export const BlogDetailContainerPage = () => {
  const { blogId } = useParams({ from: "/blogs/$blogId" });

  const { data: blog, isLoading, isError, error } = useQuery(QUERY_OPTIONS.BLOGS.DETAIL(Number(blogId)));

  return isError ? (
    <ErrorHandleComponent
      redirectLink="/blogs"
      errorText="Blog not found"
      redirectText="Back to Blogs" />
    ) : (
    <BlogDetailPresenter
      blog={blog}
      isLoading={isLoading} />
  );
};
