import { Link } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { type BlogDetailPresenterProps } from "../abstract";

export function BlogDetailPresenter({ blog, isLoading }: BlogDetailPresenterProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <Link to="/blogs" className="btn btn-primary">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back button */}
      <Link to="/blogs" className="btn btn-ghost mb-6">
        ← Back to Blogs
      </Link>

      {/* Cover image */}
      {blog.coverImage && (
        <figure className="mb-6">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="rounded-lg w-full max-h-96 object-cover"
          />
        </figure>
      )}

      {/* Title */}
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {/* Author and date info */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/about" className="flex items-center gap-2 hover:opacity-80">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full">
              <img 
                src={blog.author.profileImage} 
                alt={blog.author.name}
              />
            </div>
          </div>
          <span className="font-medium">{blog.author.name}</span>
        </Link>
        <span className="opacity-60">•</span>
        <span className="opacity-60">
          {new Date(blog.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {blog.tags.map((tag, index) => (
          <span key={index} className="badge badge-primary">
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-lg opacity-80 mb-8">{blog.description}</p>

      {/* Markdown content */}
      <div className="prose max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {blog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
