import Link from "next/link";
import Hero from "@/components/pages/home/hero";
import Skills from "@/components/pages/home/skills";
import FeaturedProjects from "@/components/pages/home/featured-projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <FeaturedProjects />

      <section className="mx-auto w-full max-w-5xl px-6 py-16 text-center">
        <p className="text-muted-foreground">
          Have an opportunity, or just want to say hello?{" "}
          <Link
            href="/contact"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Get in touch
          </Link>
        </p>
      </section>
    </main>
  );
}