import { Link } from "@tanstack/react-router";
import { type BlogsPresenterProps } from "../abstract";

export function BlogsPresenter({ data, isLoading }: BlogsPresenterProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((blog) => (
          <Link
            key={blog.id}
            to="/blogs/$blogId"
            params={{ blogId: String(blog.id) }}
            className="card bg-base-200 hover:shadow-xl transition-shadow"
          >
            <div className="card-body">
              {/* Author info with profile picture */}
              <div className="flex items-center gap-2 mb-2">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={blog.user.profile_image_90}
                      alt={blog.user.name}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium">{blog.user.name}</span>
              </div>

              {/* Cover image thumbnail */}
              {blog.cover_image && (
                <figure className="mb-4">
                  <img
                    src={blog.cover_image}
                    alt={blog.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </figure>
              )}

              {/* Title */}
              <h2 className="card-title">{blog.title}</h2>

              {/* Description */}
              <p className="text-sm opacity-70 line-clamp-3">{blog.description}</p>

              {/* Tags - display up to 4 */}
              <div className="flex flex-wrap gap-2 mt-2">
                {blog.tag_list.map((tag, index) => (
                  <span key={index} className="badge badge-primary badge-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Date */}
              <div className="text-xs opacity-60 mt-2">
                {new Date(blog.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
