import { ReactNode } from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { Header } from "~/components/shared/Header";
import { queryClient } from "~/router";
import { ThemeProvider, useTheme } from "~/providers/ThemeContext";
import { ErrorLogComponent } from "~/components/shared/ErrorLog";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Portfolio" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
  errorComponent: ErrorLogComponent,
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
      <body className="min-h-screen bg-base-100">
        <QueryClientProvider client={queryClient}>
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </QueryClientProvider>
        <Scripts />
        <TanStackRouterDevtools position="bottom-right" />
      </body>
    </html>
  );
}
