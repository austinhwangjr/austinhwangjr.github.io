import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import ImageCarousel from "@/components/projects/image-carousel";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, repo, demo, images = [] } = project;

  return (
    <Card className="overflow-hidden pt-0 transition-shadow hover:shadow-md">
      {/* Image of project */}
      <ImageCarousel images={images} title={title} />

      <CardContent className="flex flex-1 flex-col gap-3">
        {/* Project title / description */}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>

        {/* Project tag(s) */}
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge
                className="h-auto px-3 py-1 text-xs text-muted-foreground"
                variant="outline"
              >
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        
        {/* Repo and demo links (if present) */}
        {(repo || demo) && (
          <div className="mt-auto flex gap-4 pt-2 text-sm">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <FaGithub className="size-4" /> GitHub
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:underline"
              >
                <FiExternalLink className="size-4" /> Live demo
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}