import type { Metadata } from "next";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import AboutCard from "@/components/about/about-card";
import EntryList from "@/components/about/entry-list";
import TagList from "@/components/about/tag-list";
import { buttonVariants } from "@/components/ui/button";
import { education, experience, learning, interests } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: "A bit about me, my background, and what I'm working towards.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">About me</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          A little about who I am and what I&apos;m working towards
        </p>
      </header>

      {/* Photo + bio */}
      <section className="grid gap-10 md:grid-cols-[240px_1fr]">
      <div className="relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-2xl border md:mx-0 md:aspect-auto md:w-full">
        <Image
          src="/about-profile.jpg"
          alt="Portrait of Austin"
          fill
          sizes="(min-width: 768px) 240px, 224px"
          className="object-cover object-top"
        />
      </div>

        <div className="space-y-4 text-center leading-7 text-muted-foreground md:text-left">
          {/* Bio */}
          <p>
            I&apos;m a computer science graduate from Singapore Institute of Technology, and I got into programming after 
            tinkering with some scripts and configs in one of my favourite video games, Team Fortress 2, back in the day. 
            What started as a way to change my gaming experience turned into the thing I enjoy spending my time on.
          </p>
          <p>
            These days, I&apos;m focused on improving my skills and exploring processes and technologies, 
            like full-stack development (Next.js, NestJS, etc.) and even DevOps (CI/CD, Docker / Kubernetes, IaC, etc.).
            I like building things end to end, from the idea to something people can actually use, and I&apos;m especially 
            interested in learning how different technologies come together to build better software.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline" }) + " mt-2"}
          >
            <FiDownload className="size-4" /> Resume
          </a>
        </div>
      </section>

      {/* Fact cards */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <AboutCard title="Education">
          <EntryList entries={education} emptyText="Add education here." />
        </AboutCard>

        <AboutCard title="Experience">
          <EntryList entries={experience} emptyText="Add prior experience here." />
        </AboutCard>

        <AboutCard title="Currently learning">
          <TagList items={learning} />
        </AboutCard>

        <AboutCard title="Outside of code">
          <TagList items={interests} />
        </AboutCard>
      </section>
    </main>
  );
}