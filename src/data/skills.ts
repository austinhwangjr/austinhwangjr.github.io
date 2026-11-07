import type { IconType } from "react-icons";
import {
  CPlusplus,
  CSharp,
  C,
  Python,
  TypescriptIcon,
  Javascript,
  _React,
  NextjsIcon,
  Nestjs,
  TailwindIcon,
  Postgresql,
  MicrosoftSqlServer,
  FirebaseIcon,
  Aws,
  TerraformIcon,
  Unity,
  UnrealengineIcon,
  GitIcon,
  GithubIcon,
  Gitlab,
  DockerIcon,
  Jira,
  Jest,
  Playwright
} from "@dev.icons/react";

export type Skill = {
  name: string;
  icon?: IconType
}

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: CPlusplus },
      { name: "C#", icon: CSharp },
      { name: "C", icon: C },
      { name: "Python", icon: Python },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "JavaScript", icon: Javascript },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", icon: _React },
      { name: "Next.js", icon: NextjsIcon },
      { name: "NestJS", icon: Nestjs },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Data & Cloud",
    skills: [
      { name: "PostgreSQL", icon: Postgresql },
      { name: "Microsoft SQL Server", icon: MicrosoftSqlServer },
      { name: "Firebase", icon: FirebaseIcon },
      { name: "AWS", icon: Aws },
      { name: "Terraform", icon: TerraformIcon },
    ],
  },
  {
    title: "Game Development",
    skills: [
      { name: "Unity", icon: Unity },
      { name: "Unreal Engine", icon: UnrealengineIcon },
    ],
  },
  {
    title: "Tooling & Workflow",
    skills: [
      { name: "Git", icon: GitIcon },
      { name: "GitHub", icon: GithubIcon },
      { name: "GitLab", icon: Gitlab },
      { name: "Docker", icon: DockerIcon },
      { name: "Jira", icon: Jira },
      { name: "Jest", icon: Jest },
      { name: "Playwright", icon: Playwright },
    ],
  },
];