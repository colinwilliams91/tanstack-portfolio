import headshot from "~/assets/headshots/colin_williams.webp";
import awsBadge from "~/assets/badges/132x132_aws_badge.png";
import unityBadge from "~/assets/badges/132x132_unity_badge.png";
import { SocialBadges } from "./SocialBadges"; // oklch(0.9 0.08 70.42)
import { EmojiBadges } from "./EmojiBadges";

export function HomePage() {
  return (
    <div className="hero min-h-[60vh]">
      <div className="hero-content flex-col lg:flex-row gap-3">
        <div className="flex gap-6 items-start">
          {/* Headshot Image */}
          <div className="shrink-0">
            <div className="avatar">
              <div className="ring-accent ring-offset-current/85 shadow-2xl drop-shadow-2xl ring-offset-2 rounded-tl-full rounded-b-full animate-fade-in">
                <img
                  src={headshot}
                  alt="Colin Williams"
                  className="w-48 md:w-64 h-68 md:h-92"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end h-46 md:h-56">
            {/* Badges container */}
            <div className="flex flex-col justify-center gap-3">
              <div className="opacity-0 animate-fade-in"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                <img
                  src={awsBadge}
                  alt="AWS Badge"
                  className="w-20 md:w-24"
                />
              </div>
              <div className="opacity-0 animate-fade-in"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                <img
                  src={unityBadge}
                  alt="Unity Badge"
                  className="w-20 md:w-24"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Badges */}
        <div className="text-center lg:text-left max-w-md">
          <SocialBadges />
          <EmojiBadges />
        </div>
      </div>
    </div>
  );
}