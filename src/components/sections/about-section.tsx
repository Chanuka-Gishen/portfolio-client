import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  ServerCog,
} from "lucide-react";
import { Reveal } from "../ui/reveal";

const expertise = [
  {
    icon: ServerCog,
    title: "Backend Engineering",
    description:
      "Scalable APIs, business logic, authentication, and system architecture.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Responsive interfaces and modern full-stack web applications.",
  },
  {
    icon: Database,
    title: "Data & Infrastructure",
    description:
      "Relational databases, cloud deployments, and CI/CD pipelines.",
  },
  {
    icon: Layers3,
    title: "End-to-End Ownership",
    description:
      "From technical planning and implementation to production deployment.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-b border-line py-20 sm:py-24 "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  01 / ABOUT
                </span>
                <span className="h-px w-12 bg-line" />
              </div>

              <h2
                id="about-heading"
                className="max-w-lg text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl"
              >
                Beyond
                <br />
                <span className="text-muted">the code.</span>
              </h2>

              <div className="mt-8 max-w-lg space-y-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">
                <p>
                  I'm a Full-Stack Software Engineer with over three years of
                  professional experience building practical, reliable software
                  solutions.
                </p>

                <p>
                  My work spans ERP systems, e-commerce platforms, business
                  automation, and modern web applications. I enjoy solving
                  complex problems, designing scalable backend systems, and
                  building intuitive user experiences.
                </p>

                <p>
                  I approach software development with an emphasis on clean
                  architecture, maintainability, performance, and continuous
                  learning.
                </p>
              </div>

              <Link
                href="/#contact"
                className="group mt-8 inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-semibold text-foreground transition-colors hover:text-accent"
              >
                Let's work together
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col justify-center">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-line pb-8">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-semibold tracking-[-0.07em] sm:text-7xl">
                      3
                    </span>
                    <span className="text-3xl font-medium text-accent">+</span>
                  </div>

                  <p className="mt-2 text-sm text-muted">
                    Years of professional experience
                  </p>
                </div>

                <div className="max-w-48 text-right">
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                    Engineering across the full stack
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                  What I bring to the table
                </h3>

                <div className="divide-y divide-line">
                  {expertise.map(
                    ({ icon: Icon, title, description }, index) => (
                      <div
                        key={title}
                        className="group flex gap-4 py-5 first:pt-0"
                      >
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface transition-colors group-hover:border-accent/40">
                          <Icon
                            size={19}
                            strokeWidth={1.7}
                            className="text-accent"
                            aria-hidden="true"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="text-sm font-semibold sm:text-base">
                              {title}
                            </h4>

                            <span className="font-mono text-[11px] text-muted/60">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>

                          <p className="mt-1.5 max-w-md text-sm leading-6 text-muted">
                            {description}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
