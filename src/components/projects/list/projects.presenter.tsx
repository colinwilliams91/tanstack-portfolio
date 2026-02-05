import { formatDataSize, getMostRecentDate, truncateDescription } from "~/handlers/utils";
import { type ProjectsPresenterProps } from "../abstract";
import { useTheme } from "~/providers/ThemeContext";
import { COPY } from "~/constants/copy";
import { Icon } from "~/components/shared/Icon";
import { getLanguageIcon } from "~/handlers/utils";

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
        <span className="text-xs opacity-40">{COPY.PROJECTS_PRESENTER.DESCRIPTION}</span>
      </div>
      <div className="grid gap-4.5 md:grid-cols-2 lg:grid-cols-3">
        {data?.slice().sort((a, b) => b.stargazers_count - a.stargazers_count).map((project) => (
          <a href={project.html_url} rel="noopener noreferrer" target="_blank" key={project.id} className="hover-3d">
            <div className="card">
              <div className="card-body text-sm flex flex-col gap-2">
                <h2 className="card-title line-clamp-1">{project.name}</h2>
                <div className="flex justify-between items-center px-2">
                  <img className="mask mask-circle w-16 h-16" src={project.owner.avatar_url} alt={project.name} />
                  <Icon name={getLanguageIcon(project.language)} className="w-12 h-12" aria-label={`${project.language} language icon`}/>
                </div>
                <div className={`text-sm p-3 italic rounded-xl ${theme === "abyss" ? "bg-base-100/40" : "bg-winter/30"}
                  shadow-md backdrop-blur-lg border border-accent-content/10
                  min-h-22`}
                >
                  {truncateDescription(project.description, 100)}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto text-xs">
                  <div className="badge badge-outline gap-1 glass">✨ {project.stargazers_count}</div>
                  <div className="badge badge-outline gap-1 glass">💻 {project.language?.length ? project.language : "N/A"}</div>
                  <div className="badge badge-outline gap-1 glass">🗓️ {getMostRecentDate([project.updated_at, project.pushed_at])}</div>
                  <div className="badge badge-outline gap-1 glass">🍴 {project.forks_count}</div>
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
