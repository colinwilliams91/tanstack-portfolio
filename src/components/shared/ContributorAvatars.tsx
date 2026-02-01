import { useQuery } from "@tanstack/react-query";
import { fetchContributors } from "~/handlers/fetch/contributors";
import { type GitHubRepository } from "~/types/projects/index";

interface ContributorAvatarsProps {
  repository: GitHubRepository;
  maxAvatars?: number;
}

/**
 * ContributorAvatars component displays a stack of contributor avatars
 * The repository owner's avatar is always shown on top
 * Other contributor avatars are fetched and displayed with placeholders during loading
 */
export function ContributorAvatars({ repository, maxAvatars = 5 }: ContributorAvatarsProps) {
  const { data: contributors, isLoading } = useQuery({
    queryKey: ['contributors', repository.full_name],
    queryFn: () => fetchContributors(repository.contributors_url),
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    enabled: !!repository.contributors_url,
  });

  // Always show owner first, then other contributors (excluding owner if they appear in contributors list)
  const owner = repository.owner;
  const otherContributors = contributors?.filter(c => c.login !== owner.login).slice(0, maxAvatars - 1) || [];
  
  // Calculate number of placeholders to show while loading
  const placeholderCount = isLoading ? maxAvatars - 1 : 0;

  return (
    <div className="stack">
      {/* Owner avatar - always visible */}
      <div className="avatar">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={owner.avatar_url} alt={owner.login} />
        </div>
      </div>

      {/* Show placeholders while loading */}
      {isLoading && Array.from({ length: placeholderCount }).map((_, index) => (
        <div key={`placeholder-${index}`} className="avatar avatar-placeholder">
          <div className="w-10 rounded-full bg-neutral text-neutral-content ring ring-base-300 ring-offset-base-100 ring-offset-2">
            <span className="text-xs">{index + 1}</span>
          </div>
        </div>
      ))}

      {/* Other contributor avatars - shown after loading */}
      {!isLoading && otherContributors.map((contributor, index) => (
        <div key={contributor.id} className="avatar">
          <div className="w-10 rounded-full ring ring-base-300 ring-offset-base-100 ring-offset-2">
            <img src={contributor.avatar_url} alt={contributor.login} title={`${contributor.login} (${contributor.contributions} contributions)`} />
          </div>
        </div>
      ))}
    </div>
  );
}
