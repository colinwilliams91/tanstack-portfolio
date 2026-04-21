import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { BlogsPresenter } from "./blogs.presenter";
import { QUERY_OPTIONS } from "~/constants/queries/query-options";
import { useTheme } from "~/providers/ThemeContext";


export function BlogsContainerPage() {
  const theme = useTheme().theme;
  const { data, isLoading } = useQuery(QUERY_OPTIONS.BLOGS.LIST);
  const queryClient = useQueryClient();

  const handleBlogHover = (blogId: number) => {
    queryClient.prefetchQuery(QUERY_OPTIONS.BLOGS.DETAIL(blogId));
  };

  return <BlogsPresenter theme={theme} data={data} isLoading={isLoading} handleBlogHover={handleBlogHover} />;
}
