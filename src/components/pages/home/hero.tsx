import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:justify-between md:py-24">
      {/* Short intro, links */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi there, I&apos;m Austin
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Aspiring Software Engineer
        </p>
        <p className="mt-6 max-w-md leading-7 text-muted-foreground">
          Aspiring software engineer. Builder. Lifelong learner.
          <br />
          Currently cooking up my backend skills and looking for my next challenge.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Link href="/projects" className={buttonVariants({ size: "lg" })}>
            View projects
          </Link>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon-lg" }),
                "rounded-full"
              )}
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Image next to intro */}
      <Image
        src="/hero-profile.jpg"
        alt="Portrait of Self"
        width={500}
        height={500}
        priority
        className="size-48 rounded-full border object-cover md:size-56"
      />
    </section>
  );
}