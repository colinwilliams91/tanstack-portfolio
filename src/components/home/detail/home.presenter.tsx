import headshot from "~a/headshots/colin_williams.webp";
import awsBadge from "~a/badges/132x132_aws_badge.png";
import unityBadge from "~a/badges/132x132_unity_badge.png";
import { SocialBadges } from "~s/badges/SocialBadges";
import { EmojiBadges } from "~s/badges/EmojiBadges";
import { CertBadge } from "~s/badges/CertBadge";
import { CERT_BADGES } from "~/constants/icons/badges";

export function HomePagePresenter() {
  return (
    <div className="hero min-h-[60vh]">
        <div className="hero-content flex-col lg:flex-row gap-3">
            {/* Headshot Image */}
            <div className="flex gap-6 items-start">
                <div className="shrink-0">
                    <div className="avatar">
                        <div className="theme-abyss:ring-accent theme-winter:ring-primary-content/45 ring-offset-current/75 ring-2 ring-offset-4
                            theme:winter:ring-offset-6 rounded-tl-full rounded-b-full shadow-2xl drop-shadow-2xl animate-fade-in">
                            <img
                            src={headshot}
                            alt="Colin Williams"
                            className="w-48 md:w-64 h-68 md:h-92"
                            />
                        </div>
                    </div>
                </div>

                {/* Badges container */}
                <div className="flex flex-col justify-end h-45 md:h-56">
                    <div className="flex flex-col justify-center gap-3">
                        <CertBadge animationDelay="0.2s" href={CERT_BADGES.AWS} imgUrl={awsBadge} />
                        <CertBadge animationDelay="0.4s" href={CERT_BADGES.UNITY} imgUrl={unityBadge} />
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