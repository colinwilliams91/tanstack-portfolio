import { Link } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { type BlogsPresenterProps } from "../abstract";
import { useTheme } from "~/providers/ThemeContext";
import { THEMES } from "~/constants/themes";
import { QUERY_OPTIONS } from "~/constants/queries/query-options";
import { useMemo } from "react";

export function BlogsPresenter({ data, isLoading }: BlogsPresenterProps) {
  const queryClient = useQueryClient();
  const themeContext = useTheme();
  const isDark = useMemo(() => themeContext.theme === THEMES.ABYSS, [themeContext.theme]);

  const handleBlogHover = (blogId: number) => {
    // Prefetch the blog detail data when user hovers over a blog card
    queryClient.prefetchQuery(QUERY_OPTIONS.BLOGS.DETAIL(blogId));
  };

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
            className="hover-3d"
            onMouseEnter={() => handleBlogHover(blog.id)}
          >
            <div className="card">
              <div className="card-body">
                {/* Author info with profile picture */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
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
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="label-text opacity-70 text-xs">✨</span>
                    <div className={`badge bg-success/15 border border-accent-content/15 w-7 h-7 rounded-full
                      flex items-center justify-center text-xs shadow-md`}>
                        {blog.public_reactions_count}
                    </div>
                  </div>
                </div>

                {/* Cover image thumbnail */}
                {blog.cover_image && (
                  <figure className="mb-4">
                    <img
                      src={blog.cover_image}
                      alt={blog.title}
                      className="rounded-2xl w-full h-48 object-cover"
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
                    <span key={index} className="badge badge-sm bg-success/15 border
                      border-accent-content/15 backdrop-blur-2xl shadow-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Date */}
                <div className="flex items-center justify-between text-xs opacity-60 mt-2">
                  <div>
                    {new Date(blog.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div>{blog.reading_time_minutes} min read</div>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
