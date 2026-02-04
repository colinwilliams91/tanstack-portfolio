import { createFileRoute } from "@tanstack/react-router";
import { META } from "~/constants/data";
import { HomeContainerPage } from "~c/home/detail/home.container";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title:  META.INDEX.TITLE },
      { name: "description", content: META.INDEX.DESCRIPTION },
    ],
  }),
  component: HomeContainerPage,
});
