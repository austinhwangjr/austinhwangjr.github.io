import type { Metadata } from "next";
import ProjectGrid from "@/components/projects/project-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've worked on.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 text-muted-foreground">
          A collection of projects I&apos;ve worked on, including school projects
        </p>
      </header>

      <ProjectGrid projects={projects} />
    </main>
  );
}