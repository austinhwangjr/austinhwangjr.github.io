export type Project = {
  title: string;
  description: string;
  tags: string[];       // tech stack used, for filtering
  repo?: string;
  demo?: string;
  image?: string;       // path inside /public, e.g. "/projects/project-one.png"
  featured?: boolean;   // true/false, to display on landing page
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "What it does.",
    tags: ["Next.js", "TypeScript"],
  },
  {
    title: "Project Two",
    description: "What it does.",
    tags: ["Next.js", "TypeScript"],
  },
];