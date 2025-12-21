import { formatDataSize, getMostRecentDate, truncateDescription } from "~/handlers/utils";
import { type ProjectsPresenterProps } from "../abstract";

export function ProjectsPresenter({ data, isLoading }: ProjectsPresenterProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid gap-4.5 md:grid-cols-2 lg:grid-cols-3">
        {data?.slice().sort((a, b) => b.stargazers_count - a.stargazers_count).map((project) => (
          <a href={project.url} rel="noopener noreferrer" target="_blank" key={project.id} className="hover-3d">
            <div className="card">
              <div className="card-body text-sm flex flex-col gap-2">
                <h2 className="card-title">{project.name}</h2>
                <img className="mask mask-circle w-16 h-16" src={project.owner.avatar_url} alt={project.name} />
                <div className="text-sm p-3 italic rounded-xl bg-base-100/60
                  opacity-80 shadow-md backdrop-blur-lg border border-accent-content/10
                  min-h-21"
                >
                  {truncateDescription(project.description, 100)}
                </div>
                <div className="flex flex-col gap-1 mt-auto">
                  <div>💻 {project.language?.length ? project.language : "N/A"}</div>
                  <div>✨ {project.stargazers_count}</div>
                  <div>🍴 {project.forks_count}</div>
                  <div>🗓️ {getMostRecentDate([project.updated_at, project.pushed_at])}</div>
                  <div>⚖️ {formatDataSize(project.size)}</div>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </a>
        ))}
      </div>
    </div>
  );
}
