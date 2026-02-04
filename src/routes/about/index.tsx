import { createFileRoute } from "@tanstack/react-router";
import { AboutPageContainer } from "~/components/about/about.container";
import { META } from "~/constants/data";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: META.ABOUT.TITLE },
      { name: "description", content: META.ABOUT.DESCRIPTION },
    ],
  }),
  component: AboutPageContainer,
});
