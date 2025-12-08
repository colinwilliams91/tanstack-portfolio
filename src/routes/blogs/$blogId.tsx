import { createFileRoute } from "@tanstack/react-router";
import { BlogDetailContainerPage } from "~/components/blogs/detail/blog.container";

export const Route = createFileRoute("/blogs/$blogId")({
  component: BlogDetailContainerPage,
});
