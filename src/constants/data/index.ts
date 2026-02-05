import type { LinkHTMLAttributes } from "react";
import appCss from "~/styles/app.css?url";

export const STRUCTURED_DATA = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Colin Williams",
    "jobTitle": "Full-Stack Software Engineer",
    "description": "Full-stack software engineer specializing in React, TypeScript, TanStack, .NET, C#, SQL, and cloud technologies",
    "url": "https://colin-williams.netlify.app",
    "sameAs": [
      "https://github.com/colinwilliams91",
      "https://www.linkedin.com/in/colin-williams-dev/",
      "https://dev.to/colin-williams-dev"
    ],
    "knowsAbout": [
      "React",
      "TypeScript",
      "JavaScript",
      "TanStack",
      ".NET",
      "C#",
      "SQL",
      "NoSQL",
      "Azure",
      "AWS",
      "Cloud Computing",
      "Web Development",
      "Application Development",
      "Full-Stack Development",
      "Software Engineering",
      "Agile Methodologies",
      "Object-Oriented Programming",
      "RESTful APIs",
      "Domain Driven Design"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "AWS Certified Solutions Architect"
    }
} as const;

export const META = {
    STRUCTURED_DATA,
    ABOUT: {
        TITLE: "About Colin Williams - Software Engineer & Open Source Contributor",
        DESCRIPTION: "Learn more about Colin Williams, a full-stack software engineer with expertise in React, TypeScript, .NET, and cloud technologies. Open source contributor to Microsoft Aspire and passionate about modern web development.",
    },
    BLOGS: {
        TITLE: "Blogs by Colin Williams - Software Engineering Insights & How-Tos",
        DESCRIPTION: "Read Colin Williams' blog posts about software engineering, web development, React, TypeScript, TanStack, Git and modern development practices. Technical articles and insights from a full-stack developer.",
    },
    PROJECTS: {
        TITLE: "Projects by Colin Williams - Software Development Portfolio",
        DESCRIPTION: "Explore Colin Williams' software development projects including React applications, TypeScript projects, C# backends and open source contributions. View GitHub repositories, public libraries and technical work.",
    },
    INDEX: {
        TITLE: "Colin Williams - Full-Stack Software Engineer | Web Developer Portfolio",
        DESCRIPTION: "Welcome to Colin Williams' portfolio. Full-stack software engineer with expertise in React, TypeScript, TanStack, .NET, C#, SQL, AWS, and modern web technologies. Contributing to open source projects like Microsoft Aspire.",
    },
    ROOT: {
      DATA: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Colin Williams - Full-Stack Software Engineer | Web Developer Portfolio" },
      { name: "description", content: "Colin Williams is a full-stack software engineer and web developer specializing in React, TypeScript, TanStack, .NET, C#, SQL, AI, UI/UX and cloud technologies. Explore projects, blog posts, and technical expertise." },
      { name: "keywords", content: "Colin Williams, software engineer, web developer, full-stack developer, React developer, TypeScript, TanStack, .NET, C#, SQL, AI, LLM, AWS, cloud computing, software development portfolio" },
      { name: "author", content: "Colin Williams" },
      { name: "robots", content: "index, follow" },

      // Open Graph meta tags for social sharing
      { property: "og:title", content: "Colin Williams - Full-Stack Software Engineer" },
      { property: "og:description", content: "Full-stack software engineer specializing in React, TypeScript, TanStack, .NET, C#, SQL, AI, UI/UX and cloud technologies. View my portfolio, projects, and technical blog." },
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
      { name: "twitter:description", content: "Full-stack software engineer specializing in React, TypeScript, TanStack, .NET, C#, SQL, AI, UI/UX and cloud technologies." },
      { name: "twitter:image", content: "https://colin-williams.netlify.app/og-image.webp" },
      { name: "twitter:image:alt", content: "Colin Williams - Full-Stack Software Engineer" },
      { name: "twitter:creator", content: "@colinwilliams91" },
    ],
    LINKS: [
      // Preconnect to external APIs for faster data fetching
      { rel: "preconnect", href: "https://api.github.com" },
      { rel: "preconnect", href: "https://dev.to" },
      
      // Preconnect to Google Fonts to establish early connection
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },

      // Preload app.css for high priority but non-blocking load
      { rel: "preload", href: appCss, as: "style" },
      { rel: "stylesheet", href: appCss },

      // Defer Google Fonts loading (non-critical for first paint)
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap",
        media: "print",
        onLoad: "this.media='all'", // Runtime string for deferred loading
      },

      { rel: "canonical", href: "https://colin-williams.netlify.app" },
    ] as LinkHTMLAttributes<HTMLLinkElement>[],
    }
};
