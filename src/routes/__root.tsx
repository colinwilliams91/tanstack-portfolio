import { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
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
      { title: "Portfolio" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
      },
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
          <ReactQueryDevtools buttonPosition="bottom-left"/>
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
