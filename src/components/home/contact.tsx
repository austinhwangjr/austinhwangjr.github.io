import { buttonVariants } from "@/components/ui/button";
import { socials } from "@/data/socials";

export default function Contact() {
  // Only external profile links
  const links = socials.filter((s) => s.href.startsWith("http"));

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl px-6 py-16 text-center scroll-mt-24"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mx-auto mt-3 max-w-md text-muted-foreground">
        Have an opportunity, or just want to say hello?
        <br/>
        Reach out on LinkedIn or check out my GitHub.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: label === "LinkedIn" ? "default" : "outline",
              size: "lg",
            })}
          >
            <Icon className="size-4" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}