import { Article } from "~/types/blogs";

export interface BlogsPresenterProps {
  data?: Article[];
  isLoading: boolean;
}

export interface BlogDetailPresenterProps {
  blog?: Article;
  isLoading: boolean;
}
