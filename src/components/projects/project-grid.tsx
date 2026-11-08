"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter based on project category */}
      {categories.length > 2 && (
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={active === category ? "default" : "outline"}
              className="rounded-full"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      )}

      {/* Cards for each project */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}