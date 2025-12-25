///////////////////////////////////////////
// DaisyUI Text Rotate can only iterate ///
// over collections of 6 per <span> ///////
///////////////////////////////////////////

export const client:string[][] = [
    [
        "React",
        "Svelte",
        "Vue.js",
        "jQuery",
        "Angular",
    ],
    [
        "TanStack",
        "Next.js",
        "HTMX",
        "Tailwind",
        "Axios",
    ],
] as const;

export const server:string[][] = [
    [
        "Node.js",
        "Express",
        "REST API",
        "WebSockets",
    ],
    [
        ".NET",
        "LINQ",
        "Fluent Validation",
        "MediatR",
    ],
] as const;

export const database:string[][] = [
    [
        "SQL Server",
        "T-SQL",
        "Execution Plans",
        "Entity Framework",
        "Indexing",
        "SSMS",
    ],
    [
        "MongoDB",
        "Aggregate Pipelines",
        "Query Plans",
    ],
] as const;

export const language:string[][] = [
    [
        "C#",
        "TypeScript",
        "JavaScript",
        "SQL",
    ],
    [
        "Git",
        "Powershell",
        "Bash",
    ],
] as const;

export const methodology:string[][] = [
    [
        "OOP",
        "SOLID",
        "DDD",
        "CQRS",
        "Unit of Work",
    ],
    [
        "CI/CD",
        "TDD",
        "Agile",
    ],
] as const;

export const devops:string[][] = [
    [
        "Azure",
        "AWS",
        "Docker",
        "Kubernetes",
    ],
    [
        "GitHub Actions",
        "YAML",
        "Service Bus",
    ],
] as const;
