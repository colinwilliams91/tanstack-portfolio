import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "~/constants/query-keys";
import { fetchProjects } from "~/handlers/fetch/projects";


// TODO: consider adding the fetchProjects (or query-client embedded fn equivalent..) to route loader for SSR prefetching
// e.g. loader: fetchProjects inside the options arg of createFileRoute
// with this, we can break out this file into container/presenter components (components/projects/container.projects.tsx and presenter.projects.tsx)
// the Route still must be initialized and registered here for TanStacks file-based routing to work
export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const { data, isLoading } = useQuery({
    queryKey: QUERY_KEYS.PROJECTS,
    queryFn: fetchProjects,
  });

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
          <div key={project.id} className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
