import { Article, ArticleDetail } from "~/types/blogs";

export interface BlogsPresenterProps {
  data?: Article[];
  isLoading: boolean;
  handleBlogHover: (blogId: number) => void;
}

export interface BlogDetailPresenterProps {
  blog?: ArticleDetail;
  isLoading: boolean;
}
