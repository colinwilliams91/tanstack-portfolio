
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
    }
} as const;
