"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { usePathname } from "next/navigation";

export function Navbar() {
  const activeSection = useActiveSection();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/projects") {
      return pathname.startsWith("/projects");
    }

    if (href === "/resume") {
      return pathname === "/resume";
    }

    if (pathname !== "/") return false;

    return href === `/#${activeSection}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="text-lg font-bold tracking-tight">
          Portfolio<span className="text-accent">.</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => {
            const active = isActiveLink(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "location" : undefined}
                className={`
        relative rounded-md px-3 py-2 text-sm font-medium
        transition-colors duration-200
        ${
          active
            ? "bg-accent/10 text-accent"
            : "text-muted hover:text-foreground"
        }
      `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex size-11 items-center justify-center rounded-xl border border-line md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>
      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-background px-5 py-4 md:hidden"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-sm text-muted hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
