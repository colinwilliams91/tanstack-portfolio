/**
 * Static data for the 3 featured projects displayed on the Projects page.
 * GitHub metadata (stars, avatar, etc.) is merged in at runtime from the GitHub API.
 */

export type RegistryType = "nuget" | "npm" | "vscode";

export interface FeaturedProjectMeta {
  /** Exact name that matches the GitHub repository name */
  repoName: string;
  displayName: string;
  githubUrl: string;
  packageUrl: string;
  registry: RegistryType;
  /** The primary coding language used */
  language: string;
  /** Badge shown on the card – the "peak / most impressive" metric */
  stat: {
    emoji: string;
    label: string;
  };
  /** Short paragraph shown on card hover */
  story: string;
  /** One-to-two sentence technical summary shown below the story on hover */
  summary: string;
}

export const REGISTRY_LABELS: Record<RegistryType, { emoji: string; label: string }> = {
  nuget:  { emoji: "📦", label: "NuGet" },
  npm:    { emoji: "📦", label: "NPM" },
  vscode: { emoji: "🔧", label: "VS Code Marketplace" },
};

export const FEATURED_PROJECTS: FeaturedProjectMeta[] = [
  {
    repoName:    "StaticFileOptionsExtender",
    displayName: "StaticFileOptionsExtender",
    githubUrl:   "https://github.com/colinwilliams91/StaticFileOptionsExtender",
    packageUrl:  "https://www.nuget.org/packages/CWDev.StaticFileOptionsExtender/",
    registry:    "nuget",
    language:    "c#",
    stat: {
      emoji: "⬇️",
      label: "1,949 NuGet downloads",
    },
    story:
      "I was working on a simple .NET HTTP server with static assets for a game I built with Unity. I was seeing errors that apparently a lot of other users saw (e.g. Stack Overflow) with content-type and MIME type headers/handshake problems, so I built this package to address the problem.",
    summary:
      "A .NET middleware package that extends StaticFileOptions, providing correct MIME-type and content-type header defaults for static file servers with minimal configuration.",
  },
  {
    repoName:    "gaitor-orchestrator-cli",
    displayName: "gaitor-orchestrator-cli",
    githubUrl:   "https://github.com/colinwilliams91/gaitor-orchestrator-cli",
    packageUrl:  "https://www.npmjs.com/package/gaitor-orchestrator-cli",
    registry:    "npm",
    language:    "go",
    stat: {
      emoji: "📈",
      label: "295 peak weekly downloads",
    },
    story:
      "GAITOR CLI is my way of modularizing all of the AI-DDLC features I want to use in every project. It started as a template repository and graduated into a CLI and then a TUI as my needs became more complex and diverse. The point was also to expose ways to customize and optimize AI features in a simplistic, deterministic, and context-aware fashion. Started in TypeScript and then ported to Go.",
    summary:
      "A cross-platform CLI/TUI tool that scaffolds AI-driven development workflows, providing customizable, context-aware code generation and project bootstrapping — originally written in TypeScript, later ported to Go.",
  },
  {
    repoName:    "pretty-go-errors",
    displayName: "pretty-go-errors",
    githubUrl:   "https://github.com/colinwilliams91/pretty-go-errors",
    packageUrl:
      "https://marketplace.visualstudio.com/items?itemName=CWDev.pretty-go-errors",
    registry:    "vscode",
    language:    "typescript",
    stat: {
      emoji: "🚀",
      label: "53 installs in first 3 days",
    },
    story:
      "This VS Code extension was a learning experiment in multiple ways. As I was porting my AI-DDLC scaffolder to Go I was also learning the language. During which I realized the diagnostics were pretty verbose in VS Code. I had gotten used to the QoL from one of my daily drivers: Pretty TypeScript Errors—an open-source VS Code extension. So, I checked out that repo and decided to build my own for Go.",
    summary:
      "A VS Code extension that reformats Go compiler errors and diagnostic reports into concise, readable inline annotations — inspired by Pretty TypeScript Errors and built by studying its open-source implementation.",
  },
];
