import { type ProjectsPresenterProps } from "../abstract";
import { COPY } from "~/constants/copy";
import { FEATURED_PROJECTS } from "~/constants/featured-projects";
import { FeaturedProjectCard } from "./FeaturedProjectCard";

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
      <div className="flex items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Projects</h1>
        <span className="text-xs opacity-40">{COPY.PROJECTS_PRESENTER.DESCRIPTION}</span>
      </div>
      <div className="grid gap-4.5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((meta) => {
          const repo = data?.find((r) => r.name === meta.repoName);
          return (
            <FeaturedProjectCard key={meta.repoName} meta={meta} repo={repo} />
          );
        })}
      </div>
    </div>
  );
}
