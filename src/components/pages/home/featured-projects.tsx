import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import ProjectCard from "@/components/project-card";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold tracking-tight">Featured projects</h2>

      {/* ToDo: Remove when projects are added */}
      <br></br>
      <h3 className="flex justify-center">Work in Progress</h3>

      {/* Grid of featured projects (in cards) */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link href="/projects" className={buttonVariants({ variant: "ghost" })}>
          View all projects <FaArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}