import { createFileRoute } from "@tanstack/react-router";
import { BlogDetailContainerPage } from "~c/blogs/detail/blog.container";

export const Route = createFileRoute("/blogs/$blogId")({
  component: BlogDetailContainerPage,
});
