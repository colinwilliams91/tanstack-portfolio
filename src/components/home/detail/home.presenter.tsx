import headshot from "~a/headshots/colin_williams.webp";
import awsBadge from "~a/badges/132x132_aws_badge.png";
import unityBadge from "~a/badges/132x132_unity_badge.png";
import { SocialBadges } from "~s/badges/SocialBadges";
import { EmojiBadges } from "~s/badges/EmojiBadges";
import { CertBadge } from "~s/badges/CertBadge";
import { CERT_BADGES } from "~/constants/icons/badges";

export function HomePagePresenter() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Colin Williams",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Full-stack software engineer specializing in React, TypeScript, TanStack, .NET, and cloud technologies",
    "url": "https://colin-williams.netlify.app",
    "sameAs": [
      "https://github.com/colinwilliams91",
      "https://www.linkedin.com/in/colin-williams-dev/",
      "https://dev.to/colin-williams-dev"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "TanStack",
      ".NET",
      "C#",
      "AWS",
      "Cloud Computing",
      "Web Development",
      "Full-Stack Development",
      "Software Engineering"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "AWS Certified Solutions Architect"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
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
                              alt="Colin Williams - Full-Stack Software Engineer and Web Developer"
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

              {/* Social Badges and Content */}
              <div className="text-center lg:text-left max-w-md">
                  <h1 className="text-4xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                      Colin Williams
                  </h1>
                  <h2 className="text-xl mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                      Full-Stack Software Engineer
                  </h2>
                  <SocialBadges />
                  <EmojiBadges />
              </div>
          </div>
      </div>
    </>
  );
}