import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

interface Project {
  id: number;
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Project One",
    description: "A sample project demonstrating TanStack Query caching.",
  },
  {
    id: 2,
    name: "Project Two",
    description: "Another project showcasing clean architecture.",
  },
  {
    id: 3,
    name: "Project Three",
    description: "A minimal project with SOLID principles.",
  },
];

const SIMULATION_DELAY_MS = 500;

async function fetchProjects(): Promise<Project[]> {
  // Simulate network delay to demonstrate caching
  await new Promise((resolve) => setTimeout(resolve, SIMULATION_DELAY_MS));
  return projects;
}

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
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
