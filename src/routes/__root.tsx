import { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { Header } from "~c/shared/Header";
import { DeviceDiagnosticsContainer } from "~c/shared/diagnostics/diagnostics.container";
import { queryClient } from "~/router";
import { ThemeProvider, useTheme } from "~/providers/ThemeContext";
import { ErrorLogComponent } from "~c/shared/errors/ErrorLog";
import { NotFound } from "~c/shared/errors/NotFound";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Colin Williams - Full-Stack Software Engineer | Web Developer Portfolio" },
      { name: "description", content: "Colin Williams is a full-stack software engineer and web developer specializing in React, TypeScript, TanStack, .NET, and cloud technologies. Explore projects, blog posts, and technical expertise." },
      { name: "keywords", content: "Colin Williams, software engineer, web developer, full-stack developer, React developer, TypeScript, TanStack, .NET, AWS, cloud computing, software development portfolio" },
      { name: "author", content: "Colin Williams" },
      { name: "robots", content: "index, follow" },
      
      // Open Graph meta tags for social sharing
      { property: "og:title", content: "Colin Williams - Full-Stack Software Engineer" },
      { property: "og:description", content: "Full-stack software engineer specializing in React, TypeScript, TanStack, and cloud technologies. View my portfolio, projects, and technical blog." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://colin-williams.netlify.app" },
      { property: "og:site_name", content: "Colin Williams Portfolio" },
      { property: "og:image", content: "https://colin-williams.netlify.app/og-image.webp" },
      { property: "og:image:width", content: "500" },
      { property: "og:image:height", content: "752" },
      { property: "og:image:alt", content: "Colin Williams - Full-Stack Software Engineer" },
      
      // Twitter Card meta tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Colin Williams - Full-Stack Software Engineer" },
      { name: "twitter:description", content: "Full-stack software engineer specializing in React, TypeScript, TanStack, and cloud technologies." },
      { name: "twitter:image", content: "https://colin-williams.netlify.app/og-image.webp" },
      { name: "twitter:image:alt", content: "Colin Williams - Full-Stack Software Engineer" },
      { name: "twitter:creator", content: "@colinwilliams91" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
      },
      { rel: "canonical", href: "https://colin-williams.netlify.app" },
    ],
  }),
  component: RootComponent,
  errorComponent: ErrorLogComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <ThemeProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ThemeProvider>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-base-100 font-mono selection:bg-base-300/75 selection:text-accent-content">
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <DeviceDiagnosticsContainer />
        </QueryClientProvider>
        <Scripts />
        <TanStackRouterDevtools position="bottom-left" />
        <footer className="container mx-auto px-6 py-6 opacity-60 text-xs text-center mt-auto">
          <div>
            ｡˚☁️©️ colin williams • {new Date().getFullYear()} ˚｡˚
          </div>
          <div>
            ˚➶ ｡˚ ☁️build: {__BUILD_VERSION__}
            {__BUILD_COMMIT__ ? ` · ${__BUILD_COMMIT__}` : ''} ˋ°•*⁀➷
          </div>
        </footer>
      </body>
    </html>
  );
}
