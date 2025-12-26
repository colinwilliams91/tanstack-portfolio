import { type GitHubRepository } from "~/types/projects/index";

// Legacy type for backward compatibility with old dummy data
type Project = {
  id: number;
  name: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "TanStack Portfolio",
    description: "A portfolio web application built with TanStack Start, showcasing modern React patterns with file-based routing and React Query for server state management.",
  },
  {
    id: 2,
    name: "E-Commerce Dashboard",
    description: "Full-stack dashboard application with real-time inventory tracking, analytics visualization, and role-based access control using TypeScript and PostgreSQL.",
  },
  {
    id: 3,
    name: "AI Chat Interface",
    description: "Interactive chat application leveraging OpenAI APIs with streaming responses, conversation history, and markdown rendering support.",
  },
  {
    id: 4,
    name: "Weather Forecast App",
    description: "Progressive web app displaying 7-day weather forecasts with geolocation support, interactive maps, and offline caching capabilities.",
  },
  {
    id: 5,
    name: "Task Management System",
    description: "Kanban-style task manager with drag-and-drop functionality, team collaboration features, and real-time sync across devices.",
  },
  {
    id: 6,
    name: "Blog Platform",
    description: "Content management system with MDX support, syntax highlighting, SEO optimization, and automated social media sharing.",
  },
];