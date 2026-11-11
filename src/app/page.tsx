import Hero from "@/components/home/hero";
import Skills from "@/components/home/skills";
import FeaturedProjects from "@/components/home/featured-projects";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </main>
  );
}