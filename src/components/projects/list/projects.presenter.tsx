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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((project) => (
          <div key={project.id} className="card bg-base-200 shadow-sm hover:shadow-md hover-3d transition-shadow">
            <div className="card-body text-sm">
              <h2 className="card-title">{project.name}</h2>
              <img className="mask mask-circle w-16 h-16" src={project.owner.avatar_url} alt={project.name} />
              <p className="text-sm p-3 bg-base-100/30 opacity-80 italic shadow-md rounded-box backdrop-blur-sm ">{project.description}</p>
              <p>💻 {project.language?.length ? project.language : "N/A"}</p>
              <p>✨ {project.stargazers_count}</p>
              <p>🍴 {project.forks_count}</p>
              <p>🗓️ {getMostRecentDate([project.updated_at, project.pushed_at])}</p>
              <p>⚖️ {formatDataSize(project.size)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
