import { Theme } from "~/types/themes";

export const THEMES = {
  KEY: "theme",
  WINTER: "winter" satisfies Theme,
  ABYSS: "abyss" satisfies Theme,
} as const;
