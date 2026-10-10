"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      disabled={!mounted}
      aria-label={
        mounted
          ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`
          : "Toggle theme"
      }
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex size-11 items-center justify-center rounded-xl border border-line bg-surface transition-colors hover:bg-foreground/5 disabled:opacity-50"
    >
      {mounted && resolvedTheme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}
