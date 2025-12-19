import { ICON_PATHS } from "~/constants/svg-icons";

// TODO: move to types
interface SocialBadge {
  href: string;
  tooltip: string;
  icon: string;
  viewBox: string;
}

// TODO: move to constants
const SOCIAL_BADGES: SocialBadge[] = [
  {
    href: "https://github.com/colinwilliams91",
    tooltip: "GitHub",
    icon: ICON_PATHS.GITHUB,
    viewBox: "0 0 512 512",
  },
  {
    href: "https://www.linkedin.com/in/colin-williams-dev/",
    tooltip: "LinkedIn",
    icon: ICON_PATHS.LINKEDIN,
    viewBox: "0 0 448 512",
  },
  {
    href: "https://docs.google.com/document/d/1RnFJQswy0fLqMHV6SfAWb_db2VUh3s7dh2bbxqi8Lm0/edit?usp=sharing",
    tooltip: "Resume",
    icon: ICON_PATHS.RESUME,
    viewBox: "0 0 384 512",
  },
  {
    href: "mailto:colin.williams.dev@gmail.com",
    tooltip: "Email",
    icon: ICON_PATHS.EMAIL,
    viewBox: "0 0 512 512",
  },
];

export function SocialBadges() {
  return (
    <div className="flex gap-[0.1rem] justify-center lg:justify-start">
      {SOCIAL_BADGES.map((badge) => (
        <div key={badge.tooltip} className="tooltip" data-tip={badge.tooltip}>
          <a
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-circle btn-ghost"
            aria-label={badge.tooltip}
          >
            <svg
              xmlns={ICON_PATHS.W3}
              viewBox={badge.viewBox}
              className="h-6 w-6 fill-current"
            >
              <path d={badge.icon} />
            </svg>
          </a>
        </div>
      ))}
    </div>
  );
}
