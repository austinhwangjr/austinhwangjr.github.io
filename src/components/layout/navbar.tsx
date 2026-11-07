"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gi3dGlasses } from "react-icons/gi";
import { buttonVariants } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 flex justify-center px-4 pt-4">
      <nav className="flex items-center rounded-full border bg-background/70 py-1.5 pl-4 pr-1.5 shadow-sm backdrop-blur-md">
        {/* Logo + name */}
        <Link href="/" className="mr-4 flex items-center gap-2 font-medium sm:mr-8">
          {/* Temp icon for now */}
          <Gi3dGlasses className="size-5" />
          <span className="hidden sm:inline">Austin</span>
        </Link>

        {/* Home, About... */}
        <ul className="flex items-center gap-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "rounded-full text-muted-foreground",
                  pathname === href && "bg-secondary text-foreground"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}