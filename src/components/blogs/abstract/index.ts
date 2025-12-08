import { Blog } from "~/types/blogs";

export interface BlogsPresenterProps {
  data?: Blog[];
  isLoading: boolean;
}

export interface BlogDetailPresenterProps {
  blog?: Blog;
  isLoading: boolean;
}
