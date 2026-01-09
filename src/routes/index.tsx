import { createFileRoute } from "@tanstack/react-router";
import { HomeContainerPage } from "~c/home/detail/home.container";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colin Williams - Full-Stack Software Engineer & Web Developer" },
      { name: "description", content: "Welcome to Colin Williams' portfolio. Full-stack software engineer with expertise in React, TypeScript, TanStack, .NET, AWS, and modern web technologies. Contributing to open source projects like Microsoft Aspire." },
    ],
  }),
  component: HomeContainerPage,
});
