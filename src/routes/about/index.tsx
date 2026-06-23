import { createFileRoute } from "@tanstack/react-router";
import { AboutPageContainer } from "~/components/about/about.container";
import { META } from "~/constants/data";
import friends from "~/assets/headshots/colin_and_evan_you.webp";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: META.ABOUT.TITLE },
      { name: "description", content: META.ABOUT.DESCRIPTION },
    ],
    links: [
      { rel: "preload", as: "image", href: friends },
    ],
  }),
  component: AboutPageContainer,
});
