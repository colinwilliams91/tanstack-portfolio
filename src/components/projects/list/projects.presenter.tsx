import { formatDataSize, getMostRecentDate } from "~/handlers/utils";
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
            <div className="card bg-base-200 shadow-sm hover:shadow-md rounded-box">
              <div className="card-body text-sm">
                <h2 className="card-title">{project.name}</h2>
                <img className="mask mask-circle w-16 h-16" src={project.owner.avatar_url} alt={project.name} />
                <div className="text-sm p-3 bg-base-100/30
                  opacity-80 italic shadow-sm rounded-box backdrop-blur-lg"
                >{project.description}
                </div>
                <div>💻 {project.language?.length ? project.language : "N/A"}</div>
                <div>✨ {project.stargazers_count}</div>
                <div>🍴 {project.forks_count}</div>
                <div>🗓️ {getMostRecentDate([project.updated_at, project.pushed_at])}</div>
                <div>⚖️ {formatDataSize(project.size)}</div>
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
