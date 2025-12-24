import { SocialBadge } from "~c/shared/abstract";
import { API_URLS } from "../public-api-urls";
import { ICON_PATHS } from "./svg-icons";


export const SOCIAL_BADGES: SocialBadge[] = [
  {
    href: API_URLS.GITHUB.PROFILE,
    tooltip: "GitHub",
    icon: ICON_PATHS.GITHUB,
    viewBox: "0 0 512 512",
  },
  {
    href: API_URLS.LINKED_IN.PROFILE,
    tooltip: "LinkedIn",
    icon: ICON_PATHS.LINKEDIN,
    viewBox: "0 0 448 512",
  },
  {
    href: API_URLS.RESUME,
    tooltip: "Resume",
    icon: ICON_PATHS.RESUME,
    viewBox: "0 0 384 512",
  },
  {
    href: API_URLS.EMAIL,
    tooltip: "Email",
    icon: ICON_PATHS.EMAIL,
    viewBox: "0 0 512 512",
  },
];

export const CERT_BADGES = {
  AWS: "https://www.credly.com/badges/cdb945ba-a828-466b-ae44-c9e4fbfd783d",
  UNITY: "https://www.credly.com/badges/60bd0c80-8eac-447a-95c7-5965f8f544a6"
} as const;

export const EMOJI_BADGES: string[] = [
    "🌴", "🍃", "🐊", "✒️"
] as const;
