import { formatDataSize, getMostRecentDate, truncateDescription } from "~/handlers/utils";
import { type ProjectsPresenterProps } from "../abstract";
import { useTheme } from "~/providers/ThemeContext";

export function ProjectsPresenter({ data, isLoading }: ProjectsPresenterProps) {
  const { theme } = useTheme();

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <span className="text-xs opacity-30">Source repositories and libraries hosted on GitHub, Azure, NPM and NuGet. Games on Itch.io</span>
      </div>
      <div className="grid gap-4.5 md:grid-cols-2 lg:grid-cols-3">
        {data?.slice().sort((a, b) => b.stargazers_count - a.stargazers_count).map((project) => (
          <a href={project.url} rel="noopener noreferrer" target="_blank" key={project.id} className="hover-3d">
            <div className="card">
              <div className="card-body text-sm flex flex-col gap-2">
                <h2 className="card-title">{project.name}</h2>
                <img className="mask mask-circle w-16 h-16" src={project.owner.avatar_url} alt={project.name} />
                <div className={`text-sm p-3 italic rounded-xl ${theme === "abyss" ? "bg-base-100/40" : "bg-winter/30"}
                  shadow-md backdrop-blur-lg border border-accent-content/10
                  min-h-21`}
                >
                  {truncateDescription(project.description, 100)}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto text-xs">
                  <div className="badge badge-outline gap-1 glass">✨ {project.stargazers_count}</div>
                  <div className="badge badge-outline gap-1 glass">💻 {project.language?.length ? project.language : "N/A"}</div>
                  <div className="badge badge-outline gap-1 glass">🍴 {project.forks_count}</div>
                  <div className="badge badge-outline gap-1 glass">🗓️ {getMostRecentDate([project.updated_at, project.pushed_at])}</div>
                  <div className="badge badge-outline gap-1 glass">⚖️ {formatDataSize(project.size)}</div>
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
