import { createFileRoute } from "@tanstack/react-router";
import { AboutPageContainer } from "~/components/about/about.container";
import { META } from "~/constants/data";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: META.about.title },
      { name: "description", content: META.about.description },
    ],
  }),
  component: AboutPageContainer,
});
