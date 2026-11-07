import { socials } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Austin Hwang</p>

        <ul className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="transition-colors hover:text-foreground"
              >
                <Icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}