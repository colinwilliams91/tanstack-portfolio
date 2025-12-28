import { createFileRoute } from "@tanstack/react-router";
import { HomeContainerPage } from "~c/home/detail/home.container";

export const Route = createFileRoute("/")({
  component: HomeContainerPage,
});
