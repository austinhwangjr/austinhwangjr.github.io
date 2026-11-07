import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, repo, demo, image } = project;

  return (
    <Card className="overflow-hidden pt-0 transition-shadow hover:shadow-md">
      {image ? (
        <Image
          src={image}
          alt={`${title} screenshot`}
          width={800}
          height={450}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-muted text-sm text-muted-foreground">
          Screenshot coming soon
        </div>
      )}

      <CardContent className="flex flex-1 flex-col gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>

        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

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
      </CardContent>
    </Card>
  );
}