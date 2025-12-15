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
          <div key={project.id} className="card bg-base-200 card-hover">
            <span className="card-hover-top"></span>
            <span className="card-hover-right"></span>
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
