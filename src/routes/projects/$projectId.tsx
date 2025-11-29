import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailContainerPage } from "~/components/projects/detail/project.container";


export const Route = createFileRoute("/projects/$projectId")({
  component: ProjectDetailContainerPage,
});
