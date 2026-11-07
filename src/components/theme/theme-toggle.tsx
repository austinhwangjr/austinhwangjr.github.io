"use client";

//import { Moon, Sun } from "lucide-react";
import { GrSun } from "react-icons/gr";
import { HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <GrSun className="size-4 dark:hidden" />
      <HiOutlineMoon className="hidden size-4 dark:block" />
    </Button>
  );
}