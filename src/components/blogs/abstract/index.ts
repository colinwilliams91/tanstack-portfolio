import { Article, ArticleDetail } from "~/types/blogs";

export interface BlogsPresenterProps {
  data?: Article[];
  isLoading: boolean;
}

export interface BlogDetailPresenterProps {
  blog?: ArticleDetail;
  isLoading: boolean;
}
