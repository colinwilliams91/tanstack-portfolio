import { createFileRoute } from "@tanstack/react-router";
import { WhoamiContainer } from "~/components/whoami/whoami.container";

export const Route = createFileRoute("/whoami/")({
  head: () => ({
    meta: [
      { title: "whoami | Colin Williams" },
      {
        name: "description",
        content:
          "Beyond the terminal — personal writings, artifacts, and archives.",
      },
    ],
  }),
  component: WhoamiContainer,
});
