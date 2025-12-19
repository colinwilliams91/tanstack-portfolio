import { SOCIAL_BADGES } from "~/constants/icons/badges";
import { ICON_PATHS } from "~/constants/icons/svg-icons";

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
