import { type FeaturedProjectMeta, REGISTRY_LABELS } from "~/constants/featured-projects";
import { type GitHubRepository } from "~/types/projects";
import { Icon } from "~/components/shared/Icon";
import { getLanguageIcon, getMostRecentDate } from "~/handlers/utils";
import { useTheme } from "~/providers/ThemeContext";

interface FeaturedProjectCardProps {
  meta: FeaturedProjectMeta;
  repo?: GitHubRepository;
}

export function FeaturedProjectCard({ meta, repo }: FeaturedProjectCardProps) {
  const { theme } = useTheme();
  const registry = REGISTRY_LABELS[meta.registry];

  return (
    /* hover-3d outer wrapper – must have exactly 9 children (content + 8 zones) */
    <a
      href={meta.packageUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hover-3d group"
      aria-label={`View ${meta.displayName} on ${registry.label}`}
    >
      <div
        className={`card relative overflow-hidden min-h-80 px-6 pt-6 cursor-default
          ${theme === "abyss" ? "bg-base-200/5" : "bg-base-100/60"}`}
      >
        {/* ── PRIMARY IMAGE ────────────────────────────────────────────── */}
        {meta.imageUrl && (
          <figure>
            <img
              src={meta.imageUrl}
              alt={`${meta.displayName} preview`}
              className="rounded-2xl w-full h-48 object-cover bg-white/90"
              loading="lazy"
            />
          </figure>
        )}

        {/* ── FRONT FACE (default visible) ─────────────────────────────── */}
        <div
          className="card-body flex flex-col gap-2 text-sm
            transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none"
        >
          {/* Title */}
          {/* <h2 className="card-title line-clamp-1 text-base">{meta.displayName}</h2> */}

          {/* Title + Avatar + Language icon row */}
          <div className="flex gap-3 items-center px-2">
            {repo ? (
              <>
                <img
                  className="mask mask-circle w-14 h-14"
                  src={repo.owner.avatar_url}
                  alt={repo.owner.login}
                />
              </>
              ) : (
                <div className="mask mask-circle w-14 h-14 bg-base-300 flex items-center justify-center text-2xl">
                  👤
                </div>
              )}
            <Icon
              name={getLanguageIcon(meta.language)}
              className="w-11 h-11"
              aria-label={`${meta.language} icon`}
            />
            <h2 className="card-title line-clamp-1 text-base ml-auto">{meta.displayName}</h2>
          </div>

          {/* Registry label */}
          <div
            className={`text-xs px-3 py-2 italic rounded-xl
              ${theme === "abyss" ? "bg-base-100/40" : "bg-winter/30"}
              shadow-md backdrop-blur-lg border border-accent-content/10`}
          >
            {registry.emoji} Published on {registry.label}
          </div>

          {/* Badges */}
          <div className="flex flex-col gap-3 mt-1 text-xs">
            {/* Row 1: stars + language + date */}
            <div className="flex flex-wrap gap-1.5">
              {repo !== undefined && (
                <div className="badge badge-outline gap-1 glass">
                  ✨ {repo.stargazers_count}
                </div>
              )}
              <div className="badge badge-outline gap-1 glass">
                💻 {meta.language}
              </div>
              {repo && (
                <div className="badge badge-outline gap-1 glass">
                  🗓️ {getMostRecentDate([repo.updated_at, repo.pushed_at])}
                </div>
              )}
            </div>
            {/* Row 2: download / usage metric */}
            <div className="badge badge-outline gap-1 glass w-full justify-start">
              {meta.stat.emoji} {meta.stat.label}
            </div>
          </div>

          {/* Action links */}
          <div className="flex gap-2 mt-1">
            <a
              href={meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs btn-ghost gap-1 flex-1"
              aria-label="View on GitHub"
            >
              <Icon name="github" className="w-3.5 h-3.5 fill-current" />
              Code
            </a>
            <a
              href={meta.packageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs btn-ghost gap-1 flex-1"
              aria-label={`View on ${registry.label}`}
            >
              {registry.emoji} {registry.label}
            </a>
          </div>
        </div>

        {/* ── HOVER FACE (shown on hover) ──────────────────────────────── */}
        <div
          className={`absolute inset-0 p-4 flex flex-col gap-3 overflow-y-auto
            opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
            transition-opacity duration-300 rounded-2xl
            ${theme === "abyss" ? "bg-base-200/90" : "bg-base-100/95"}
            backdrop-blur-md`}
        >
          <h3 className="font-bold text-sm">{meta.displayName}</h3>
          <p className="text-xs leading-relaxed opacity-90 italic">{meta.story}</p>
          <p className="text-xs leading-relaxed opacity-70">{meta.summary}</p>

          {/* Repeated links so they're accessible from the hover face too */}
          <div className="flex gap-2 mt-auto">
            <a
              href={meta.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs btn-ghost gap-1 flex-1"
              aria-label="View on GitHub"
            >
              <Icon name="github" className="w-3.5 h-3.5 fill-current" />
              Code
            </a>
            <a
              href={meta.packageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs btn-ghost gap-1 flex-1"
              aria-label={`View on ${registry.label}`}
            >
              {registry.emoji} {registry.label}
            </a>
          </div>
        </div>
      </div>

      {/* 8 hover-zone children required by hover-3d */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </a>
  );
}
