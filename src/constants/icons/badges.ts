import { SocialBadge } from "~c/shared/abstract";
import { API_URLS } from "../public-api-urls";


export const SOCIAL_BADGES: SocialBadge[] = [
  {
    href: API_URLS.GITHUB.PROFILE,
    tooltip: "GitHub",
    iconName: "github",
  },
  {
    href: API_URLS.LINKED_IN.PROFILE,
    tooltip: "LinkedIn",
    iconName: "linkedin",
  },
  {
    href: API_URLS.RESUME,
    tooltip: "Resume",
    iconName: "resume",
  },
  {
    href: API_URLS.EMAIL,
    tooltip: "Email",
    iconName: "email",
  },
];

export const CERT_BADGES = {
  AWS: "https://www.credly.com/badges/cdb945ba-a828-466b-ae44-c9e4fbfd783d",
  UNITY: "https://www.credly.com/badges/60bd0c80-8eac-447a-95c7-5965f8f544a6"
} as const;

export const EMOJI_BADGES: string[] = [
    "🌴", "🍃", "🐊", "✒️"
] as const;
