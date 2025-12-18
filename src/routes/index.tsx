import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "~c/shared/HomePage";

export const Route = createFileRoute("/")({
  component: HomePage,
});
