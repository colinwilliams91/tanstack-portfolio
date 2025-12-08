import { type Blog } from "~/types/blogs/index";

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting Started with TanStack Router",
    description: "A comprehensive guide to building type-safe routing in React applications using TanStack Router.",
    coverImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--sZv7vXBx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/example1.png",
    publishedAt: "2024-01-15",
    tags: ["react", "typescript", "tanstack", "routing"],
    author: {
      name: "Colin Williams",
      profileImage: "https://avatars.githubusercontent.com/u/92059005?v=4",
    },
    content: `# Getting Started with TanStack Router

TanStack Router is a powerful, type-safe routing library for React applications. In this article, we'll explore how to set up and use TanStack Router in your projects.

## Why TanStack Router?

TanStack Router provides several advantages:

- **Type Safety**: Full TypeScript support with automatic route typing
- **File-based Routing**: Organize your routes using file structure
- **Built-in Data Loading**: Integrate with TanStack Query for seamless data fetching
- **Code Splitting**: Automatic route-based code splitting

## Installation

First, install TanStack Router:

\`\`\`bash
npm install @tanstack/react-router
\`\`\`

## Creating Your First Route

Routes are defined using the file system. Create a route file:

\`\`\`typescript
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return <h1>Welcome to TanStack Router!</h1>
}
\`\`\`

## Conclusion

TanStack Router offers a modern approach to routing in React applications with excellent TypeScript support and developer experience.`,
  },
  {
    id: 2,
    title: "Mastering React Query for State Management",
    description: "Learn how to effectively manage server state in your React applications using TanStack Query (formerly React Query).",
    coverImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--abc123xyz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/example2.png",
    publishedAt: "2024-02-10",
    tags: ["react", "state-management", "tanstack", "query"],
    author: {
      name: "Colin Williams",
      profileImage: "https://avatars.githubusercontent.com/u/92059005?v=4",
    },
    content: `# Mastering React Query for State Management

React Query (TanStack Query) has revolutionized how we handle server state in React applications. Let's dive into best practices and patterns.

## What is Server State?

Server state is fundamentally different from client state. It's:

- **Remote**: Stored on a server, not in your application
- **Asynchronous**: Requires async APIs to fetch and update
- **Shared**: Can be accessed by multiple users/components
- **Potentially Stale**: May be outdated without your knowledge

## Setting Up React Query

Install the package:

\`\`\`bash
npm install @tanstack/react-query
\`\`\`

Configure the QueryClient:

\`\`\`typescript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app */}
    </QueryClientProvider>
  )
}
\`\`\`

## Using Queries

Fetch data with the \`useQuery\` hook:

\`\`\`typescript
import { useQuery } from '@tanstack/react-query'

function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <div>{data.name}</div>
}
\`\`\`

## Best Practices

1. **Use Query Keys Effectively**: Keep them consistent and hierarchical
2. **Enable Stale Time**: Reduce unnecessary refetches
3. **Handle Loading and Error States**: Provide good UX
4. **Leverage Automatic Refetching**: Trust React Query's smart defaults

## Conclusion

React Query simplifies server state management and improves user experience with intelligent caching and background updates.`,
  },
  {
    id: 3,
    title: "Building Modern UIs with DaisyUI and Tailwind CSS",
    description: "Explore how to create beautiful, responsive user interfaces using DaisyUI component library with Tailwind CSS.",
    coverImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--def456uvw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/example3.png",
    publishedAt: "2024-03-05",
    tags: ["css", "tailwind", "daisyui", "design"],
    author: {
      name: "Colin Williams",
      profileImage: "https://avatars.githubusercontent.com/u/92059005?v=4",
    },
    content: `# Building Modern UIs with DaisyUI and Tailwind CSS

DaisyUI provides a collection of beautifully designed components built on top of Tailwind CSS. Let's explore how to use it effectively.

## Why DaisyUI?

DaisyUI extends Tailwind CSS with:

- **Pre-built Components**: Cards, buttons, modals, and more
- **Theme System**: Multiple color themes out of the box
- **Customizable**: Easily customize with Tailwind utilities
- **Semantic Class Names**: Easy to remember component names

## Installation

Add DaisyUI to your Tailwind project:

\`\`\`bash
npm install daisyui
\`\`\`

Configure in \`tailwind.config.js\`:

\`\`\`javascript
module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
}
\`\`\`

## Using Components

DaisyUI components use semantic class names:

\`\`\`jsx
// Button
<button className="btn btn-primary">Click me</button>

// Card
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content goes here</p>
  </div>
</div>

// Alert
<div className="alert alert-success">
  <span>Success message!</span>
</div>
\`\`\`

## Theme Switching

Implement dynamic theme switching:

\`\`\`jsx
function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  )
}
\`\`\`

## Responsive Design

Combine DaisyUI with Tailwind's responsive utilities:

\`\`\`jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="card">Content 1</div>
  <div className="card">Content 2</div>
  <div className="card">Content 3</div>
</div>
\`\`\`

## Conclusion

DaisyUI accelerates UI development by providing well-designed components while maintaining the flexibility of Tailwind CSS.`,
  },
];
