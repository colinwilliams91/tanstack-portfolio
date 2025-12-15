import { Link } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import { type BlogDetailPresenterProps } from "../abstract";
import { ErrorHandleComponent } from "~/components/shared/ErrorHandle";

export function BlogDetailPresenter({ blog, isLoading }: BlogDetailPresenterProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!blog) {
    return <ErrorHandleComponent
      redirectLink="/blogs"
      errorText="Blog not found"
      redirectText="Back to Blogs"/>;
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Back button */}
      <Link to="/blogs" className="btn btn-ghost mb-6">
        ← Back to Blogs
      </Link>

      {/* Blog card container */}
      <div className="card bg-base-200 shadow-xl">
        {/* Cover image */}
        {blog.cover_image && (
          <figure>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              <img
                src={blog.cover_image}
                alt={blog.title}
                className="w-full max-h-96 object-cover hover:opacity-90 transition-opacity"
              />
            </a>
          </figure>
        )}

        <div className="card-body">

          {/* Title */}
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

          {/* Author and date info */}
          <div className="flex items-center gap-4 mb-6">
            <Link to="/about" className="flex items-center gap-2 hover:opacity-80">
              <div className="avatar">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src={blog.user.profile_image_90}
                    alt={blog.user.name}
                  />
                </div>
              </div>
              <span className="font-medium">{blog.user.name}</span>
            </Link>
            <span className="opacity-60">•</span>
            <span className="opacity-60">
              {new Date(blog.published_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blog.tag_list.map((tag, index) => (
              <span key={index} className="badge badge-primary">
                {tag}
              </span>
            ))}
          </div>

          {/* Markdown content */}
          <div className="prose px-8 py-2 max-w-none">
            <ReactMarkdown children={blog.body_markdown} />
          </div>
        </div>
      </div>
    </div>
  );
}
