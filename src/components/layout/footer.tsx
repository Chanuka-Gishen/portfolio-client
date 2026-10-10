import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 py-14 md:grid-cols-[1fr_auto] md:gap-16">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-block text-xl font-bold tracking-[-0.05em]"
            >
              {siteConfig.name}
              <span className="text-accent">.</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-muted">
              Building reliable software, scalable systems, and thoughtful
              digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Navigation
              </h3>

              <nav
                aria-label="Footer navigation"
                className="flex flex-col gap-3"
              >
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                Connect
              </h3>

              <div className="flex flex-col gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-accent"
                >
                  GitHub
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-accent"
                >
                  Email
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <p className="font-mono text-[11px]">Designed & built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
